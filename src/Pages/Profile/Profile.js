import React from 'react';
import { Card } from 'react-bootstrap';

const Profile = () => {
    return (
        <div>
            <div>
                <img height={150} width={150} className="round" alt='' src='https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'></img>
                <Card.Title className='text-center'>Card Title</Card.Title>
                <p className='text-center '>Email: asik@gmail.com</p>
            </div>
            <div className='mm'>

            </div>
        </div>
    );
};

export default Profile;