import React from 'react';
import './CheckOut.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const CheckOut = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    return (
        <div className='checkout w-50 mx-auto'>
            <div className='mx-auto ms-4 ps-4 pb-4 form-container'>
                <h1>your information</h1>
                <label htmlFor="name">your name</label>
                <br />
                <input type="text" name="name" id="" />
                <br />
                <label htmlFor="email">your email</label>
                <br />
                <input value={user.email} readOnly type="email" name="email" id="" />
                <br />
                <label htmlFor="phone">your phone number</label>
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <button className='btn btn-dark mt-2'>proceed</button>
            </div>
        </div>
    );
};

export default CheckOut;