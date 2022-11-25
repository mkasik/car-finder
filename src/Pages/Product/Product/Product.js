import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ car }) => {
    const { photo, name, location, category, resalePrice, orginalPrice, useYear, seller } = car;
    // console.log(car.resalePrice)
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

                            <Link to={`/book/${car._id}`}><Button className='mt-2' variant="primary">Book Now</Button></Link>
                        </Card.Body>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Product;