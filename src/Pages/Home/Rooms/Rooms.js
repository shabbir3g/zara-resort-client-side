import React from 'react';
import { Button } from 'react-bootstrap';
import room from '../../../images/rooms/4.jpg'
import './Rooms.css'

const Rooms = () => {
    return (
        <div>
            <div className="container">
            <div className="main_title mt_wave mt_dark text-center">
                <h2>Our Living Rooms</h2>
            </div>
            <p className="main_description md_dark text-center">Across the street from the ordinary</p>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                            <div className="thumb-top  overflow_hidden">
                                <div className="room-size upper-place-bottom-right">12 X 15 Sqft</div>
                                <img src={room} alt="Booking Room" />
                                </div>
                            <div className="room-info p-4">
                                <div className="down-line-left mb-3">
                                    <h5 className="title"><a className="text-secondery" href="/">Classic Room</a></h5>
                                    <span>Duble bed 2 window, mountain view</span> </div>
                                <div className="h5 per-night text-secondery">$80<small>/Night</small></div>
                                <Button className="btn btn-primary float-right fw-bold">Book Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                            <div className="thumb-top overflow_hidden">
                                <div className="room-size upper-place-bottom-right">22 X 18 Sqft</div>
                                <img src={room} alt="Booking Room" />
                            </div>
                            <div className="room-info p-4">
                                <div className="down-line-left mb-3">
                                    <h5 className="title"><a className="text-secondery" href="/">Duplex Room</a></h5>
                                    <span>Duble bed 2 window, mountain view</span> </div>
                                <div className="h5 per-night text-secondery">$120<small>/Night</small></div>
                                <Button className="btn btn-primary float-right fw-bold">Book Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                            <div className="thumb-top overflow_hidden">
                                <div className="room-size upper-place-bottom-right">16 X 12 Sqft</div>
                                <img src={room} alt="Booking Room"/>
                            </div>
                            <div className="room-info p-4">
                                <div className="down-line-left mb-3">
                                    <h5 className="title"><a className="text-secondery" href="/">Honeymoon Room</a></h5>
                                    <span>Duble bed 1 sofa and mountain view</span> </div>
                                <div className="h5 per-night text-secondery">$150<small>/Night</small></div>
                                <Button className="btn btn-primary float-right fw-bold">Book Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                            <div className="thumb-top overflow_hidden">
                                <div className="room-size upper-place-bottom-right">12 X 15 Sqft</div>
                                <img src={room} alt="Booking Room" />
                            </div>
                            <div className="room-info p-4">
                                <div className="down-line-left mb-3">
                                    <h5 className="title"><a className="text-secondery" href="/">Economy Room</a></h5>
                                    <span>Duble bed 2 window, mountain view</span> </div>
                                <div className="h5 per-night text-secondery">$80<small>/Night</small></div>
                                <Button className="btn btn-primary float-right fw-bold">Book Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                            <div className="thumb-top overflow_hidden">
                                <div className="room-size upper-place-bottom-right">22 X 18 Sqft</div>
                                <img src={room} alt="Booking Room" />
                            </div>
                            <div className="room-info p-4">
                                <div className="down-line-left mb-3">
                                    <h5 className="title"><a className="text-secondery" href="/">Duplex Room</a></h5>
                                    <span>Duble bed 2 window, mountain view</span> </div>
                                <div className="h5 per-night text-secondery">$120<small>/Night</small></div>
                                <Button className="btn btn-primary float-right fw-bold">Book Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                            <div className="thumb-top overflow_hidden">
                                <div className="room-size upper-place-bottom-right">16 X 12 Sqft</div>
                                <img src={room} alt="Booking Room" /> 
                            </div>
                            <div className="room-info p-4">
                                <div className="down-line-left mb-3">
                                    <h5 className="title"><a className="text-secondery" href="/">Special Room</a></h5>
                                    <span>Duble bed 1 sofa and mountain view</span> </div>
                                <div className="h5 per-night text-secondery">$150<small>/Night</small></div>
                                <Button className="btn btn-primary float-right fw-bold">Book Now</Button>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
        </div>
    );
};

export default Rooms;