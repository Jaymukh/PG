import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { RouteConstants } from "./constants";

interface ProtectedRouteProps {
    auth: any;
    redirectPath: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ auth, redirectPath }) => {
    if (!auth || !Object.keys(auth).length) {
        return <Navigate to={redirectPath} />;
    }
    return <Outlet />;
}

const Router = () => {
    // const auth = useRecoilValue(authState);

    const Home = React.lazy(() => import("./pages/Administrator"));
    const UFM = React.lazy(() => import("./pages/UFM"));

    return (
        <Suspense >
            <Routes>
                <Route path={RouteConstants.root} element={<Home />} />
                <Route path={RouteConstants.ufmProfile} element={<UFM />} />
            </Routes>
        </Suspense >
    );
};

export default Router;
