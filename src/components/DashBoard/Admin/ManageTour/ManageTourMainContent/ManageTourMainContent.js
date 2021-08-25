import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageTourMainContentList from '../ManageTourMainContentList/ManageTourMainContentList';

const ManageTourMainContent = () => {
    const [tours,setTours] = useState([]);
    useEffect(()=>{
        fetch('https://nameless-shelf-72210.herokuapp.com/tours')
        .then(res=>res.json())
        .then(data=>setTours(data))
    },[])
    return (
        <div style={{flex:'5'}}>
            <h1>All Tours</h1>
            <ManageTourMainContentList tours={tours}/>
            
        </div>
    );
};

export default ManageTourMainContent;