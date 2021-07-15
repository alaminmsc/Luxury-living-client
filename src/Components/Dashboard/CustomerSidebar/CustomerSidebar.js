import { faComment, faCommentAlt, faCommentDots, faServer, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Icon/logo.png';
import './Customersidebar.css';

const CustomerSidebar = () => {
    return (
        <div className="mx-4 my-3">
            <div className="ms-4">
                <Link to="/">
                <img src={logo} alt="" className="logo"></img>
                </Link>
            </div>
            <div className="customer-dashboard py-3 mt-4">
                <ul>
                    <Link to="/book">
                    <li><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Book</li>
                    </Link>
                    <Link to="/bookinglist">
                    <li><FontAwesomeIcon icon={faServer}></FontAwesomeIcon> Booking List</li>
                    </Link>
                    <Link to="/review">
                    <li><FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon> Review</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default CustomerSidebar;