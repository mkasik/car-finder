import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Admin from '../Admin/Admin';
import Buyer from '../Buyer/Buyer';
import Profile from '../Profile/Profile';
import Seller from '../Seller/Seller';
import './Sidebar.css'

const Sidebar = () => {
    const { user } = useContext(AuthContext);
    // console.log('my email: ', user.email)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    // console.log('all user:', users);
    const data = users.filter(dd => dd.email === user.email);
    // console.log('this is email:', data[0].role)


    return (
        <div >

            <Profile></Profile>
            {/* {
                data[0]?.role === "user" ? <Buyer></Buyer> : <Seller></Seller>
            } */}


            {
                data[0]?.role === "user" ? <Buyer></Buyer> : data[0]?.role === "seller" ? <Seller></Seller> : <Admin></Admin>
            }




        </div>
    );
};

export default Sidebar;