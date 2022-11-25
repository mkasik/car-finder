import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Product.css'

const Product = ({ car }) => {
    const { photo, name, location, category, resalePrice, orginalPrice, useYear, seller } = car;
    console.log(car.resalePrice)
    return (
        <div>
            <Container>
                <Row className='car-bdr'>
                    <Col><img className='car-img' src={photo} alt=""></img></Col>
                    <Col>

                        <Card.Body className='mt-4'>
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

                            <Button className='mt-2' variant="primary">Go somewhere</Button>
                        </Card.Body>

                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Product;