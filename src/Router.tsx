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

    const Home = React.lazy(() => import("./pages/Home"));
    const UFM = React.lazy(() => import("./pages/UFM"));
    const GIT = React.lazy(() => import("./pages/GIT"));
    const Users = React.lazy(() => import("./pages/Users"));
    const Packages = React.lazy(() => import("./pages/Packages"));
    const Configuration = React.lazy(() => import("./pages/Configuration"));
    const UserCredentials = React.lazy(() => import("./pages/UserCredentials"));
    const OAuthCredentials = React.lazy(() => import("./pages/OAuthCredentials"));
    const KeyStore = React.lazy(() => import("./pages/KeyStore"));

    return (
        <Suspense >
            <Routes>
                <Route path={RouteConstants.root} element={<Home />} />
                <Route path={RouteConstants.ufmProfile} element={<UFM />} />
                <Route path={RouteConstants.gitAccounts} element={<GIT />} />
                <Route path={RouteConstants.users} element={<Users />} />
                <Route path={RouteConstants.packages} element={<Packages />} />
                <Route path={RouteConstants.configuration} element={<Configuration />} />
                <Route path={RouteConstants.userCredentials} element={<UserCredentials />} />
                <Route path={RouteConstants.oauthCreadentials} element={<OAuthCredentials />} />
                <Route path={RouteConstants.keyStore} element={<KeyStore />} />
            </Routes>
        </Suspense >
    );
};

export default Router;
