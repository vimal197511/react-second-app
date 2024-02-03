import {configureStore} from "@reduxjs/toolkit"
import newuser from './userslice'

export const Userstore = configureStore({
    reducer:newuser
})