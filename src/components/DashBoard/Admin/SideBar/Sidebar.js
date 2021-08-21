import React from 'react';
import { LineStyle, GroupAdd, FlightTakeoff, Group,ShoppingCart } from '@material-ui/icons';
import './SideBar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList ">
                        <Link to='admin' className='link'>
                            <li className="sideBarListItem">
                                <LineStyle className='sideBarIcon' />
                                Home
                            </li>
                        </Link>
                        <Link to='addAdmin' className='link'>
                            <li className="sideBarListItem">
                                <GroupAdd className='sideBarIcon' />
                                Add-Admin
                            </li>
                        </Link>
                        <Link className='link'>
                            <li className="sideBarListItem">
                                <ShoppingCart className='sideBarIcon' />
                                Orders
                            </li>
                        </Link>
                        <Link className='link'>
                            <li className="sideBarListItem">
                                <FlightTakeoff className='sideBarIcon' />
                                Add Tours
                            </li>
                        </Link>
                        <Link className='link' to='users'>
                            <li className="sideBarListItem">
                                <Group className='sideBarIcon' />
                                Users
                            </li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;