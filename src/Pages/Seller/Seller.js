import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Seller = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.displayName)
    return (
        <div>
            <div className='items'>
                <Link to={'/dashboard/addproduct'} className='text-white dash '><Card.Title className='text-center mt-4'>Add A Product</Card.Title></Link>
                <Link to={'/dashboard/myproducts'} className='text-white dash '><Card.Title className='text-center mt-2'>My Products</Card.Title></Link>
                <Link to={'/dashboard/mybuyers'} className='text-white dash '><Card.Title className='text-center mt-2'>My Buyers</Card.Title></Link>
            </div>
            <div>
                <Link>   <Button className='w-100 btnn' variant="warning">Log Out</Button></Link>
            </div>
        </div>
    );
};

export default Seller;