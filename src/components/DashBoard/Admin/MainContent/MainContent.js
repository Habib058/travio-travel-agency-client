import React from 'react';
import Charts from '../Charts/Charts';
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo';
import './MainContent.css'

const MainContent = () => {
    return (
        <div className='main-content'>
            <FeaturedInfo/>
            <Charts/>
        </div>
    );
};

export default MainContent;