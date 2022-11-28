import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const { logout } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='text-center my-5'>
            <p>Something went wrong!!!</p>
            <p className='text-danger'>{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button onClick={handleLogOut}> sign out</button> and log back in.</h4>
        </div>
    );
};

export default DisplayError;