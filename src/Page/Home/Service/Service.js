import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, descrption, price, img } = service;
    const navigate = useNavigate();
    const goCheckOut = () => {
        navigate('/checkout')
    }
    return (
        <div style={{ border: '1px solid lightgray' }} className='card'>
            <img className='w-100 service-img' src={img} alt="" />
            <div className='ps-4'>
                <h3>{name}</h3>
                <h4>{price}</h4>
                <p>{descrption}</p>
            </div>
            <button onClick={goCheckOut} className='btn btn-dark btn-style'>Go to checkout</button>
        </div>
    );
};

export default Service;