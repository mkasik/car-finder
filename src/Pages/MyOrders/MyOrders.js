import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    console.log('email address:', user.email)
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch('https://car-server-snowy.vercel.app/booking')
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
                        <th>Photo</th>
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
                                <td><img className='round me-4' height={30} alt='' src={booking.productImg}></img></td>
                                <td className='me-4'>{booking.productName}</td>
                                <td>{booking.price}</td>
                                <td><Link to={`/dashboard/pay/${booking._id}`}><Button  >Pay</Button></Link></td>
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