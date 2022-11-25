import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand href="/" className='d-flex align-items-center'>
                    <img className='logo' src='https://cdn.dribbble.com/users/60166/screenshots/13967952/media/9ea8447026fdcadf66196aa38fcc0207.jpg?compress=1&resize=400x300&vertical=top' alt="" />
                    <h3>Visa<span className='text-rose-700'>Press</span></h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto header-links">
                        <Link to='/home' className='nav-link'>Home</Link>
                        <Link to='/services' className='nav-link'>Services</Link>
                        <Link to='/blog' className='nav-link'>Blog</Link>
                    </Nav>
                    <Nav className="header-links">
                        {
                            user?.uid ?
                                <>
                                    <Link to='/my_reviews' className='nav-link'>My reviews</Link>
                                    <Link to='/add_service' className='nav-link'>Add service</Link>
                                    <Link className='nav-link' onClick={handleLogOut}>Log out</Link>
                                </>
                                :
                                <>
                                    <Link to='/register' className='nav-link'>Register</Link>
                                    <Link to='/login' className='nav-link'>Login</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;