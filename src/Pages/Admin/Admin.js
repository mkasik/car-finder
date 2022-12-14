import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Admin = () => {
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className='items'>
                <Link to={'/dashboard/allsellers'} className='text-white dash '><Card.Title className='text-center mt-4'>All Sellers</Card.Title></Link>
                <Link to={'/dashboard/allbuyers'} className='text-white dash '><Card.Title className='text-center mt-2'>All Buyers</Card.Title></Link>
                <Link to={'/dashboard/reporteditem'} className='text-white dash '><Card.Title className='text-center mt-2'>Reported Items </Card.Title></Link>
            </div>
            <div>
                <Link>   <Button onClick={handleLogOut} className='w-100 btnn' variant="warning">Log Out</Button></Link>
            </div>
        </div>
    );
};

export default Admin;