import React from 'react';
import { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../../../App';
import UserOrderByEmailList from '../UserOrderByEmailList/UserOrderByEmailList';
import './UserOrderByEmail.css'


const UserOrderByEmail = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/userOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])
    console.log(orders);

    return (
        <div className='orderContent'>
            <div className="mainContent">
                <h1 className='text-center text-secondary'>Your Order</h1>
                <div>
                    <UserOrderByEmailList orders={orders}/>
                </div>
            </div>
        </div>
    );
};

export default UserOrderByEmail;