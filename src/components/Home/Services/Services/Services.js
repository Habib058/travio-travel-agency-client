import React from 'react';
import sundarban from '../../../../assets/images/sundarban (1).jpg';
import sundarban1 from '../../../../assets/images/alone.jpeg';
import ServiceList from '../ServiceList/ServiceList';
import { useState } from 'react';
import { useEffect } from 'react';
export const servicesData = [
    {
        id:'1',
        heading: 'Sundarban Tour',
        price: '2000',
        days: '3',
        img: sundarban,
        location: 'koromjol',
        pera: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!'
    },
    {
        id:'2',
        heading: 'Sundarban Tour',
        price: '2000',
        days: '3',
        img: sundarban1,
        location: 'koromjol',
        pera: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!'
    },
    {
        id:'3',
        heading: 'Sundarban Tour',
        price: '2000',
        days: '3',
        img: sundarban,
        location: 'koromjol',
        pera: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!'
    },
]

const Services = () => {
    const [tours,setTours] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tours')
        .then(res=>res.json())
        .then(data=>setTours(data))
    },[])
    return (
        <section>
            <div className='container mt-5 pt-5'>
                <div>
                    <h4 className='text-secondary text-center'>Our Services</h4>
                    <h1 style={{color:'#061a3a'}} className='text-center'><b>Our Most Popular Destinations</b></h1>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='row card-deck'>
                        {
                            tours.map(service=><ServiceList service={service} key={service._id}></ServiceList>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;