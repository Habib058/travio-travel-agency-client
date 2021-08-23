import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const IndividualDestination = ({destination}) => {
    return (
        <div className='col-md-4'>
            <div className='card shadow-lg border'>
                <div className="card-body">
                    <img style={{height:'300px'}} src={destination.imgUrl} alt="" className="img-fluid image" />
                </div>
                <div className='mt-2 mx-3 heading'>
                    <h4><b>{destination.tourName}</b></h4>
                </div>
                <div className='mx-3 text-secondary'>
                <p><b><span style={{color:'orange'}}>$ {destination.price}</span></b> / <b>person</b></p>
                </div>
                <div className='bg-light mx-5 shadow-sm'>
                    <div className='d-flex justify-content-center  '>
                        <p className='mx auto px-5 py-2 text-secondary'> <FontAwesomeIcon icon={faClock} /> <b>{destination.days} days</b></p>
                        <p className='mx-auto py-2 text-secondary'> <FontAwesomeIcon icon={faMapMarker} /> <b>{destination.location}</b></p>
                    </div>
                </div>

                <div className='mt-3 px-3'>
                    <p className='text-secondary text-center'>{destination.description}</p>
                </div>
                <div className='px-3 mb-3'>
                    <Link to={`/checkout/${destination._id}`}><button className="btn btn-primary">Book Now</button></Link>
                </div>

            </div>

        </div>
    );
};

export default IndividualDestination;