import React from 'react';
import AddAdminForm from '../../AddAdmin/AddAdminForm/AddAdminForm';
import Sidebar from '../../SideBar/Sidebar';
import TopBar from '../../Topbar/Topbar';
import AddTourForm from '../AddTourForm/AddTourForm';
import './AddTour.css'

const AddTour = () => {
    return (
        <div>
            <TopBar/>
            <div className="content">
                <Sidebar/>
                <AddTourForm/>
                
            </div>
        </div>
    );
};

export default AddTour;