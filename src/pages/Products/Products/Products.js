import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const products = useLoaderData();

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <div className='pb-5'>
            <h2 className='text-center green-color title pb-4'>Products</h2>
            <Container>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        // handleShow={handleShow}
                        ></ProductCard>)
                    }
                    <BookingModal></BookingModal>
                </div>
            </Container>
        </div>
    );
};

export default Products;