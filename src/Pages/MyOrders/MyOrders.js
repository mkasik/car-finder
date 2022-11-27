import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    console.log('email address:', user.email)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const order = orders.filter(odr => odr.email === user.email)
    return (
        <div>
            {
                order?.length > 0 ? <h2 className='mt-2'>Total Order {order.length}</h2> : <h2>You have no order yet</h2>
            }

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map((booking, i) =>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{booking.productName}</td>
                                <td>{booking.price}</td>
                                <td><Button>Pay</Button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>




            {/* {
                orders.map(order =>
                    <MyOrder
                        key={order._id}
                        order={order}
                    >
                    </MyOrder>)
            } */}
        </div>
    );
};

export default MyOrders;