import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../hooks/useUser';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [, , isAdmin, , , isUserLoading] = useUser(user?.email);
    const location = useLocation();

    if (loading || isUserLoading) {
        return <div className='text-center my-5'>
            <Spinner animation="border" />
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;