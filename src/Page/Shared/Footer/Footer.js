import React from 'react';
import './Footer.css';
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer style={{ height: '150px' }} className='bg-dark mt-4 d-flex align-items-center justify-content-center'>
            <div className=''>
                <h2 className='text-center'><span style={{ color: 'white' }}>Life Maker</span> <span style={{ color: 'tomato' }}>sohag</span></h2>
                <p className='text-center'><span style={{ color: 'white' }}>copyright  <small>c</small>  {year} rafi-ul-islam-center.com</span></p>
            </div>

        </footer>
    );
};

export default Footer;