import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/TestSlice/counterSlice'

const store = configureStore({
    reducer: {
        count: counterReducer,
    },
})

export {store}