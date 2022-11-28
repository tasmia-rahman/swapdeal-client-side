import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useUser from '../../../hooks/useUser';
import { HiCheckCircle } from "react-icons/hi";

const ProductCard = ({ product, handleShow, handleProduct }) => {
    const { image, name, condition, resale_price, original_price, years_of_use, location, description, sellerName, sellerEmail, date } = product;

    const { user } = useContext(AuthContext);
    const [, buyer] = useUser(user?.email);

    const [isVerified, setIsVerified] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/users/sellers/${sellerEmail}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === 'verified') {
                    setIsVerified(true);
                }
                else {
                    setIsVerified(false);
                }
            })
    }, [sellerEmail])

    return (
        <div>
            <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="Home"
                    src={image}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div className='flex flex-row justify-between'>
                            <div>
                                <dt className="sr-only">Price</dt>

                                <dd className="text-sm text-gray-500">${resale_price} - Resale Price</dd>
                            </div>
                            <div>
                                <dt className="sr-only">Price</dt>

                                <dd className="text-sm text-gray-500">${original_price} - Original Price</dd>
                            </div>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-semibold">{name}</dd>
                        </div>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-800">{description}</dd>
                        </div>
                    </dl>

                    <div className="mt-6 flex items-center justify-between gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500 mb-0">Location</p>

                                <p className="font-medium">{location}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500 mb-0">Condition</p>

                                <p className="font-medium">{condition}</p>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center">

                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500 mb-0">Years of use</p>

                                <p className="font-medium">{years_of_use}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='mb-1'>Seller: {sellerName}</p>
                        {isVerified && <HiCheckCircle className='text-blue-600 font-bold'></HiCheckCircle>}
                    </div>
                    <p className='mb-0'>Posted on: {date}</p>

                    {
                        buyer?.email &&
                        <Button className='btn btn-sm btn-primary mt-3' onClick={() => { handleShow(); handleProduct(product) }}>
                            Book Now
                        </Button>
                    }
                </div>
            </div>
        </div >
    );
};

export default ProductCard;