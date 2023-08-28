import axios from 'axios'
// import { useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { authenticationCookieKey } from './constants'

const getToken = () => {
  let userToken
  try {
    let tokenString = localStorage.getItem(authenticationCookieKey)
    if (tokenString && tokenString.length > 0) {
      userToken = JSON.parse(tokenString)
      axios.defaults.headers.authorization = 'Bearer ' + userToken.token
    }
  } catch (error) {
    console.log(error)
  }
  return userToken
}

const setTokenToStorage = (userToken) => {
  localStorage.setItem(authenticationCookieKey, JSON.stringify(userToken))
}

const clearToken = () => {
  localStorage.removeItem(authenticationCookieKey)
  axios.defaults.headers.authorization = ''
}

const saveToken = (userToken) => {
  if (!isEmpty(userToken)) {
    setTokenToStorage(userToken)
    axios.defaults.headers.authorization = 'Bearer ' + userToken.token
  } else {
    clearToken()
    axios.defaults.headers.authorization = ''
  }
}

// export default function useToken() {
//   const [token, setToken] = useState(getToken())

//   const saveToken = (userToken) => {
//     if (!isEmpty(userToken)) {
//       setTokenToStorage(userToken)
//       axios.defaults.headers.authorization = 'Bearer ' + userToken.token
//     } else {
//       clearToken()
//       axios.defaults.headers.authorization = ''
//     }

//     setToken(userToken)
//   }

//   return [
//     token,
//     saveToken,
//   ]
// }

export { getToken, saveToken, clearToken }
