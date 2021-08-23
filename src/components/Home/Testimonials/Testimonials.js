import React from 'react';
import './Testimonials.css'
import x from '../../../assets/images/Ellipse 1.png'
import y from '../../../assets/images/Ellipse 2.png'
import z from '../../../assets/images/Ellipse 3.png'
import Testimonial from '../Testimonial/Testimonial';
import { useState } from 'react';
import { useEffect } from 'react';
const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Wilson Harry',
        from: 'California',
        img: x
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Ema Gomez',
        from: 'California',
        img: y
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Aliza Farari',
        from: 'California',
        img: z
    }
]

const Testimonials = () => {
    const [review,setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-secondary text-uppercase">Testimonial</h5>
                    <h1 style={{color:'#061a3a',fontSize:'40px'}}>What Our Clients <br /> Says </h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className="card-deck mt-5 row">
                        {
                            review.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;