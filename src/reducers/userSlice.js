// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { getUserDetails, updateUserDetails } from '../api/investorApi'

// const initialState = {
//   data: {},
//   status: 'idle',
// }

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched. Thunks are
// // typically used to make async requests.
// export const getUserAsync = createAsyncThunk('user/getUser', async (userId) => {
//   const data = await getUserDetails(userId)
//   // The value we return becomes the `fulfilled` action payload
//   return data
// })

// export const updateUserAsync = createAsyncThunk(
//   'user/updateUser',
//   async (userDetails) => {
//     const data = await updateUserDetails(userDetails)
//     return data
//   }
// )

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   // The `reducers` field lets us define reducers and generate associated actions
//   reducers: {
//     // Redux Toolkit allows us to write "mutating" logic in reducers. It
//     // doesn't actually mutate the state because it uses the Immer library,
//     // which detects changes to a "draft state" and produces a brand new
//     // immutable state based off those changes
//     // Use the PayloadAction type to declare the contents of `action.payload`
//     setUserDetails: (state, action) => {
//       state.data = action.payload
//     },
//     resetUserDetails: () => {
//       return initialState
//     },
//   },
//   // The `extraReducers` field lets the slice handle actions defined elsewhere,
//   // including actions generated by createAsyncThunk or in other slices.
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUserAsync.pending, (state) => {
//         state.status = 'loading'
//       })
//       .addCase(getUserAsync.fulfilled, (state, action) => {
//         state.status = 'completed'
//         state.data = action.payload
//       })
//       .addCase(getUserAsync.rejected, (state, action) => {
//         if (action.error.message === 'Request failed with status code 403') {
//           state.status = 'unAuthorized'
//         } else {
//           state.status = 'failed'
//         }
//       })
//       .addCase(updateUserAsync.pending, (state) => {
//         state.status = 'loading'
//       })
//       .addCase(updateUserAsync.fulfilled, (state, action) => {
//         state.status = 'completed'
//         state.data = action.payload
//       })
//       .addCase(updateUserAsync.rejected, (state, action) => {
//         if (action.error.message === 'Request failed with status code 403') {
//           state.status = 'unAuthorized'
//         } else {
//           state.status = 'failed'
//         }
//       })
//   },
// })

// export const { setUserDetails, resetUserDetails } = userSlice.actions

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.user.data)`
// export const selectUser = (state) => state.user.data

// export const selectGetUserAsyncStatus = (state) => state.user.status

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// // export const incrementIfOdd = (amount) => (dispatch, getState) => {
// //   const currentValue = selectCount(getState())
// //   if (currentValue % 2 === 1) {
// //     dispatch(incrementByAmount(amount))
// //   }
// // }

// export default userSlice.reducer
