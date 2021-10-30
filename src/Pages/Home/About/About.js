import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutimg from './../../../images/abt_img2.jpg'
const About = () => {
    return (
        <div className="my-5">
            <Container> 
                <Row className="my-5"> 
                    <Col className="my-5" xs={12} lg={6}> 
                        <h1>Zara Resort</h1>
                        <h3>Who we are</h3>
                        <b><i>Manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</i></b> 
                        <br />
                        <br />
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. </p>
                        <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
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