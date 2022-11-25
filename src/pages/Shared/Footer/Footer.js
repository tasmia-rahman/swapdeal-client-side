import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <h3 className='text-center'>Visa<span className='red-color'>Press</span></h3>
            <hr />
            <Nav className="justify-content-center footer-links">
                <Nav.Item>
                    <Nav.Link>Contact Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Terms of Service</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Privacy Policy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>Privacy Settings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>VisaPress App</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-center footer-links">
                <Nav.Item>
                    <Nav.Link><FaFacebookF></FaFacebookF></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><FaTwitter></FaTwitter></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><FaInstagram></FaInstagram></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Footer;