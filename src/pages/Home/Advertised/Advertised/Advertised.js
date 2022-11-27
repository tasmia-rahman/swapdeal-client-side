import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BookingModal from '../../../Products/BookingModal/BookingModal';
import AdvertisedCard from '../AdvertisedCard/AdvertisedCard';

const Advertised = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);
    // const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [product, setProduct] = useState({});
    const handleProduct = prod => {
        setProduct(prod);
    }

    useEffect(() => {
        fetch('http://localhost:5000/advertisedProducts')
            .then(res => res.json())
            .then(data => {
                setAdvertisedProducts(data);
                // setLoading(false);
            })
            .catch(err => console.error(err))
    }, []);

    return (
        advertisedProducts.length > 0 ?
            <div className='pb-5'>
                <h2 className='text-center green-color title mb-4'>Advertised Products</h2>
                <Container>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            advertisedProducts.map(advertisedProduct => <AdvertisedCard
                                key={advertisedProduct._id}
                                advertisedProduct={advertisedProduct}
                                handleShow={handleShow}
                                handleProduct={handleProduct}
                            ></AdvertisedCard>)
                        }
                    </div>
                </Container>
                <BookingModal product={product} show={show} handleClose={handleClose}></BookingModal>
            </div>
            :
            ' '
    );
};

export default Advertised;