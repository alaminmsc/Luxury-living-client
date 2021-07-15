import React from 'react';
import location from '../../../images/Icon/mappin.png';
import './Footer.css';
import pinterest from '../../../images/Icon/pin.png';
import fb from '../../../images/Icon/fb.png';
import utube from '../../../images/Icon/utube.png';
import lin from '../../../images/Icon/lin.png';

const Footer = () => {
    return (
        <div className="bg-dark py-4 mt-5">
        <div className="container my-3 py-3 text-white">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex">
                    <img src={location} alt="" />
                    <p>House# Kanon villa (2th floor), Road#193, New DOHS, Mohakhali, Dhaka, Bangladesh.</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>Company</li>
                        <li>Project</li>
                        <li>Our Team</li>
                        <li>Terms Conditions</li>
                        <li>Submit Listing</li>
                    </ul>
                </div>
                <div className="col-md-2">
                <ul>
                        <li>Quick Link</li>
                        <li>Rentals</li>
                        <li>Sales</li>
                        <li>Contact</li>
                        <li>Our blog</li>
                    </ul>

                </div>
                <div className="col-md-4">
                <ul>
                        <li>About us</li>
                        <li className="pb-2">sometext will be here. so call me now. sometext will be here. so call me now.
                        sometext will be here.
                        </li>
                        <li>
                            <ul className="d-flex social">
                            <li><img src={pinterest} alt=""></img></li>
                            <li><img src={fb} alt=""></img></li>
                            <li><img src={utube} alt=""></img></li>
                            <li><img src={lin} alt=""></img></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="text-center text-white my-3">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </div>
    );
};

export default Footer;