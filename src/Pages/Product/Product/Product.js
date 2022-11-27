import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Product = ({ car }) => {
    const { user } = useContext(AuthContext);
    // console.log("this is User: ", user)
    const { _id, photo, name, location, category, resalePrice, orginalPrice, useYear, seller } = car;
    // console.log(car.resalePrice)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleBook = (book) => {
        console.log(book);
        setShow(true);
    }
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const number = form.number.value;
        const meeting = form.meeting.value;
        saveBooking(name, photo, resalePrice, user.displayName, user.email, number, meeting);

        form.reset();
        handleClose();


    }

    const saveBooking = (productName, productImg, price, userName, email, number, meetingLocation) => {
        const user = { productName, productImg, price, userName, email, number, meetingLocation }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success("Booked Successfull")


                }

            })
    }


    return (
        <div className='mt-4 '>
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

                            <Link ><Button onClick={() => handleBook(_id)} className='mt-2' variant="primary">Book Now</Button></Link>
                            <Link ><Button className='mt-2 ms-2' variant="warning">Report To Admin</Button></Link>
                        </Card.Body>

                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>You can book now</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleBooking}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Product Name" name="" defaultValue={name} readOnly />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" defaultValue={resalePrice} readOnly />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="name" defaultValue={user.displayName} readOnly />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" defaultValue={user.email} readOnly />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Your Number" name="number" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Meeting Location</Form.Label>
                                <Form.Control type="text" placeholder="Meeting Locaation" name="meeting" />
                            </Form.Group>
                            <Button className='w-100' variant="primary" type="submit">
                                Book Now
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