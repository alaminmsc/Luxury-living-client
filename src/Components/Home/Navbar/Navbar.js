import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/Icon/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="" className="logo"></img>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link mx-2 active nav-list" href="#">Home</a>
                    </li>
                    <li class="nav-item ">
                    <a class="nav-link mx-2 nav-list" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link mx-2 nav-list" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link mx-2 nav-list" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link mx-2 nav-list" to="/addservice">Admin</Link>
                    </li>
                    <li class="nav-item my-3 py-1">
                        {
                            loggedInUser.email && <h5>{loggedInUser.userName}</h5>
                        }
                    </li>
                    <li class="nav-item">
                        {
                            loggedInUser.email? <Link class="nav-link ms-2" to="/login"><button className="btn btn-primary" onClick={()=>setLoggedInUser('')}>Sign Out</button> </Link>:<Link class="nav-link ms-2" to="/login"><button className="btn btn-primary">Login</button> </Link>
                        }
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;