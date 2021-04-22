import React from 'react';
import Banner from './Banner';
import Card from './Card';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className="home_section">
                <Card
                    src='https://a0.muscache.com/im/pictures/a2c7d6f2-3e13-4781-8499-edf96c8b7ef8.jpg?im_w=720'
                    title='Online Experience'
                    description='Unique activities we can do together, led by a world of hosts'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/a2c7d6f2-3e13-4781-8499-edf96c8b7ef8.jpg?im_w=720'
                    title='Online Experience'
                    description='Unique activities we can do together, led by a world of hosts'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/a2c7d6f2-3e13-4781-8499-edf96c8b7ef8.jpg?im_w=720'
                    title='Entire homes'
                    description='Comfortable private places, with room for friends and family. Pleaseee oo, dont steal our bedsheets. Ejoo !'
                />
            </div>

            <div className="home_section">
            <Card
                    src='https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720'
                    title='3 Bedroom in Abuja'
                    description='Superhost with a stunning view of the beachside in Sunny Abuja'
                    price='$130/night'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720'
                    title='Penthouse In London'
                    description='Enjoy the amazing sights of London with this stunning penthouse'
                    price='$350/night'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720'
                    title='1 Bedroom apartment'
                    description='Superhost with a stunning view of the beachside in Sunny Abuja. Pleaseee dont steal our bedsheets. Ejoo !'
                    price='$70/night'
                />
            </div>
        </div>
    )
}

export default Home;


// https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720
// https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720
// https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720

// https://a0.muscache.com/im/pictures/a2c7d6f2-3e13-4781-8499-edf96c8b7ef8.jpg?im_w=720