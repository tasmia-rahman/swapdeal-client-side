import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ show, handleClose, product }) => {
    const { user } = useContext(AuthContext);
    const { name: productName, resale_price } = product;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            productName,
            price,
            userName,
            email,
            phone,
            location
        }

        fetch('https://swapdeal-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    handleClose();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} style={{ opacity: 1, visibility: 'visible' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Book for <span className='green-color'>{productName}</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="productName" type="text" defaultValue={productName} disabled placeholder="Product Name" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={resale_price} disabled placeholder="Resale Price" className="input w-full input-bordered" />
                        <input name="userName" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BookingModal;