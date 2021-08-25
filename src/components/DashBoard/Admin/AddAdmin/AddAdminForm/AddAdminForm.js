import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './AddAdminForm.css'

const AddAdminForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        console.log(data);
        const adminDetails = {
            adminName: data.name,
            adminEmail:data.email,
            adminPhone:data.phone,
            adminAddress:data.address
        };
        fetch('https://nameless-shelf-72210.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminDetails)
        })
            .then(res => res.json())
            .then(result=>{
                alert('Admin Added Successfully');
                history.replace("/admin")
            })

    };
    return (
        <div className='addAdmin '>
            <div className="container col-md-8">
                <h2 className="m-5 text-center">Add Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' name='name' placeholder='Admin Name' {...register("name")} /> <br />
                    <input className='form-control' name='email' placeholder='Admin Email' {...register("email")} /> <br />
                    <input className='form-control' name='phone' placeholder='Admin Phone number' {...register("phone")} /> <br />
                    <input className='form-control' name='address' placeholder='Admin Address' {...register("address")} /> <br />
                    <input className='form-control button' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAdminForm;