import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ }) => {
    const { user } = useContext(AuthContext);
    // const { name: productName, resale_price } = product;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        // const productName = form.productName.value;
        // const price = form.price.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            // productName,
            // price,
            userName,
            email,
            phone,
            location
        }

        fetch('http://localhost:5000/bookings', {
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
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            {/* <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="productName" type="text" defaultValue={productName} disabled placeholder="Product Name" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={resale_price} disabled placeholder="Resale Price" className="input w-full input-bordered" />
                        <input name="userName" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form> */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;