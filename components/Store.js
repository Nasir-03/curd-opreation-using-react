import { configureStore } from '@reduxjs/toolkit'
import CurdReducer from './CurdSlice'

export const Store = configureStore({
    reducer: {
        curd: CurdReducer
    }
})