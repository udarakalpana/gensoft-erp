import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import UserSignIn from "../../components/user/UserSignIn";
import DemoUserDashboard from "../../components/dashboard/demoUserDashboard/DemoUserDashboard.tsx";
import {useSelector} from "react-redux";
import {AppState} from "../../../store.ts";

const AppRoutes:React.FC = () => {

    const checkUserRoleAndIsAuthenticated = (): boolean => {
        return useSelector((state: AppState) => state.erp_store.auth.isAuthenticated)
    }

    return (
       <Routes>
           <Route path="/" element={<UserSignIn />} />
           <Route path="/dashboard/*" element={
               checkUserRoleAndIsAuthenticated() ?
                   (<DemoUserDashboard />) :
                <Navigate to="/" replace />
           }/>
       </Routes>
    );
};

export default AppRoutes;
