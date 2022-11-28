import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const products = useLoaderData();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [product, setProduct] = useState({});

    const handleProduct = prod => {
        setProduct(prod);
    }

    return (
        products.length > 0 ?
            <div className='pb-5'>
                <h2 className='text-center green-color title pb-4'>Products</h2>
                <Container>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            products.map(product => <ProductCard
                                key={product._id}
                                product={product}
                                handleShow={handleShow}
                                handleProduct={handleProduct}
                            ></ProductCard>)
                        }
                    </div>
                </Container>
                <BookingModal product={product} show={show} handleClose={handleClose}></BookingModal>
            </div>
            :
            <h3 className='text-center my-5'>No products are available</h3>
    );
};

export default Products;