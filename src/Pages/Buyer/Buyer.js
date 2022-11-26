import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Buyer = () => {
    return (
        <div>
            <Link to={'/dashboard/myorders'} className='text-white dash '><Card.Title className='text-center mt-4'>My Orders</Card.Title></Link>
        </div>
    );
};

export default Buyer;