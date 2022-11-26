import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
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
    console.log('all user:', users);
    const data = users.filter(dd => dd.email === user.email);
    console.log('this is email:', data[0].role)

    return (
        <div >

            <Profile></Profile>

            <Seller></Seller>





        </div>
    );
};

export default Sidebar;