import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Pay = () => {
    const booking = useLoaderData();
    console.log(booking)
    return (
        <div>
            <h4 className='mt-4'>Please Pay $ {booking.price} for {booking.productName}</h4>
        </div>
    );
};

export default Pay;