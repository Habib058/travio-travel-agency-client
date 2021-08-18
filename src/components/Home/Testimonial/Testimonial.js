import React from 'react';
import './testimonial.css'

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div className='col-md-4'>
            <div className=" card shadow-sm border individual-card mt-3">
                <div className="card-body p-3">
                    <p className="card-text text-center">{quote}</p>
                </div>
                <div className="card-footer d-flex  align-items-center justify-content-center">
                    <img className="mx-3" src={img} alt="" width="60" />
                    <div>
                        <h6 className="text-primary">{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;