import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ car }) => {
    const { photo, name, location, category, resalePrice, orginalPrice, useYear, seller } = car;
    // console.log(car.resalePrice)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='mt-4'>
            <Container>
                <Row className='car-bdr p-4'>
                    <Col><img className='car-img' src={photo} alt=""></img></Col>
                    <Col>

                        <Card.Body className='mt-4 p-4'>
                            <Card.Title className='mt-2'>
                                Car Model: {name}
                            </Card.Title>
                            <Card.Title className='mt-2'>
                                Resele Price: $ {resalePrice}
                            </Card.Title>
                            <Card.Title className='mt-2'>
                                Orginal Price: $ {orginalPrice}
                            </Card.Title >
                            <Card.Title className='mt-2'>
                                Use Of Year: {useYear}
                            </Card.Title>
                            <Card.Title className='mt-2'>
                                Location: {location}
                            </Card.Title>
                            <Card.Title className='mt-2'>
                                Seller Name: {seller}
                            </Card.Title>

                            <Link ><Button onClick={handleShow} className='mt-2' variant="primary">Book Now</Button></Link>
                            <Link ><Button className='mt-2 ms-2' variant="warning">Report To Admin</Button></Link>
                        </Card.Body>

                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>You can book now</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Product Name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Your Number" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Meeting Location</Form.Label>
                                <Form.Control type="text" placeholder="Meeting Locaation" />
                            </Form.Group>
                            <Button className='w-100' variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button> */}
                        {/* <Button variant="primary" onClick={handleClose}>
                            Book Now
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
};

export default Product;