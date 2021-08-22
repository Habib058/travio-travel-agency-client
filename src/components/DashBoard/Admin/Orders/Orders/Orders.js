import React from 'react';
import Sidebar from '../../SideBar/Sidebar';
import TopBar from '../../Topbar/Topbar';
import OrdersContent from '../OrdersContent/OrdersContent';
import './Orders.css'

const Orders = () => {
    return (
        <div>
            <TopBar/>
            <div className="content">
                <Sidebar/>
                <OrdersContent/>
            </div>
        </div>
    );
};

export default Orders;