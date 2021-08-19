import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Navbar from '../Home/Header/Navbar/Navbar';
import './SignUp.css'

const SIgnUp = () => {
    const [newUser,setNewUser] = useState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section>
            <div className='signUp-bg'>
                <Navbar />
                <div className=' mt-5'>
                    <div className='signUp   shadow-lg mt-5'>
                        <div className='container border bg-white col-md-6'>
                            <h3 className='pt-3'><b>SignUp</b></h3>
                            <div className='form'>
                                <form className='p-3' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mb-3">
                                        {/* <label for="name" class="form-label">First Name</label> */}
                                        <input placeholder='Your First Name' className='form-control' {...register("name", { required: true })} />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        {/* <label for="userName" class="form-label">User name</label> */}
                                        <input placeholder='Your User Name' className='form-control' {...register("userName", { required: true })} />
                                        {errors.phone && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        {/* <label for="email" class="form-label">Email</label> */}
                                        <input placeholder='Your Email' className='form-control' {...register("email", { required: true })} />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        {/* <label for="password" class="form-label">Password</label> */}
                                        <input placeholder='Password' className='form-control' {...register("password", { required: true })} />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        {/* <label for="confirmPassword" class="form-label">Confirm Password</label> */}
                                        <input placeholder='Confirm Password' className='form-control' {...register("confirmPassword", { required: true })} />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="form-group text-left pt-3">
                                        <button type="submit" className="btn-signUp">Sign Up</button>
                                    </div>
                                </form>
                                <div className='px-3'>
                                    <p>Already Have An Account? <Link className='signIn'>SignIn</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default SIgnUp;