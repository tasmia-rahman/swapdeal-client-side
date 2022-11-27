import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useUser from '../../../../hooks/useUser';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [seller] = useUser(user?.email);
    // console.log(isSeller, seller.name);

    // const [advertise, setAdvertise] = useState(false);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${seller.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleAdvertise = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertised successfully.');
                    refetch();
                }
            })

        // fetch(`http://localhost:5000/products/${id}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data.acknowledged);
        //         if (!data.acknowledged) {
        //             toast.error(data.message);
        //         }
        //     })
        //     .catch(err => console.error(err))

    }

    const handleProductDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast('Deleted successfully');
                }
            })

    }

    return (
        <Container className='mx-5'>
            <h2 className="text-3xl">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.resale_price}</td>
                                <td>{product.status}</td>
                                <td>
                                    <button onClick={() => handleProductDelete(product._id)} className='btn btn-sm btn-danger'>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleAdvertise(product._id)} className='btn btn-sm btn-warning'>
                                        {/* {advertise ? 'Advertised' : 'Not Advertised'} */}
                                        Advertise
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default MyProducts;