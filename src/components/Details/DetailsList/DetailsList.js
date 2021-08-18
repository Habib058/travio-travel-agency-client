import React from 'react';
import './DetailsList.css'

const DetailsList = ({ info }) => {
    return (
        <div className='col-md-3 mt-5 mb-5'>
            <div className="card shadow-sm ">
            <div className="card-body">
                <img className='individual-card img-fluid' src={info.img} alt="" />
            </div>
            <div className="card-footer text-center mt-2">
                <h3>{info.heading}</h3>
            </div>
       </div> 
        </div>
    );
};

export default DetailsList;