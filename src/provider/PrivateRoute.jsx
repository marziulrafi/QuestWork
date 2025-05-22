import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading/>;
    }

    return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
