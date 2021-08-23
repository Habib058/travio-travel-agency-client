import React from 'react';
import Sidebar from '../../SideBar/Sidebar';
import TopBar from '../../Topbar/Topbar';
import UserOrderByEmail from '../UserOrderByEmail/UserOrderByEmail';
import './UserOrder.css'

const UserOrder = () => {
    return (
        <div>
            <TopBar/>
            <div className="content">
                <Sidebar/>
                <UserOrderByEmail/>
            </div>
            
        </div>
    );
};

export default UserOrder;