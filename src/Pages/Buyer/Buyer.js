import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Buyer = () => {
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className='items'>
                <Link to={'/dashboard/myorders'} className='text-white dash '><Card.Title className='text-center mt-4'>My Orders</Card.Title></Link>
            </div>
            <div className=''>
                <Link>   <Button onClick={handleLogOut} className='w-100 btnn' variant="warning">Log Out</Button></Link>
            </div>
        </div>
    );
};

export default Buyer;