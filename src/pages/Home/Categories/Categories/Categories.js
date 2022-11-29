import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import CategoryCard from '../CategoryCard/CategoryCard';
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://swapdeal-server.vercel.app/categories')
            .then(data => {
                setCategories(data.data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <div className='text-center my-5'>
            <Spinner animation="border" />
        </div>
    }

    return (
        <div className='pb-5'>
            <h2 className='text-center green-color title mb-4'>Categories</h2>
            <Container>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        categories.map(category => <CategoryCard
                            key={category._id}
                            category={category}
                        ></CategoryCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Categories;