import React from 'react';
import { useForm } from 'react-hook-form';
import './AddAdminForm.css'

const AddAdminForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

    };
    const handleChange = () => {

    }
    return (
        <div className='addAdmin '>
            <div className="container col-md-8">
                <h2 className="m-5 text-center">Add Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='form-control' name='name' placeholder='Admin Name' {...register("name")} /> <br />
                    <input className='form-control' name='email' placeholder='Admin Email' {...register("email")} /> <br />
                    <input className='form-control' name='phone' placeholder='Admin Phone number' {...register("phone")} /> <br />
                    <input className='form-control' name='address' placeholder='Admin Address' {...register("address")} /> <br />
                    <input className='form-control' type='file' /> <br />
                    <input className='form-control button' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAdminForm;