import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OrdersList from '../OrdersList/OrdersList';
import './OrdersContent.css'

const OrdersContent = () => {
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://nameless-shelf-72210.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    console.log(orders)
    return (
        <div className='ordersContent'>
            <h5 className=" text-center">All Orders</h5>
            <OrdersList orders ={orders}/>
                
        </div>
    );
};

export default OrdersContent;