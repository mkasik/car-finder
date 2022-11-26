import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Seller from '../Seller/Seller';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div >

            <Profile></Profile>

            <Seller></Seller>





        </div>
    );
};

export default Sidebar;