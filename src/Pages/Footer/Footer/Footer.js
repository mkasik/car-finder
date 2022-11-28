import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>


            <Row >
                <Col sm={12} lg={4} className='mt-4'>
                    <Card.Title className='mb-4 text-white'>Brand Of Car</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Toyota</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Tesla</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">BMW</Card.Subtitle>
                </Col>
                <Col sm={12} lg={4} className='mt-4'>
                    <Card.Title className='mb-4 text-white'>Follow Us</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Link ><FaFacebook></FaFacebook></Link>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">

                        <Link ><FaLinkedin></FaLinkedin></Link>
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        <Link ><FaTwitter></FaTwitter></Link>
                    </Card.Subtitle>
                    <h6 className=''>Copyright 2022</h6>
                </Col>
                <Col sm={12} lg={4} className='mt-4'>
                    <Card.Title className='mb-4 text-white'>Car Finder</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Privacy Policy</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">About Us</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Contact Us</Card.Subtitle>
                </Col>

            </Row>


        </div>
    );
};

export default Footer;