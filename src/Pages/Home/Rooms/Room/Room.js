import React from 'react';
import { Button } from 'react-bootstrap';
const Room = (props) => {
    const {title, desc, price, size, image} = props.room;
    return (
        <>
            <div className="col-md-6 col-lg-4">
            <div className="room-thumb-grid-1 hover_zoom bg-white mb-4 shadow">
                <div className="thumb-top  overflow_hidden">
                    <div className="room-size upper-place-bottom-right">{size}</div>
                    <img src={image} alt="Booking Room" />
                    </div>
                <div className="room-info p-4">
                    <div className="down-line-left mb-3">
                        <h5 className="title"><a className="text-secondery" href="/">{title}</a></h5>
                        <span>{desc.substring(0, 39)}</span> </div>
                    <div className="h5 per-night text-secondery">${price}<small>/Night</small></div>
                    <Button className="btn btn-primary float-right fw-bold">Book Now</Button>
                </div>
            </div>
            </div>
        </>
    );
};

export default Room;