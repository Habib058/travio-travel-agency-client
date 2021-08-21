import React from 'react';
import Sidebar from '../../SideBar/Sidebar';
import TopBar from '../../Topbar/Topbar';
import UsersList from '../UsersList/UsersList';

const Users = () => {
    return (
        <div>
            <TopBar/>
            <div className="content">
            <Sidebar/>
            <UsersList/>
            </div>
        </div>
    );
};

export default Users;