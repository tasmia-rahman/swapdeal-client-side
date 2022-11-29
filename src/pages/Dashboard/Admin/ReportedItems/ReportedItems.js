import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Container } from 'react-bootstrap';
import { handleProductDelete } from '../../../../components/ProductDelete';

const ReportedItems = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://swapdeal-server.vercel.app/reportedProducts`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    return (
        <Container className='mx-5'>
            <h2 className="text-3xl">Reported Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
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
                                    <button onClick={() => handleProductDelete(product._id, refetch)} className='btn btn-sm btn-danger'>
                                        Delete
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

export default ReportedItems;