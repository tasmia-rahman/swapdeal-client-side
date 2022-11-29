import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const { createUser, updateUserInfo, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [role, setRole] = useState('buyer');

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Registered Successfully.');
                form.reset();
                setLoading(false);

                const profile = { displayName: fullName, photoURL: photoURL };
                updateUserInfo(profile)
                    .then(() => {
                        saveUser(fullName, email, role);
                    }).catch((error) => {
                        console.log(error);
                    });
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
                setCreatedUserEmail(email);
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
                <title>Register</title>
            </Helmet>
            <h3 className='text-center mb-3 green-color title'>Registration</h3>
            <div className='w-5/12 mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Full Name</Form.Label>
                        <Form.Control type="text" name="fullName" placeholder="Full name" required />
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
                    <div>
                        <p className='font-semibold'>Choose Account Type:</p>
                        <select defaultValue={role} onChange={(event) => setRole(event.target.value)} className='border'>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    <Form.Text className='d-block my-3 text-danger'>
                        {error}
                    </Form.Text>
                    <div className="d-flex justify-center mt-4 mb-2">
                        <Button className="green-color w-full" type="submit">
                            Register
                        </Button>
                    </div>
                    <Form.Text className='d-block mb-3 text-center'>
                        Already have an account? <Link to='/login'>Login</Link>
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default Register;