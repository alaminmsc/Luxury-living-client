import { faComment, faCommentAlt, faCommentDots, faPeopleArrows, faPlus, faServer, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/Icon/logo.png';
import './AdminSidebar.css';

const AdminSidebar = () => {
    return (
        <div className="mx-4 my-3">
            <div className="ms-4">
                <Link to="/">
                <img src={logo} alt="" className="logo"></img>
                </Link>
            </div>
            <div className="admin-dashboard py-3 mt-4">
                <ul>
                    <Link to="/orderlist">
                    <li><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Order List</li>
                    </Link>
                    <Link to="/addservice">
                    <li><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Service</li>
                    </Link>
                    <Link to="/makeadmin">
                    <li><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon> Make Admin</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;