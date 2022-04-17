import React from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = [
        { name: 'Motivational appointment', img: 'https://i.ibb.co/S0WNRF0/service1.png', descrption: 'This is a course appointment.1month duration', id: 1, price: '100$' },
        { name: 'Business goal trainer', img: 'https://i.ibb.co/WDWdc4K/service2.jpg', descrption: 'A private or batch trainer.batch duration: 1month', id: 2, price: '140$' },
        { name: 'Mental health counciling', img: 'https://i.ibb.co/0Ycfjpr/service3.jpg', descrption: "Actually i'm a sychologist. How you will free from deppression i will teach those tricks", id: 3, price: '120$' }
    ]
    return (
        <div className='container'>
            <h2 id='services' className='mb-4 text-center'>My services</h2>
            <div className='row ms-8 starting-text'>
                <h3 className='col col-4 service-title-2'>What kind of services you can take</h3>
                <p className='col col-8 fs-4'>We Provides a wide range of high performance services <br /> across multiple industries and technologies</p>
            </div>
            <div className='services-container'>
                {services.map(service => <Service service={service} key={service.id}></Service>)}
            </div>
        </div>
    );
};

export default Services;