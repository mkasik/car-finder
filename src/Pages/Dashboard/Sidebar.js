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
        fetch('https://car-server-snowy.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    // console.log('all user:', users);
    const data = users.filter(dd => dd.email === user.email);
    console.log('this is email:', data, "user:", user)


    return (
        <div >

            <Profile></Profile>
            {/* {
                data[0]?.role === "user" ? <Buyer></Buyer> : <Seller></Seller>
            } */}


            {
                data[0]?.role === "user" ? <Buyer></Buyer> : data[0]?.role === "seller" ? <Seller></Seller>
                    : data[0]?.role === "admin" ? <Admin></Admin> : <h2 className='text-white'>Loading...</h2>
            }




        </div>
    );
};

export default Sidebar;