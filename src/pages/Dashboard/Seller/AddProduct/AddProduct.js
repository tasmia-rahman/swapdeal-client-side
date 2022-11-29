import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useUser from '../../../../hooks/useUser';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [seller] = useUser(user?.email);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const condition = form.condition.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const years_of_use = form.years_of_use.value;
        const phone_number = form.phone_number.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;

        const product = {
            name,
            category,
            condition,
            resale_price,
            original_price,
            years_of_use,
            phone_number,
            location,
            description,
            image,
            sellerName: seller.name,
            sellerEmail: seller.email,
            status: 'available'
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Product added successfully');
                navigate('/dashboard/myproducts');
            })
    }

    return (
        <Container className='ps-5'>
            <h3>Add A Product</h3>
            <div className='w-5/12'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Product Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Product name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Category</Form.Label>
                        <Form.Control type="text" name="category" placeholder="Category" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Condition</Form.Label>
                        <Form.Control type="text" name="condition" placeholder="Condition" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Resale Price</Form.Label>
                        <Form.Control type="text" name="resale_price" placeholder="Resale Price" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Original Price</Form.Label>
                        <Form.Control type="text" name="original_price" placeholder="Original Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Years of use</Form.Label>
                        <Form.Control type="text" name="years_of_use" placeholder="Years of use" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Phone number</Form.Label>
                        <Form.Control type="text" name="phone_number" placeholder="Phone number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Location</Form.Label>
                        <Form.Control type="text" name="location" placeholder="Location" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Image</Form.Label>
                        <Form.Control type="text" name="image" placeholder="Image" />
                    </Form.Group>

                    <div className="d-flex justify-center mt-4 mb-2">
                        <Button className="btn-primary w-full" type="submit">
                            Add
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default AddProduct;