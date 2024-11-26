import {createSlice} from "@reduxjs/toolkit";
import {UserLoginIn} from "../api/user/UserLoginIn.js";

const initialState = {
    loading: false,
    userFirstName: '',
    userLastName: '',
    userName: '',
    userRole: 0,
    userToken: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(UserLoginIn.pending, (state) => {
            state.loading = true
        })
    }
})

export default authSlice.reducer
