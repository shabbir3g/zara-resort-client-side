import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import BreadcrumbBanner from '../Shared/BreadcrumbBanner/BreadcrumbBanner';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';



const Booking = () => {
    const {roomId} = useParams();
    const {user} = useAuth();
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const [services, setService] = useState();

    
    const onSubmit = data => {
        data.name = user.displayName;
        data.email = user.email;
        data.title = services?.title;
        data.size = services?.size;
        data.price = services?.price;
        data.status = "Pending";
        console.log(data);

       axios.post('https://frozen-beyond-51004.herokuapp.com/booking', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
                window.location = "/thanks"
            }
            console.log(res);
        })
    }


    useEffect(() => {
        const url = `https://frozen-beyond-51004.herokuapp.com/services/${roomId}`
            fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    
    return (
        <div>
        <BreadcrumbBanner page="Booking"></BreadcrumbBanner>
            <div className="add-service">
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Col xs={12} md={7}>
                            <Form.Group controlId="RoomTitle">
                            <Form.Label><b>Room Title</b></Form.Label>
                            <input style={{cursor: 'not-allowed'}} disabled type="text" defaultValue={services?.title}  {...register ("title")} />
                            </Form.Group>

                            <Form.Group controlId="RoomSize">
                            <Form.Label><b>Room Size</b></Form.Label>
                            <input style={{cursor: 'not-allowed'}} disabled type="text" defaultValue={services?.size} {...register("size")} />
                            </Form.Group>
                            <Form.Group controlId="Description">
                            <Form.Label><b>Price</b></Form.Label>
                            <input style={{cursor: 'not-allowed'}} disabled type="text" defaultValue={services?.price} {...register("price")} />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={5}> 
                            <img className="img-fluid" src={services?.image} alt="" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your Name</b></Form.Label>
                        <input style={{cursor: 'not-allowed'}} disabled type="text" defaultValue={user?.displayName}  {...register("name")} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your E-mail</b></Form.Label>
                        <input style={{cursor: 'not-allowed'}} disabled type="text" defaultValue={user?.email}  {...register("email")} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your Phone Number</b></Form.Label>
                        <input type="text" placeholder="Phone Number"  {...register("phone", { required: true })} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="RoomSize">
                        <Form.Label><b>Your Country</b></Form.Label>
                        <input type="text" placeholder="Country"  {...register("country", { required: true })} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="Description">
                        <Form.Label><b>Message</b></Form.Label>
                        <textarea style={{ height: '150px' }} type="text" placeholder="Message"   {...register("message", { required: true })} />
                        </Form.Group>
                    </Row>
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    <Button className="fw-bold" variant="primary" type="submit">
                        Book Now
                    </Button>
                </Form>
            </Container>
            </div>
    </div>
    );
};

export default Booking;