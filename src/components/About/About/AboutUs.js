import React from 'react';
import About from '../../Home/About/About';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Header/Navbar/Navbar';
import Services from '../../Home/Services/Services/Services';
import './About.css'

const AboutUs = () => {
    return (
        <div>
            <div className='backgroundImg'>
                <Navbar></Navbar>
                <div className='container text-center mt-5 pt-5'>
                    <h1 className='header'>ABOUT TRAVIO</h1>
                </div>
            </div>
            <About />
            <Services />
            <div className='pt-5'>
                <Footer />
            </div>

        </div>
    );
};

export default AboutUs;