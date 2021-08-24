import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Checkout.css'
import { LocationOn } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import Navbar from '../Home/Header/Navbar/Navbar';
import MenuButton from '../Home/Header/MenuButton/MenuButton';

const Checkout = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    


    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(`https://nameless-shelf-72210.herokuapp.com/tour/${id}`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [id]);

    const onSubmit = data => {
            
        data.id = tours._id;
        data.tourName = tours.tourName;
        data.price = tours.price;
        data.location = tours.location;
        data.createOrder = new Date();
        fetch('https://nameless-shelf-72210.herokuapp.com/placeOrder',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(success=> {
            alert('Tour Confirmed successfully');
            history.replace('/dashboard');
        })
        console.log(data); 


    };
    console.log(tours);
    const background = {
        backgroundImage: `url(${tours.imgUrl})`,
        width: '100%',
        height: '700px',
        backgroundSize: '100% 100%',
    }
    const [isOpen,setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <section>
            <div style={background}>
            <MenuButton isOpen={isOpen} toggle={toggle}></MenuButton>
            <Navbar toggle={toggle}/>
            </div>
            <div className='row mt-5'>
                <h1 className='text-center'>Confirm Here</h1>
                <div className="col-md-6 border-end">
                    {/* <div className="mt-5 ">
                        <h3 className='text-center'>Details Of This Tour</h3>
                        <div className='d-flex justify-content-center mt-3'>
                            <img className='img-fluid' src={tours.imgUrl} alt="" />
                        </div>
                        <div className='pt-3 mx-5 px-5'>
                            <h4 className='text-center'><LocationOn /> Locations</h4>
                            <ol>
                                <li>
                                    <b>{tours.location}</b>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h4 className='text-center'>Cost : {tours.price} / Person</h4>
                        </div>

                        <div className='d-flex justify-content-center mt-3'>
                            <Link><button className='btn btn-primary '>Confirm</button></Link>
                        </div>

                    </div> */}
                </div>
                <div className='col-md-6'>
                    <div className="container col-md-8">
                        <h2 className="m-5 text-center">Give Your Information</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='form-control' name='name' placeholder='Your Name' {...register("userName")} /> <br />
                            <input className='form-control' name='email' placeholder='Your Email' {...register("userEmail")} /> <br />
                            <input className='form-control' name='phone' placeholder='Your Phone number' {...register("userPhone")} /> <br />
                            <input className='form-control' name='address' placeholder='Your Address' {...register("userAddress")} /> <br />
                            <input className='form-control button' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;