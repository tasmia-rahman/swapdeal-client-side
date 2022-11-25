import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, name, image } = category;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>
                        <h4 className='green-color'>{name}</h4>
                    </Card.Title>
                    <div className='d-flex justify-end'>
                        <Button variant="primary">
                            <Link to={`/category/${_id}`} className='text-white no-underline'>See All</Link>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CategoryCard;