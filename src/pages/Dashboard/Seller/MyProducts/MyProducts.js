import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useUser from '../../../../hooks/useUser';
import { handleProductDelete } from '../../../../components/ProductDelete';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [seller] = useUser(user?.email);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', seller?.email],
        queryFn: async () => {
            const res = await fetch(`https://swapdeal-server.vercel.app/products/${seller?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleAdvertise = id => {
        fetch(`https://swapdeal-server.vercel.app/products/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertised successfully.');
                    refetch();
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
                                <td>
                                    <button className='btn btn-sm btn-secondary'>{product.sale_status}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleProductDelete(product._id, refetch)} className='btn btn-sm btn-danger'>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    {
                                        !product.isAdvertised &&
                                        <button
                                            disabled={product.sale_status === 'paid'}
                                            onClick={() => handleAdvertise(product._id)}
                                            className='btn btn-sm btn-warning'>
                                            Advertise
                                        </button>
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

export default MyProducts;