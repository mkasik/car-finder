import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css';
import img from './preview-removebg-preview.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const test = form.test.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                saveuser(name, email, test);
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => console.error(e));

    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        return updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    const saveuser = (name, email, role) => {
        const user = { name, email, role }
        fetch('https://car-server-snowy.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/login')
            })
    }
    return (
        <div className='register-bg'>

            <Row>
                <Col sm={12} lg={6}>
                    <img className='log-img' src={img} alt=''></img>
                </Col>
                <Col sm={12} lg={6} className='mt-2 text-center'>
                    {/* <Form onSubmit={handleSubmit} className='w-50   '>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" name="name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" placeholder="Photo URL" name="photoURL" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Form.Group className="">
                            Already have an account? Please <Link to={'/login'}>Login</Link>
                        </Form.Group>
                    </Form> */}
                    <Form onSubmit={handleSubmit} className='form1 w-50'>
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label className='email-text'>Name</Form.Label>
                            <Form.Control className=' ' type="text" placeholder="Your Full Name" name='name' required />

                        </Form.Group>
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label className='photo-text'>PhotoURL</Form.Label>
                            <Form.Control className='' type="text" placeholder="Your PhotoURL" name='photoURL' required />

                        </Form.Group>
                        <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label className='email-text'>Email</Form.Label>
                            <Form.Control className='' type="email" placeholder="Your Email" name='email' required />

                        </Form.Group>

                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Label className='password-text'>Password</Form.Label>
                            <Form.Control className='' type="password" placeholder="Your Password" name='password' required />
                        </Form.Group>
                        <Form.Group className="" >
                            <input className='' type="radio" value="user" name="test" defaultChecked /> User
                            <input className='ms-4 mt-4' type="radio" value="seller" name="test" /> Seller
                        </Form.Group>
                        <Button className='mt-2' variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <div className='link1 mt-2'>Already have an account? Please <Link to={'/login'}>Login</Link></div>

                    </Form>
                </Col>
            </Row>


        </div>
    );
};

export default Register;