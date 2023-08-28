import axios from 'axios'


const getAdminDetails = async () => {
    const response = await axios.get(`SystemUser/getUser`)
    return response.data
}

const addAdmin = async ({ UserName,
    UserEmail,
    MobileNo,
    CompanyName, }) => {
    const response = await axios.post(`SystemUser/AddUser`, {
        UserName,
        UserEmail,
        MobileNo,
        CompanyName,
    })

    return response.data
}

export {
    addAdmin, getAdminDetails
}