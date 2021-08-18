import React from 'react';
import './IndividualTour.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

const IndividualTour = ({ tour }) => {
    return (
        <div className='mt-5 border shadow-lg'>
            <div className='d-flex'>
                <div className='imgPortion border-end'>
                    <img className='img-fluid p-3' src={tour.img} alt="" />
                </div>
                <div>
                    <div className='mt-2 mx-3 heading'>
                        <h4><b>{tour.heading}</b></h4>
                    </div>
                    <div className='mx-3 text-secondary'>
                        <p><b><span style={{ color: '#ff7c5b' }}>$ {tour.price}</span></b> / <b>person</b></p>
                    </div>
                    <div className='bg-light mx-5 shadow-sm'>
                        <div className='d-flex justify-content-center  '>
                            <p className='mx auto px-5 py-2 text-secondary'> <FontAwesomeIcon icon={faClock} /> <b>{tour.days} days</b></p>
                            <p className='mx-auto py-2 text-secondary'> <FontAwesomeIcon icon={faMapMarker} /> <b>{tour.location}</b></p>
                        </div>
                    </div>

                    <div className='mt-3 px-3'>
                        <p className='text-secondary text-center'>{tour.pera}</p>
                    </div>
                    <div className='px-3 mb-3'>
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default IndividualTour;