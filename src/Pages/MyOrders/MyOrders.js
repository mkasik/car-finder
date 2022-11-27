import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h2>My Orders {orders.length}</h2>
            {
                orders.map(order =>
                    <MyOrder
                        key={order._id}
                        order={order}
                    >
                    </MyOrder>)
            }
        </div>
    );
};

export default MyOrders;