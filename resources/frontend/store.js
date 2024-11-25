import {persistReducer} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistReducer = persistReducer(persistConfig)

configureStore({
    reducer: {
        auth: persistReducer
    }
})
