import { isSignInWithEmailLink } from 'firebase/auth';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Products from '../../Products/Products/Products';
import './Category.css'

const Category = ({ category }) => {
    const { category_name, category_id, img } = category
    console.log(category_name)
    // console.log(category)

    return (
        <div className=''>

            <Card style={{ width: '18rem' }}>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{category_name}</Card.Title>
                    <Card.Text>
                        We have more {category_name} car. You can see all car and details by clicking see all product button.
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button className='w-100' variant="primary">See All Product</Button></Link>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Category;