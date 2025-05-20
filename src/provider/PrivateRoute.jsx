import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
