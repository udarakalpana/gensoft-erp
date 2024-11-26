import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginIn } from "../api/user/UserLoginIn.js";
import { InitialState, UserPayload } from "../types/auth/auth";

const initialState: InitialState = {
    loading: false,
    userFirstName: "",
    userLastName: "",
    userName: "",
    userRole: 0,
    userToken: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserLoginIn.pending, (state) => {})
            .addCase(
                UserLoginIn.fulfilled,
                (state, { payload }: PayloadAction<UserPayload>) => {
                    state.loading = false;
                    state.userFirstName = payload.first_name;
                    state.userLastName = payload.last_name;
                    state.userName = payload.user_name;
                    state.userRole = payload.role;
                    state.userToken = payload.token;
                },
            );
    },
});

export default authSlice.reducer;
