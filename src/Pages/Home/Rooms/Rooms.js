
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Room from './Room/Room';
import './Rooms.css'

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const url = `https://frozen-beyond-51004.herokuapp.com/services`;
        fetch(url)
        .then(res=> res.json())
        .then(data =>setRooms(data) )
    }, []);

    return (
        <div>
            <div className="container">
            <div className="main_title mt_wave mt_dark text-center">
                <h2>Our Living Rooms</h2>
            </div>
            <p className="main_description md_dark text-center">Across the street from the ordinary</p>
                <div className="row">

                {
                    rooms.map(room => <Room  
                        key={room._id}
                        room={room}></Room>)
                }

                   


                   
                </div>
                
            </div>
        </div>
    );
};

export default Rooms;