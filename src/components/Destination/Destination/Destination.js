import { Carousel } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/alone.jpeg'
import Navbar from '../../Home/Header/Navbar/Navbar';
import './Destination.css'
import { servicesData } from '../../Home/Services/Services/Services';
import IndividualDestination from '../IndividualDestination/IndividualDestination';
import Footer from '../../Home/Footer/Footer';
import MenuButton from '../../Home/Header/MenuButton/MenuButton';
import { useState } from 'react';

const Destination = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div>

                <div className='background'>
                    <MenuButton isOpen={isOpen} toggle={toggle}></MenuButton>
                    <Navbar toggle={toggle}></Navbar>
                    <div className='container text-center mt-5 pt-5'>
                        <h1 className='header'>WELCOME TO OUR POPULAR DESTINATIONS</h1>
                    </div>
                </div>
                <div className='container mt-5 pt-5'>
                    <div>
                        <h4 className='text-secondary text-center'>Our Services</h4>
                        <h1 style={{ color: '#061a3a' }} className='text-center'><b>Our Most Popular Destinations</b></h1>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <div className='row card-deck'>
                            {
                                servicesData.map(destination => <IndividualDestination key={destination.id}
                                    destination={destination}
                                >

                                </IndividualDestination>)

                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 pt-5'>
            <Footer/>
            </div>

        </div>
    );
};

export default Destination;