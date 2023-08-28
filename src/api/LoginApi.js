import axios from 'axios'

const logInUser = async ({email,pass}) => {
    const response = await axios.post(`SuperAdmin/SuperAdminLogin?UserId=${email}&Password=${pass}`)
    return response.data
}

export {
    logInUser,
}