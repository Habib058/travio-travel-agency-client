import React from 'react';
import Sidebar from '../../SideBar/Sidebar';
import TopBar from '../../Topbar/Topbar';
import AddAdminForm from '../AddAdminForm/AddAdminForm';
import './AddAdmin.css'

const AddAdmin = () => {
    return (
        <div>
            <TopBar/>
            <div className="content">
                <Sidebar/>
                <AddAdminForm/>
            </div>
        </div>
    );
};

export default AddAdmin;