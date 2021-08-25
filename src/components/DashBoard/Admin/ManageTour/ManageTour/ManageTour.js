import React from 'react';
import Sidebar from '../../SideBar/Sidebar';
import TopBar from '../../Topbar/Topbar';
import ManageTourMainContent from '../ManageTourMainContent/ManageTourMainContent';

const ManageTour = () => {
    return (
        <div >
            <TopBar/>
            <div style={{display:'flex'}}>
                <Sidebar/>
                <ManageTourMainContent/>

            </div>
            
        </div>
    );
};

export default ManageTour;