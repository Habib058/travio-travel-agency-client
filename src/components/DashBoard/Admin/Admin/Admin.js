import React from 'react';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';
import MainContent from '../MainContent/MainContent';
import Sidebar from '../SideBar/Sidebar';
import TopBar from '../Topbar/Topbar';
import './Admin.css'

const Admin = () => {
    return (
        <div>
            <TopBar/>
            <div className="content">
                <Sidebar/>
                <MainContent/>
            </div>
        </div>
    );
};

export default Admin;