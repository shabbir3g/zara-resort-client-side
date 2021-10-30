import React from 'react';
import logo from '../../../images/logo.png';
import inst1 from '../../../images/instagram/1.jpg';
import inst2 from '../../../images/instagram/2.jpg';
import inst3 from '../../../images/instagram/3.jpg';
import inst4 from '../../../images/instagram/4.jpg';
import inst5 from '../../../images/instagram/5.jpg';
import inst6 from '../../../images/instagram/6.jpg';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="knsl-footer">
                    <div className="container knsl-p-100-100">
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                        <img className="knsl-footer-logo" src={logo} alt="Kinsley" />
                        <div className="knsl-footer-about">Sequi dolores ratione eos eveniet provident soluta. Omnis nesciunt sit eos at, eius voluptatum rem corporis. Doloremque labore assumenda
                            explicabo velit illo, soluta rem, inventore hic.</div>
                        <div className="knsl-footer-social">
                            <a href="/"><i className="fab fa-twitter"></i></a>
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-youtube"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        </div>

                        <div className="col-md-6 col-lg-2">
                        <h4>Menu</h4>
                        <ul className="knsl-footer-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About us</Link></li>
                            <li><Link to="/">Rooms</Link></li>
                            <li><Link to="/">Our services</Link></li>
                            <li><Link to="/">Contact info</Link></li>
                        </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <h4>Meet Kinsley</h4>
                        <ul className="knsl-footer-menu">
                            <li><Link to="/">Terms and conditions</Link></li>
                            <li><Link to="/">Privacy policy</Link></li>
                            <li><Link to="/">Help center</Link></li>
                            <li><Link to="/">Work with us</Link></li>
                            <li><Link to="/">Sitemap</Link></li>
                        </ul>
                        </div>


                        <div className="col-md-6 col-lg-3">
                        <h4>Instagram</h4>
                        <div className="footer-insta">
                            <Link to="/"><img src={inst1} alt="insta"/></Link>
                            <Link to="/"><img src={inst2} alt="insta"/></Link>
                            <Link to="/"><img src={inst3} alt="insta"/></Link>
                            <Link to="/"><img src={inst4} alt="insta"/></Link>
                            <Link to="/"><img src={inst5} alt="insta"/></Link>
                            <Link to="/"><img src={inst6} alt="insta"/></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="knsl-copyright">
                    <div className="container">
                        <div className="copy-text">
                        <div> &copy; Zara Luxury Hotel and Resort 2021. All Rights Reserved.</div>
                        </div>
                        <div className="copy-menu">
                        <div>Design by: <a href="http://facebook.com/shabbir3g">Md. Mostafizur Rahman</a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
        </div>
    );
};

export default Footer;