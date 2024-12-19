import {persistReducer, persistStore} from "redux-persist";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import authSlice from "./src/utilities/auth/authSlice";
import employeeDetailsSlice from "./src/utilities/form/slices/employeeDetailsSlice.ts";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'employeeDetails']
}

const mainReducer = combineReducers({
    auth: authSlice,
    employeeDetails: employeeDetailsSlice,
})

const persistedReducer = persistReducer(persistConfig, mainReducer)

const store = configureStore({
    reducer: {
        // this auth name should want to be change
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export { store, persistor }


