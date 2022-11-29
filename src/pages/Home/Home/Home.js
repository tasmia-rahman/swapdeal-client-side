import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.css';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import { Helmet } from 'react-helmet-async';
import Advertised from '../Advertised/Advertised/Advertised';
import GetApp from '../GetApp/GetApp';

const Home = () => {
    return (
        <Container fluid className='home-container'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Categories></Categories>
            <Advertised></Advertised>
            <GetApp></GetApp>
        </Container>
    );
};

export default Home;