import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageTourMainContentList from '../ManageTourMainContentList/ManageTourMainContentList';

const ManageTourMainContent = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://nameless-shelf-72210.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    console.log(tours)
    return (
        <div style={{ flex: '5' }}>
            <h1>All Tours</h1>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Tour Id</th>
                        <th className="text-secondary" scope="col">Prize</th>
                        <th className="text-secondary" scope="col">Location</th>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tours.map(tour => <ManageTourMainContentList key={tour._id} tour={tour} />)
                    }
                </tbody>
            </table>


        </div>
    );
};

export default ManageTourMainContent;