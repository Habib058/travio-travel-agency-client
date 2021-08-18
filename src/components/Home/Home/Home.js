import React from 'react';
import Details from '../../Details/Details/Details';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Details/>
            <About/>
            <Services/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;