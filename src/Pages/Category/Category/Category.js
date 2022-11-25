import { isSignInWithEmailLink } from 'firebase/auth';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Products from '../../Products/Products/Products';

const Category = ({ category }) => {
    const { category_name, category_id, img } = category
    console.log(category_name)
    // console.log(category)

    return (
        <div className='d-flex'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{category_name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Category;