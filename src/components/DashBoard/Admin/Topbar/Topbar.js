import React from 'react';
import './Topbar.css';
import { NotificationsNone,Language,Settings } from '@material-ui/icons';
import img from '../../../../assets/images/mypic.jpeg'

const TopBar = () => {
    return (
        <div className='topBar bg-light'>
            <div className="topBarWrapper">
                <div className="topLeft"><span className='logo'>TRAVIO
                </span ></div>
                <div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsNone />
                        <span className="notificationNum">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language />
                        <span className="notificationNum">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Settings /> 
                    </div>
                    <div className="topAvatar">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopBar;