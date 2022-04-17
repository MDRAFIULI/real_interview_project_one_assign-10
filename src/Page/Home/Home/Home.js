import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';
const Home = () => {
    return (
        <div>
            <div className='banner'>
                <Banner></Banner>
            </div>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;