import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Banner from '../Banner/Banner';
import About from '../About/About';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <Container fluid className='home-container'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
        </Container>
    );
};

export default Home;