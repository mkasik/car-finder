import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>

            <Card.Body>
                <img height={150} width={150} className="round" alt='' src='https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'></img>
                <Card.Title className='text-center'>Card Title</Card.Title>
            </Card.Body>

        </div>
    );
};

export default Sidebar;