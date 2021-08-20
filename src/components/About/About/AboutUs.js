import React from 'react';
import { useState } from 'react';
import About from '../../Home/About/About';
import Footer from '../../Home/Footer/Footer';
import MenuButton from '../../Home/Header/MenuButton/MenuButton';
import Navbar from '../../Home/Header/Navbar/Navbar';
import Services from '../../Home/Services/Services/Services';
import './About.css'

const AboutUs = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div className='backgroundImg'>
                <MenuButton isOpen={isOpen} toggle={toggle}></MenuButton>
                <Navbar toggle={toggle}></Navbar>
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