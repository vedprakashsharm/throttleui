import { configureStore } from '@reduxjs/toolkit'
import user from './reducers/userSlice'
import startupUser from './reducers/startupUserSlice'

export const store = configureStore({
  reducer: {
    user,
    startupUser,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
