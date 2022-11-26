import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, image, name, condition, resale_price, original_price, years_of_use, location, description } = product;
    return (
        <div>
            <div class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt="Home"
                    src={image}
                    class="h-56 w-full rounded-md object-cover"
                />

                <div class="mt-2">
                    <dl>
                        <div className='flex flex-row justify-between'>
                            <div>
                                <dt class="sr-only">Price</dt>

                                <dd class="text-sm text-gray-500">${resale_price} - Resale Price</dd>
                            </div>
                            <div>
                                <dt class="sr-only">Price</dt>

                                <dd class="text-sm text-gray-500">${original_price} - Original Price</dd>
                            </div>
                        </div>

                        <div>
                            <dt class="sr-only">Address</dt>

                            <dd class="font-semibold">{name}</dd>
                        </div>
                        <div>
                            <dt class="sr-only">Price</dt>

                            <dd class="text-sm text-gray-800">{description}</dd>
                        </div>
                    </dl>

                    <div class="mt-6 flex items-center justify-between gap-8 text-xs">
                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">

                            <div class="mt-1.5 sm:mt-0">
                                <p class="text-gray-500 mb-0">Location</p>

                                <p class="font-medium">{location}</p>
                            </div>
                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">

                            <div class="mt-1.5 sm:mt-0">
                                <p class="text-gray-500 mb-0">Condition</p>

                                <p class="font-medium">{condition}</p>
                            </div>
                        </div>

                        <div class="sm:inline-flex sm:shrink-0 sm:items-center">

                            <div class="mt-1.5 sm:mt-0">
                                <p class="text-gray-500 mb-0">Years of use</p>

                                <p class="font-medium">{years_of_use}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='mb-1'>Seller: </p>
                        <p className='mb-0'>Posted on: </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;