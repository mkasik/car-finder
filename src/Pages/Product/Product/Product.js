import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
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
                        </Card.Body>

                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
};

export default Product;