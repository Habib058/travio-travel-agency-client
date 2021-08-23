import React from 'react';
import './testimonial.css'

const Testimonial = (props) => {
    const { userReview,userName,userCountry,userImg } = props.testimonial;
    return (
        <div className='col-md-4'>
            <div className=" card shadow-sm border individual-card mt-3">
                <div className="card-body p-3">
                    <p className="card-text text-center">{userReview}</p>
                </div>
                <div className="card-footer d-flex  align-items-center justify-content-center">
                    <img className="mx-3 imgStyle" src={userImg} alt="" />
                    <div>
                        <h6 className="text-primary">{userName}</h6>
                        <p className="m-0">{userCountry}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;