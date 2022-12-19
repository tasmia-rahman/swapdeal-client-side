import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { handleUserDelete } from '../../../../components/UserDelete';
import { HiCheckCircle } from "react-icons/hi";

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://swapdeal-server.vercel.app/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = id => {
        fetch(`https://swapdeal-server.vercel.app/sellers/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verified successfully.');
                    refetch();
                }
            })
    }

    return (
        <Container className='mx-5'>
            <h2 className="text-3xl">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td className='flex items-center'>
                                    {
                                        !seller.status && <button onClick={() => handleVerify(seller._id)} className='btn btn-warning btn-sm'>Unverified</button>

                                    }
                                    {
                                        seller.status &&
                                        <button className='btn btn-info btn-sm'>Verified</button>
                                    }
                                </td>
                                <td><button onClick={() => handleUserDelete(seller._id, refetch)} className='btn btn-sm btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default AllSellers;