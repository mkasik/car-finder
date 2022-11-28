import React, { useContext, useState } from 'react';
import img from './img.png'
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log(user.uid);
                navigate(from, { replace: true });
                form.reset();



            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });

    }
    const handleGoogleSignIn = () => {

        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveuser(user.displayName, user.email, "user")

            })
            .catch(error => console.error(error))
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
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='login-bg'>
            <Container>
                <Row >
                    <Col sm={1} lg={6} className="tt" >
                        <Form onSubmit={handleSubmit} className='w-50  mt-4 bdr tt '>
                            <Form.Group className="mb-3 log-text tt" controlId="formBasicEmail">
                                <Form.Label className='text-white'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' />

                            </Form.Group>

                            <Form.Group className="mb-3  log-text2" controlId="formBasicPassword">
                                <Form.Label className='text-white'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' />
                            </Form.Group>

                            <Button className='w-100 log-text2' variant="primary" type="submit">
                                Login
                            </Button>

                            <Form.Group className="">
                                <Button onClick={handleGoogleSignIn} className='mt-2' variant="outline-warning">Login With Google</Button>
                            </Form.Group>
                            <Form.Group className="">
                                New to Car finder? <Link className='text' to={'/register'}>Register</Link>
                            </Form.Group>
                        </Form></Col>
                    <Col><img className='log-img' alt='' src={img}></img></Col>
                </Row>

            </Container>
        </div>
    );
};

export default Login;