import {createSlice} from "@reduxjs/toolkit";

const initialState = {
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
    extraReducers: () => {

    }
})
