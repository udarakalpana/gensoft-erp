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
            .addCase(UserLoginIn.fulfilled, (state, {payload}) => {
                state.loading = false
                state.userFirstName = payload.first_name
                state.userLastName = payload.last_name
                state.userName = payload.user_name
                state.userRole = payload.role
                state.userToken = payload.token
            })
    }
})

export default authSlice.reducer
