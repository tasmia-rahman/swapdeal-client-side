import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useUser from '../../../../hooks/useUser';

const MyOrders = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [, buyer] = useUser(user?.email);

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/bookings/${buyer.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data);
    //             setLoading(false);
    //         })
    //         .catch(err => console.error(err))
    // }, [buyer.email]);


    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/${buyer.email}`);
            const data = await res.json();
            return data;
        }
    });

    return (
        <Container className='mx-5'>
            <h2 className="text-3xl">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.productName}</td>
                                <td>{booking.image}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button className='btn btn-warning btn-sm'>Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <button className='btn btn-success btn-sm'>Paid</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default MyOrders;