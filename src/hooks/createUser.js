import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { get, isEmpty } from 'lodash'

import { ACCOUNT_TYPE } from '../helpers/constants'
import { logInUser } from '../api/investorApi'
import { logInStartUpUser } from '../api/startUpApi'
import { addInvestor, addStartup } from '../api/registrationApi'
import { saveToken } from '../helpers/userToken'
import { getFirstName, getLastName } from '../helpers/init-firebase'

const useCreateUser = () => {
  const navigate = useNavigate()

  const createUser = async (userDetail, registrationType) => {
    if (registrationType === ACCOUNT_TYPE.investor) {
      await createInvestorUser(userDetail, navigate)
    } else {
      await createStartUpUser(userDetail, navigate)
    }
  }

  return createUser
}

const createInvestorUser = async (userDetail, navigate) => {
  try {
    let existingUser
    try {
      existingUser = await logInUser(userDetail.email)
    } catch {}

    if (isEmpty(existingUser)) {
      const data = await addInvestor({
        ...userDetail,
        social_domain: 'email',
      })
      saveToken(data)
      navigate('investor')
    } else {
      toast.error(
        'It looks like you are already registered with us. Please login'
      )
    }
  } catch (error) {
    console.log(error)
  }
}

const createStartUpUser = async (userDetail, navigate) => {
  try {
    let existingUser
    try {
      existingUser = await logInStartUpUser(userDetail.email)
    } catch {}

    if (isEmpty(existingUser)) {
      const data = await addStartup(userDetail)
      saveToken(data)
      navigate('startup')
    } else {
      toast.error(
        'It looks like you are already registered with us. Please login'
      )
    }
  } catch (error) {
    console.log(error)
  }
}

export const getUserDetailFromAuthenticatedUser = (userCredential) => {
  if (!isEmpty(userCredential) && userCredential.user) {
    const userDetail = {
      email: userCredential.user.email,
      name: userCredential.user.displayName,
      firstName: getFirstName(userCredential),
      lastName: getLastName(userCredential),
      picture: userCredential.user.photoURL,
      socialDomain: 'google',
      socialDomainId: get(userCredential, 'user.providerData[0].uid'),
    }

    return userDetail
  }
}
export default useCreateUser
