import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import About from './About/About';
import Banner from './Banner/Banner';
import Rooms from './Rooms/Rooms';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    const {isLoading } = useAuth();
    if(isLoading){
        return  <div>
                <Banner></Banner>
                <div className="text-center spinner-home"> 
                <Spinner animation="border" variant="danger" />
                </div>
            </div>
    }

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