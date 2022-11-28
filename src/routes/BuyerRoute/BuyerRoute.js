import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useUser from '../../hooks/useUser';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [, , , , isBuyer, isUserLoading] = useUser(user?.email);
    const location = useLocation();

    if (loading || isUserLoading) {
        return <div className='text-center my-5'>
            <Spinner animation="border" />
        </div>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;