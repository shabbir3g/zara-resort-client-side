import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BreadcrumbBanner from '../Shared/BreadcrumbBanner/BreadcrumbBanner';

const Phone = <FontAwesomeIcon icon={faPhone} />;
const map = <FontAwesomeIcon icon={faMapMarker} />;
const Envelope = <FontAwesomeIcon icon={faEnvelope} />;

const Contact = () => {
    return (
        <div> 
            <BreadcrumbBanner page="Contact Us"></BreadcrumbBanner>
            <div className="contact-page mt-5">
                <Container> 
                    <Row> 
                        <Col xs={12} lg="4">
                            <h5>Get in Touch</h5>
                            <p>Mon-Fri: 8:00 – 20:00</p>

                            <div className="contact-item">
                            <div className="contact-icon">
                                {map}
                            </div>
                            <h6>Address</h6>
                            <p>Bangladesh, <br />
                            Chatmohar, Pabna - 6630</p>
                            </div>

                            <div className="contact-item">
                            <div className="contact-icon">
                                {Phone}
                            </div>
                            <h6>Call Us</h6>
                            <span>+88 01728 536054</span>
                            </div>

                            <div className="contact-item">
                            <div className="contact-icon">
                                {Envelope}
                            </div>
                            <h6>E-mail</h6>
                            <a href="mailto:contact@webitltd.com">mostafizshabbir@gmail.com</a>
                            </div>
                        </Col>
                        <Col xs={12} lg="8">
                        <div id="contact-form">
                            <div className="row contact-row">
                            <div className="col-md-6 contact-name">
                                <input name="name" id="name" type="text" placeholder="Name*" />
                            </div>
                            <div className="col-md-6 contact-email">
                                <input name="mail" id="mail" type="email" placeholder="E-mail*" />
                            </div>
                            </div>

                            <input name="subject" id="subject" type="text" placeholder="Subject" /> 
                            <textarea name="comment" id="comment" placeholder="Message"></textarea>
                          
                            <Button size="md" className="zara-btn" variant="primary" >Send Message</Button>
                            <div id="msg" className="message"></div>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
                  <div className="mt-5"> 
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7276.590568562585!2d89.287109!3d24.231449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x408e16348bd1d77b!2sChatmohar%20Thana!5e0!3m2!1sen!2sbd!4v1633315022801!5m2!1sen!2sbd" title="contact map" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
                  </div>
            </div>
        </div>
    );
};

export default Contact;