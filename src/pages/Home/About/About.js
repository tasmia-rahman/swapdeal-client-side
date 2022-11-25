import React from 'react';
import { Button } from 'react-bootstrap';
import { HiBookmark, HiCheckCircle, HiLightningBolt } from "react-icons/hi";
import './About.css';

const About = () => {
    return (
        <div className='mt-5'>
            {/* <h3 className='text-center red-color title'>About</h3> */}
            <div className='about-container text-center'>
                <div className='about-div'>
                    <HiCheckCircle className='about-icons mt-5 mb-3'></HiCheckCircle>
                    <h4 className='mb-3'>Apply for visa</h4>
                    <p className='mb-3 mx-4'>Find information and begin you application!</p>
                    <Button className='mb-5'>Start Apply</Button>
                </div>
                <div className='about-div'>
                    <HiBookmark className='about-icons mt-5 mb-3'></HiBookmark>
                    <h4 className='mb-3'>Book an appointment</h4>
                    <p className='mb-3 mx-4'>Schedule your appointment with me on time!</p>
                    <Button className='mb-5'>Book Now</Button>
                </div>
                <div className='about-div'>
                    <HiLightningBolt className='about-icons mt-5 mb-3'></HiLightningBolt>
                    <h4 className='mb-3'>Premium services</h4>
                    <p className='mb-3 mx-4'>Enjoy a faster and more easy, more reliable service!</p>
                    <Button className='mb-5'>Read More</Button>
                </div>
            </div>
        </div>
    );
};

export default About;