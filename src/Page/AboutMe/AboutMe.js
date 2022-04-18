import React from 'react';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className='about-me-container'>
            <div className='about-me p-4'>
                <h1>Let's know myself</h1>
                <h3>Name: Rafi Ul Islam Chy</h3>
                <p>Email: ctgrafi150@gmail.com</p>
                <p>Address: Chattogram distric</p>
                <br />
                <br />
                <h2>Let's know about my mission strategy</h2>
                <ul className='ul-part'>
                    <li>At first i want't to finish this course , then i will practice many project by html, css, java script and react</li>
                    <li>I have to build up a better comunication in english</li>
                    <li>I will findout a job. it's very important for me. Unless i have to forget to be a developer. Because without academic study my familly will not allow to give time on coding </li>
                    <li>I tawakkul that i Wil be a proffessional developer before 31-12-2022</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutMe;