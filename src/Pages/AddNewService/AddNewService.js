import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import BreadcrumbBanner from '../Shared/BreadcrumbBanner/BreadcrumbBanner';
import { useForm } from "react-hook-form";

const AddNewService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <BreadcrumbBanner page="Add New Service"></BreadcrumbBanner>
                <div className="add-service">
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="RoomTitle">
                            <Form.Label><b>Room Title</b></Form.Label>
                            <input type="text" placeholder="Room Title"   {...register ("title", { required: true })} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="RoomSize">
                            <Form.Label><b>Room Size</b></Form.Label>
                            <input type="text" placeholder="Example 22 X 18 Sqft"   {...register("size", { required: true })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Description">
                            <Form.Label><b>Price</b></Form.Label>
                            <input type="text" placeholder="Price per night"   {...register("price", { required: true })} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="RoomSize">
                            <Form.Label><b>Image URL</b></Form.Label>
                            <input type="text" placeholder="Image URL"   {...register("image", { required: true })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Description">
                            <Form.Label><b>Description</b></Form.Label>
                            <textarea style={{ height: '100px' }} type="text" placeholder="Description"   {...register("desc", { required: true })} />
                            </Form.Group>
                        </Row>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
                </div>
        </div>
    );
};

export default AddNewService;