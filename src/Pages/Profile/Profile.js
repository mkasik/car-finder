import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div>
                <img height={150} width={150} className="round" alt='' src={user.photoURL
                }></img>
                <Card.Title className='text-center'>{user.displayName}</Card.Title>
                <p className='text-center '>Email: {user.email}</p>
            </div>
            <div className='mm'>

            </div>
        </div>
    );
};

export default Profile;