import React from 'react';
import img from '../../../assets/images/alone.jpeg'
import { Button } from '../../button';
import './About.css'

const About = () => {
    return (
        <section className='mt-5 pt-5 d-flex justify-content-center mb-5'>
            <div className='container row d-flex align-items-center'>
                <div className='col-md-6 px-5'>
                    <h5 className=' text-secondary'>About TRAVIO</h5>
                    <h1 className='heading'><b>World Best Travel  Agency Company Since 2008.</b></h1>
                    <p className='text-secondary mt-3 mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas nobis commodi praesentium deleniti odit amet earum expedita atque. Nesciunt?</p>
                    <div className='mt-3'>
                    <Button className='p-3'>Find Now</Button>
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-center border img-div shadow-lg  mt-5'>
                    <img className='img-fluid rounded p-3 img' src={img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;