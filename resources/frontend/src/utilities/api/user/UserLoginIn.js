import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const UserLoginIn = createAsyncThunk(
    'auth/login',
    async ({userSignInDetails}) => {
        return axios.post(
            "/api/user-sign-in",
            userSignInDetails,
        ).then((response) => {
            console.log(response)
        })
    }
)
