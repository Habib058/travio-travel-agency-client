import React from 'react';
import Sidebar from '../Admin/SideBar/Sidebar';
import TopBar from '../Admin/Topbar/Topbar';
import './DashBoard.css'

const DashBoard = () => {
    return (
        <div >
            <TopBar />
            <div className='dashboardContent'>
                <Sidebar/>
                <div className="mainContent">
                    <h1>Welcome To DashBoard</h1>
                </div>

            </div>

        </div>
    );
};

export default DashBoard;