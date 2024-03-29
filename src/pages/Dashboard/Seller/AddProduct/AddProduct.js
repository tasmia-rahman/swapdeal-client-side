import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useUser from '../../../../hooks/useUser';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [seller] = useUser(user?.email);

    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        axios.get('https://swapdeal-server.vercel.app/categories')
            .then(data => {
                setCategories(data.data);
            })
    }, []);

    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const condition = form.condition.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const years_of_use = form.years_of_use.value;
        const phone_number = form.phone_number.value;
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.files[0];
        console.log(image);

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const product = {
                        image: imgData.data.url,
                        name,
                        category: categoryName,
                        condition,
                        resale_price,
                        original_price,
                        years_of_use,
                        phone_number,
                        location,
                        description,
                        sellerName: seller.name,
                        sellerEmail: seller.email,
                    }
                    // save product information to the database
                    fetch('https://swapdeal-server.vercel.app/products', {
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
                            if (result.acknowledged) {
                                toast.success('Product added successfully');
                                navigate('/dashboard/myproducts');
                            }
                        })
                }
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
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='font-semibold'>Category</Form.Label>
                        <Form.Control type="text" name="category" placeholder="Category" />
                    </Form.Group> */}

                    <Form.Group>
                        <Form.Label className='font-semibold'>Category</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            defaultValue={categoryName}
                            onChange={(event) => setCategoryName(event.target.value)}
                            required
                        >
                            <option>Choose Category</option>
                            {
                                categories.map(category => <option
                                    key={category._id}
                                    value={category.name}
                                >
                                    {category.name}
                                </option>)
                            }
                        </Form.Select>
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
                        <Form.Control type="file" name="image" placeholder="Image" accept="image/png, image/jpg, image/jpeg" />
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