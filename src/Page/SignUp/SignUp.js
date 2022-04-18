import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../images/Google3.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending, errorVerifiction] = useSendEmailVerification(auth);

    const navigate = useNavigate();

    const handleNameBlur = e => {
        setName(e.target.value);
    }
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password, { sendEmailVerification: true })
        await sendEmailVerification();
        alert('Sent email');
    }
    const handleGoogleSignUp = e => {
        signInWithGoogle();
    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className='w-50 mx-auto'>
                <h2 className='text-center'>Please Sign up...</h2>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your name" />
                    </Form.Group>
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
                    <Button variant="dark" type="submit">
                        sign up
                    </Button>
                </Form>
                <p>Already have an account <Link to='/login'>Login</Link></p>
            </div>
            <div className='or-part'>
                <hr className='hr-line' />
                <p>or</p>
                <hr className='hr-line' />
            </div>
            <div className='w-100 d-flex justify-content-center'>
                <button onClick={handleGoogleSignUp} style={{ height: '70px', borderRadius: '30px', fontSize: '20px' }} className='w-50 btn btn-dark text-white'><img src={google} alt="" /> Sign In With Google</button>
            </div>
        </div>
    );
};

export default SignUp;