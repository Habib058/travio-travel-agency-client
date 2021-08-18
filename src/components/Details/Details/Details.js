import React from 'react';
import travel1 from '../../../assets/images/travel1.jpg'
import travel2 from '../../../assets/images/travel1.jpg'
import trust from '../../../assets/images/trust1.jpg'
import travel3 from '../../../assets/images/travel3.jpg'
import DetailsList from '../DetailsList/DetailsList';
const detailsData = [
    {
        img: travel1,
        icon: '',
        heading: '2000+ Our Worldwide Guides'

    },
    {
        img: travel2,
        icon: '',
        heading: '12+ Years of Travel Experience'

    },
    {
        img: trust,
        icon: '',
        heading: '100% Trusted Tour Agency'

    },
    {
        img: travel3,
        icon: '',
        heading: '98% of Our Travelers are Happy'

    },
]

const Details = () => {
    return (
        <section>
            <div className='mt-5 pt-5 text-center'>
                <h4 className='text-secondary'>TRAVIO SPECIALS</h4>
                <h1 style={{ color: '#061a3a' }}>Why Travel With TRAVIO?</h1>
            </div>
            <div className='container '>
            <div className='card-deck row mt-5 pt-5 '>
                {
                    detailsData.map(info => <DetailsList info={info}></DetailsList>)
                }

            </div>
            </div>
        </section>
    );
};

export default Details;