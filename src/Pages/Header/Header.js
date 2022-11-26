import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import photo from './logo.png'
import './Header.css'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={photo}
                            width="200"
                            height="60"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='link' to={'/home'}>Home</Link>
                            <Link className='link' to={'/blog'}>Blog</Link>


                        </Nav>
                        <Nav>
                            <Nav.Link >

                                {user?.uid ?
                                    <>
                                        <Link className='link me-3' to={'/dashboard'}>Dashboard</Link>
                                        <img title={user?.displayName} src={user?.photoURL}
                                            height='30'
                                            className='rounded'
                                            alt='User images'></img>

                                        <Button className='ms-2' onClick={handleLogOut} variant="dark">Log Out</Button>

                                    </>
                                    :

                                    <>
                                        <Link className='link' to={'login'}>Login</Link>
                                        <Link className='link' to={'register'}>Register</Link>
                                    </>
                                }
                            </Nav.Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;