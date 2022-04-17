import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, descrption, price, img } = service;
    return (
        <div style={{ border: '1px solid lightgray' }} className=''>
            <img className='w-100 service-img' src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
            <p>{descrption}</p>
        </div>
    );
};

export default Service;