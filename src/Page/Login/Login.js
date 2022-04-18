import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../images/Google3.png';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        errorSingIn,
    ] = useSignInWithEmailAndPassword(auth);
    //send password reset hook from react-firebase-hook
    const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    if (errorSingIn) {
        console.log(errorSingIn)
    }
    if (loading) {
        return <Loading></Loading>;
    }
    if (sending) {
        return <Loading></Loading>;
    }

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    if (user) {
        navigate(from, { replace: true })
    }
    console.log(user);

    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-center'>please login...</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <p>{errorSingIn ? errorSingIn : ''}</p>
                    <Button variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New to sohag site <Link to='/signup'>Create account</Link></p>
                <p style={{ display: 'inline' }}>Reset your password <button onClick={handleResetPassword} className='btn btn-link'>Reset</button></p>
                <p>{errorReset ? errorReset : ''}</p>
            </div>
            <div className='or-part'>
                <hr className='hr-line' />
                <p>or</p>
                <hr className='hr-line' />
            </div>
            <div className='w-100 d-flex justify-content-center'>
                <button style={{ height: '70px', borderRadius: '30px', fontSize: '20px' }} className='w-50 btn btn-dark text-white'><img src={google} alt="" /> Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;