import React from 'react';
import Sidebar from '../../Admin/SideBar/Sidebar';
import TopBar from '../../Admin/Topbar/Topbar';
import UserReviewForm from '../UserReviewForm/UserReviewForm';
import './UserReview.css'

const UserReview = () => {
    return (
        <div>
            <TopBar/>
            <div className="content">
                <Sidebar/>
                <UserReviewForm/>
            </div>
        </div>
    );
};

export default UserReview;