import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutimg from './../../../images/abt_img2.jpg'
const About = () => {
    return (
        <div className="my-5">
            <Container> 
                <Row className="my-5"> 
                    <Col className="my-5  about-text" xs={12} lg={6}> 
                        <h1 className="title-main">Zara Resort</h1>
                        <h3>Who we are</h3>
                        <b><i>Zara Beach Resort is Cox’s Bazar’s best oceanfront living modern and tropical accents. Comfortable bed with luxury linens, elegantly-detailed bathroom furnishings, settle in unwind indulge yourself with the luxury and scenic view from your room.</i></b> 
                        <br />
                        <br />
                        <p>After fifty years of glorious past, Zara Resort revives its famed legacy of comfort, elegance and impeccable service. An eminent landmark constructed in 1964, this legendary first private hotel of Cox’s Bazar is reborn, infusing modern sophistication into this vintage-chic, iconic hotel at a new beachfront location of Marine Drive, Kolatoli, Cox’s Bazar. </p>
                        <p>With its richly historic past, the Hotel Zara now fully becomes a part of the exciting and rapidly changing present with the addition of a modern, elegant luxury ocean front hotel. The beauty of Cox’s Bazar – the climate, the panoramic ocean views, the sandy beaches, plus the rich culture and history along with the warmth of the sun – is what attracts people here. And the Zara Beach Resort provides you exactly just that with extraordinary comfort, luxury and services</p>
                        <Link to="/contact"><Button className="zara-btn" variant="primary" size="md" >Contact Us</Button></Link>
                    </Col>
                    <Col className="my-5" xs={12} lg={6}> 
                        <img className="img-fluid" src={aboutimg} alt="" />
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default About;