import React from 'react';
import './Topbar.css';
import { NotificationsNone,Language,Settings } from '@material-ui/icons';
import img from '../../../../assets/images/mypic.jpeg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useState } from 'react';

const TopBar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className='topBar bg-light'>
            <div className="topBarWrapper">
                <div className="topLeft"><Link className='logoLink' to='/'><span className='logo'>TRAVIO
                </span ></Link></div>
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
                        <img src= {loggedInUser.img} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopBar;