import React from 'react';
import Navbar from '../../Home/Header/Navbar/Navbar';
import './Tours.css';
import IndividualTour from '../IndividualTour/IndividualTour';
import img from '../../../assets/images/travel1.jpg'
import Footer from '../../Home/Footer/Footer';
const servicesData = [
    {
        id:'1',
        heading: 'Sundarban Tour',
        price: '2000',
        days: '3',
        img: img,
        location: 'koromjol',
        pera: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!'
    },
    {
        id:'2',
        heading: 'Sundarban Tour',
        price: '2000',
        days: '3',
        img: img,
        location: 'koromjol',
        pera: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!'
    },
    {
        id:'3',
        heading: 'Sundarban Tour',
        price: '2000',
        days: '3',
        img: img,
        location: 'koromjol',
        pera: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!'
    },
]

const Tours = () => {
    return (
        <div>
            <div className='tour-bg'>
                <Navbar />
                <div className='mt-5 text-center'>
                    <h1>WELCOME TO OUR SUCCESSFUL TOUR</h1>
                </div>
                <div>
                    <h3 className='tour-heading text-center mt-5'>FIND YOUR FANTASY TOUR</h3>
                    <div className='searchBox container mt-5 border bg-white '>
                        <div className='my-auto'>
                            <div className=' input-group row d-flex align-items-center m-3 '>
                                <div className='col-4 '>
                                    <input type="text" className='form-control' placeholder='Where To' />
                                </div>
                                <div className='col-4 '>
                                    <input type="date" className='form-control' id="birthday" name="birthday" />
                                </div>
                                <div className='col-4 '>
                                    <select name="cars" id="cars" className='form-control' placeholder='Tour Type' >
                                        <option value="volvo">Adventure</option>
                                        <option value="saab">City Tour</option>
                                        <option value="mercedes">Couple Tour</option>
                                        <option value="audi">Solo</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-center mt-3'>
                    <button className='button btn px-5 '>Find Now</button>
                </div>

            </div>
            <div className='mt-5 pt-5'>
                <div className='container  '>
                    <div className='row  d-flex justify-content-center'>
                        <div className='col-md-6 success-header'>
                            <h1><b>Successful Tours</b></h1>
                            <div className='mt-5'>
                            {
                                servicesData.map(tour=><IndividualTour key={tour.id} tour={tour}></IndividualTour>)
                            }
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='search border bg-white shadow-lg'>
                                <h3><b>Search Tour</b></h3>
                                <input className=' mx-3 input mt-2 ' type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-5'>
                <Footer/>
            </div>
        </div>
    );
};

export default Tours;