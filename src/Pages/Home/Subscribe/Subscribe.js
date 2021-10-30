import React from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PaperPlane = <FontAwesomeIcon icon={faPaperPlane} />;

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="overlay">
            <div class="container">
                <div class="main_title mt_wave mt_white a_center">
                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                </div>
                <p class="main_description md_white a_center">Subscribe to our newsletter to receive exclusive offers and the latest news.</p>
                <form id="subscribe-form" name="subscribe">
                <div class="form-group">
                <input type="email" name="subscribe-email" class="form-control" placeholder="Enter your email" />
                <button class="button btn_lg btn_yellow" type="submit">{PaperPlane}</button>
                </div>
                </form>
                </div>
                </div>
        </div>
    );
};

export default Subscribe;