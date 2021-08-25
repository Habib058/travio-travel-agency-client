import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './UserReviewForm.css'

const UserReviewForm = () => {
    const [loggedInUser,SetLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        const review = {
            userReview : data.userReview,
            userCountry : data.userCountry,
            userName:loggedInUser.name,
            userImg:loggedInUser.img
        }
        fetch('https://nameless-shelf-72210.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result=>{
                alert('Review Given Successfully');
                history.replace("/dashboard")
            })

    }
    return (
        <div className='reviewContent'>
           <h1 className='text-secondary text-center'>Give Your Review</h1>
           <div>
           <div className="container col-md-8 mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{height:'200px'}} className='form-control' name='userReview' placeholder='Write Something For Us' {...register("userReview")} /> <br />
                    <input className='form-control' name='userCountry' placeholder='Your Country' {...register("userCountry")} /> <br />
                    <input className='form-control button' type="submit" />
                    
                </form>
            </div>
           </div>
        </div>
    );
};

export default UserReviewForm;