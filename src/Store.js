import { configureStore } from '@reduxjs/toolkit'
import darkReducer from './darkModeSlice'

const store = configureStore({
    reducer: {
        dark: darkReducer
    }
})

export default store