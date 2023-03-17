import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const { login, setLoading, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        // navigate(from, { replace: true });
        navigate('/');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(user.email);
                setLoading(false);
                form.reset();
            })
            .catch(error => setError(error.message))
            .finally(() => {
                setLoading(false);
            })

    }
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setLoading(false);
                setLoginUserEmail(user.email);
                saveUser(user.displayName, user.email, 'buyer');
            })
            .catch(error => setError(error.message))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://swapdeal-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
            .catch(err => console.log(err))
    }

    // if (loading) {
    //     return <div className='text-center my-5'>
    //         <Spinner animation="border" />
    //     </div>
    // }

    return (
        <Container>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h3 className='text-center mb-3 green-color title'>Login</h3>
            <div className='w-5/12 mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='font-semibold'>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Text className='d-block mb-3'>
                        Don't have an account? <Link to='/register'>Register</Link>
                    </Form.Text>
                    <Form.Text className='d-block mb-3 text-danger'>
                        {error}
                    </Form.Text>
                    <div className="d-flex justify-center">
                        <Button className="green-color w-full" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <div className="d-flex justify-center mt-3 mb-5">
                    <Button className="w-full text-white" onClick={handleGoogleSignIn} variant="info">
                        Google
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;