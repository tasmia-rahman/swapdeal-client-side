import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../hooks/useUser';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [, , , isSeller, , isUserLoading] = useUser(user?.email);
    const location = useLocation();

    if (loading || isUserLoading) {
        return <div className='text-center my-5'>
            <Spinner animation="border" />
        </div>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login"></Navigate>;
};

export default SellerRoute;