import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { handleDelete } from '../../../../components/UserDelete';
import { HiCheck } from "react-icons/hi";

const AllSellers = () => {
    const [status, setStatus] = useState('Unverified');

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = id => {
        fetch(`http://localhost:5000/sellers/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verified successfully.');
                    setStatus('Verified');
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
                                        status === 'Unverified' ? '' : <HiCheck className='text-info mr-1'></HiCheck>
                                    }
                                    <button onClick={() => handleVerify(seller._id)} className={`btn btn-sm text-white ${status === 'Unverified' ? 'btn-warning' : 'btn-info'}`}>
                                        {status}
                                    </button>
                                </td>
                                <td><button onClick={() => handleDelete(seller._id, refetch)} className='btn btn-sm btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default AllSellers;