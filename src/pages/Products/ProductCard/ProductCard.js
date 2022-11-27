import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const ProductCard = ({ product, handleShow, handleProduct }) => {

    const { _id, image, name, condition, resale_price, original_price, years_of_use, location, description } = product;
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
                    <div>
                        <p className='mb-1'>Seller: </p>
                        <p className='mb-0'>Posted on: </p>
                    </div>
                    <Button variant="primary" onClick={() => { handleShow(); handleProduct(product) }}>
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;