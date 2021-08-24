import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Checkout.css'
import { LocationOn } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import Navbar from '../Home/Header/Navbar/Navbar';
import MenuButton from '../Home/Header/MenuButton/MenuButton';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Footer from '../Home/Footer/Footer';

const Checkout = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    


    const [tours, setTours] = useState([]);
    const [shippingData,setShippingData] = useState(null)

    useEffect(() => {
        fetch(`https://nameless-shelf-72210.herokuapp.com/tour/${id}`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [id]);

    const onSubmit = doc => {
            
        setShippingData(doc);
        console.log(doc); 


    };

    const handlePayment = (paymentId)=>{
        shippingData.id = tours._id;
        shippingData.tourName = tours.tourName;
        shippingData.price = tours.price;
        shippingData.location = tours.location;
        shippingData.paymentId = paymentId;
        shippingData.createOrder = new Date();
        fetch('https://nameless-shelf-72210.herokuapp.com/placeOrder',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(shippingData)
        })
        .then(res=>res.json())
        .then(success=> {
            alert('Tour Confirmed successfully');
            history.replace('/dashboard');
        })

    }
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
                <div style={{display:shippingData?'block':'none'}} className="col-md-6 border-end">
                    <div className='col-md-6'>
                        <h3>Please Pay First</h3>
                        <ProcessPayment handlePayment={handlePayment}/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div style={{display:shippingData?'none':'block'}} className="container col-md-8">
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
            <Footer/>
        </section>
    );
};

export default Checkout;