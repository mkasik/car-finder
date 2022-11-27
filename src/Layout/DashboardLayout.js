import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Dashboard/Sidebar';
import Footer from '../Pages/Footer/Footer/Footer';
import Header from '../Pages/Header/Header';
import './DashboardLayout.css'

const DashboardLayout = () => {
    return (
        <div className=''>
            <Header></Header>
            <Container>
                <Row className='dashbord-height'>
                    <Col className='side-bg' md={3}><Sidebar></Sidebar></Col>
                    <Col className='right-bg' md={9}><Outlet></Outlet></Col>

                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;