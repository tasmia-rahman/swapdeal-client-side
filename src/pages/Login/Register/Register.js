import React, { useContext, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, updateUserInfo, loading, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setSuccess(true);
                setLoading(false);
                handleUpdateUserInfo(fullName, photoURL);
            })
            .catch(error => setError(error.message))

    }

    const handleUpdateUserInfo = (fullName, photoURL) => {
        const profile = { displayName: fullName, photoURL: photoURL };
        updateUserInfo(profile)
            .then(() => {
                // Profile updated!
            }).catch((error) => {
                // An error occurred
            });
    }

    if (loading) {
        return <div className='text-center my-5'>
            <Spinner animation="border" />
        </div>
    }

    return (
        <Container>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <h3 className='text-center mb-3 red-color title'>Registration</h3>
            <div className='w-5/12 mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Full Name</Form.Label>
                        <Form.Control type="text" name="fullName" placeholder="Full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Photo URL</Form.Label>
                        <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='font-semibold'>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Text className='d-block mb-3'>
                        Already have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className='d-block mb-3 text-danger'>
                        {error}
                    </Form.Text>
                    <div className="d-flex justify-center mb-5">
                        <Button className="red-color w-1/2" type="submit" style={{ width: '500px' }}>
                            Register
                        </Button>
                    </div>
                </Form>
            </div>
            <h3 className='d-block m-3 red-color text-center'>
                {
                    success ? 'Registered successfully !!!' : ''
                }
            </h3>
        </Container>
    );
};

export default Register;