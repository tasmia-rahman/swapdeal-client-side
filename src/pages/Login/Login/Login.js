import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { Container, Spinner } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { login, loading, setLoading, providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://visapress-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('visapressDB-token', data.token);
                        form.reset();
                        setLoading(false);
                        navigate(from, { replace: true });
                    });

            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            })

    }
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // get jwt token
                fetch('https://visapress-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('visapressDB-token', data.token);
                        setLoading(false);
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => setError(error.message))
    }

    if (loading) {
        return <div className='text-center my-5'>
            <Spinner animation="border" />
        </div>
    }

    return (
        <Container>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h3 className='text-center mb-3 red-color title'>Login</h3>
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
                        <Button className="red-color w-1/2" type="submit" style={{ width: '500px' }}>
                            Login
                        </Button>
                    </div>
                </Form>
                <div className="d-flex justify-center mt-3 mb-5">
                    <Button className="red-color w-1/2" onClick={handleGoogleSignIn} style={{ width: '500px' }} variant="success">
                        Google
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;