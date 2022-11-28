import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

const AdvertiseCard = ({ data }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.photo} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Price: ${data.resalePrice}</Card.Subtitle>
                    <Card className=' ' >

                        <ListGroup variant="flush">
                            <ListGroup.Item>Used: {data.useYear} Years</ListGroup.Item>
                            <ListGroup.Item>Location: {data.location}</ListGroup.Item>
                            <ListGroup.Item>Seller: {data.seller}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Button className='mt-2' variant="primary">Book Now</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default AdvertiseCard;