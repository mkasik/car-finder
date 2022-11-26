import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <Link to={'/dashboard/allsellers'} className='text-white dash '><Card.Title className='text-center mt-4'>All Sellers</Card.Title></Link>
            <Link to={'/dashboard/allbuyers'} className='text-white dash '><Card.Title className='text-center mt-2'>All Buyers</Card.Title></Link>
            <Link to={'/dashboard/reporteditem'} className='text-white dash '><Card.Title className='text-center mt-2'>Reported Items </Card.Title></Link>
        </div>
    );
};

export default Admin;