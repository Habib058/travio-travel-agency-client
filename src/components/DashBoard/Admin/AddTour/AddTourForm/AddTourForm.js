import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddTourForm.css'
import { useHistory } from 'react-router-dom';

const AddTourForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tourImg, setTourImg] = useState(null);
    const history = useHistory()
    const onSubmit = data => {
        console.log(data);
        const tourDetails = {
            tourName: data.tourName,
            days: data.days,
            price: data.price,
            location:data.location,
            description: data.description,
            imgUrl: tourImg
        };
        const url = 'https://nameless-shelf-72210.herokuapp.com/addTour';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourDetails)
        })
            .then(res => res.json())
            .then(result=>{
                alert('Tour Added Successfully');
                history.replace("/admin")
            })
    }

    const handleChange = event => {

        const productData = new FormData();
        productData.set('key', '16cf69b83bb1ecc5b8dea23167a2100e');
        productData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', productData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setTourImg(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='addTour '>
            <div className="container col-md-6">
                <h2 className="m-5 text-center">Add Tour</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' name='tourName' placeholder='Tour Name' {...register("tourName")} /> <br />
                    <input className='form-control' name='days' placeholder='Tour Days' {...register("days")} /> <br />
                    <input className='form-control' name='price' placeholder='Tour Price Per Person' {...register("price")} /> <br />
                    <input className='form-control' name='location' placeholder='Tour Location' {...register("location")} /> <br />
                    <input style={{ height: '100px' }} className='form-control' name='description' placeholder='Tour Description' {...register("description")} /> <br />
                    <input className='form-control' type='file' onChange={handleChange} /> <br />
                    <input className='form-control button' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddTourForm;