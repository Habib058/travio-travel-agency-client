import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Header/Navbar/Navbar';
import './SignUp.css';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import MenuButton from '../Home/Header/MenuButton/MenuButton';

const SignUp = () => {
    const [newUser, setNewUser] = useState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    ///googleSignIn
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log(result)
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL }
                setLoggedInUser(signedInUser);
                storeAuthToken();
            }).catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <section>
            <div className='signUp-bg'>
                <MenuButton isOpen={isOpen} toggle={toggle}></MenuButton>
                <Navbar toggle={toggle} />
                <div className='my-5'>
                    <div className='signUp mx-5  shadow-lg mt-5'>
                        <div className='container border bg-white col-md-4'>
                            <h3 className='pt-3 px-3'>{newUser ? <b>SignUp</b> : <b>SignIn</b>}</h3>
                            <div className='form'>
                                <form className='p-3' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group mb-3">
                                        {/* <label for="name" class="form-label">First Name</label> */}
                                        {newUser && <input placeholder='Your First Name' className='form-control' {...register("name", { required: true })} />}
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group mb-3">
                                        {/* <label for="userName" class="form-label">User name</label> */}
                                        {newUser && <input placeholder='Your User Name' className='form-control' {...register("userName", { required: true })} />}
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
                                        {newUser && <input placeholder='Confirm Password' className='form-control' {...register("confirmPassword", { required: true })} />}
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>

                                    <div className="form-group text-left pt-3">
                                        <button type="submit" className="btn-signUp">{newUser ? <span>Sign Up</span> : <span>Sign In</span>}</button>
                                    </div>
                                </form>
                                <div className='px-3'>
                                    <p>{newUser ? <span>Already Have An Account? |</span> : <span>Don't Have An Account? |</span>} <Link onClick={() => setNewUser(!newUser)} className='signIn'>{newUser ? <span className='signIn'>Sign In</span> : <span className='signIn'>Sign Up</span>}</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link onClick={handleGoogleSignIn}>
                    <div className='mt-5'>
                        <div className='mx-5  shadow-lg '>
                            <div className='container google border rounded-pill  col-md-4'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon iconSize" icon={faGooglePlusG} /></a></li>
                                    <h4 className='text-center my-3 px-3' style={{ color: 'white' }}>Sign In With Google</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </section>

    );
};

export default SignUp;