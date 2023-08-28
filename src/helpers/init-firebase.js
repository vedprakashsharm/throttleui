import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'

const firebaseConfig = {
  apiKey: 'AIzaSyAZF7xUnoLn61E5X1iAMOaLErHQVR6sD5E',
  authDomain: 'faad-network.firebaseapp.com',
  projectId: 'faad-network',
  storageBucket: 'faad-network.appspot.com',
  messagingSenderId: '368510944083',
  appId: '1:368510944083:web:5e7a7646ca7217e76917a6',
  measurementId: 'G-7PNYNK2ZWS',
  // old key
  // apiKey: 'AIzaSyCRqMdmPjw_MJp2PtJgW_RLr5APpOOfT38',
  // authDomain: 'faad-platform.firebaseapp.com',
  // projectId: 'faad-platform',
  // storageBucket: 'faad-platform.appspot.com',
  // messagingSenderId: '714502833354',
  // appId: '1:714502833354:web:d061fbedd1e5fab96ba033',
  // TODO:// move this to env var
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export const getCustomError = (error) => {
  if (isEmpty(error)) {
    return ''
  } else if (error.code === 'auth/wrong-password') {
    return 'Invalid password.'
  } else if (error.code === 'auth/user-not-found') {
    return 'Email does not exist, Please register first.'
  } else if (error.code === 'auth/email-already-in-use') {
    return 'This email is already registered.'
  } else if (!!error.message) {
    return error.message.replace('Firebase: ', '').replace('auth/', '')
  }

  return 'Something went wrong.'
}

export const getFirstName = (authUser) => {
  if (authUser) {
    const name = get(authUser, 'user.displayName')
    if (name && name.length > 0) {
      return name.split(' ')[0]
    }
  }

  return
}

export const getLastName = (authUser) => {
  if (authUser) {
    const name = get(authUser, 'user.displayName')
    if (name && name.length > 0) {
      const nameArray = name.split(' ')
      if (nameArray.length > 1) {
        return nameArray.slice(1).join(' ')
      }
    }
  }

  return
}

export default auth
