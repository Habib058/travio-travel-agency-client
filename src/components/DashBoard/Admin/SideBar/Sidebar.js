import React from 'react';
import { LineStyle, GroupAdd, FlightTakeoff, Group,ShoppingCart,Settings } from '@material-ui/icons';
import './SideBar.css'
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const Sidebar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [isAdmin,setIsAdmin] = useState(false);
    const history = useHistory()

    useEffect(()=>{
        fetch('https://nameless-shelf-72210.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email:loggedInUser.email})
        })
            .then(res => res.json())
            .then(data =>setIsAdmin(data))
    },[])
    console.log(isAdmin)
    return (
        <div className='sideBar'>
            <div className="sideBarWrapper">
                {
                    isAdmin && 
                    <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Admin</h3>
                    <ul className="sideBarList ">
                        <Link to='/admin' className='link'>
                            <li className="sideBarListItem">
                                <LineStyle className='sideBarIcon' />
                                Home
                            </li>
                        </Link>
                        <Link to='/addAdmin' className='link'>
                            <li className="sideBarListItem">
                                <GroupAdd className='sideBarIcon' />
                                Add-Admin
                            </li>
                        </Link>
                        <Link to='/orders' className='link'>
                            <li className="sideBarListItem">
                                <ShoppingCart className='sideBarIcon' />
                                Orders
                            </li>
                        </Link>
                        <Link to='/addTour' className='link'>
                            <li className="sideBarListItem">
                                <FlightTakeoff className='sideBarIcon' />
                                Add Tours
                            </li>
                        </Link>
                        <Link to='/manageTours' className='link'>
                            <li className="sideBarListItem">
                                <Settings className='sideBarIcon' />
                                Manage Tours
                            </li>
                        </Link>

                        <Link className='link' to='/users'>
                            <li className="sideBarListItem">
                                <Group className='sideBarIcon' />
                                Users
                            </li></Link>
                    </ul>
                </div>
                }
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">User</h3>
                    <ul className="sideBarList ">
                        <Link to='/userOrder' className='link'>
                            <li className="sideBarListItem">
                                <LineStyle className='sideBarIcon' />
                                Orders
                            </li>
                        </Link>
                        <Link to='/addReview' className='link'>
                            <li className="sideBarListItem">
                                <GroupAdd className='sideBarIcon' />
                                Add Review
                            </li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;