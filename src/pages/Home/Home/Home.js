import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Categories from '../Categories/Categories/Categories';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <Container fluid className='home-container'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
        </Container>
    );
};

export default Home;