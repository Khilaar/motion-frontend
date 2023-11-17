import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import userReducer from './Slices/userSlice'

const store = configureStore({
    reducer: {
        count: counterReducer,
        user: userReducer,
    },
})

export {store}