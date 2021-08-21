import React from 'react';
import './FeaturedInfo.css';
import {ArrowDownward} from '@material-ui/icons';

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem bg-success text-dark bg-opacity-50">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2456</span>
                    <span className="featuredMoneyRate">-11.2 <ArrowDownward/></span>
                </div>
                <span className='featuredSub'>Compared To Last Month</span>
            </div>
            <div className="featuredItem bg-danger text-dark bg-opacity-50">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2456</span>
                    <span className="featuredMoneyRate">-11.2 <ArrowDownward/></span>
                </div>
                <span className='featuredSub'>Compared To Last Month</span>
            </div>
            <div className="featuredItem bg-warning text-dark bg-opacity-50">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2456</span>
                    <span className="featuredMoneyRate">-11.2 <ArrowDownward/></span>
                </div>
                <span className='featuredSub'>Compared To Last Month</span>
            </div>
            
        </div>
    );
};

export default FeaturedInfo;