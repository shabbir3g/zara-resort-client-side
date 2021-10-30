import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Rooms from './Rooms/Rooms';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Rooms></Rooms>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;