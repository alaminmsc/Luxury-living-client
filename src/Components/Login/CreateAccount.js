import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { handleGoogleSignIn, initializeFirebase } from './LoginManager';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import './Login.css';
import googleIcon from '../../images/Icon/google.png';
import facebook from '../../images/Icon/facebook.png';

initializeFirebase();

const CreateAccount = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const googleSignIn = () => {
      handleGoogleSignIn()
        .then(res => {
          setLoggedInUser(res);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="login">
                <div className="my-3 border p-4 rounded">
                    <h3 className="pb-4">Create an account</h3>
                    <input type="text" name="firstname" className="form-control mb-2" placeholder="First Name"></input>
                    <input type="text" name="lastname" className="form-control" placeholder="Last Name"></input>
                    <input type="text" name="email" className="form-control mb-2" placeholder="Username or email"></input>
                    <input type="number" name="password" className="form-control mb-2" placeholder="Password"></input>
                    <input type="number" name="confirmpassword" className="form-control mb-2" placeholder="Confirm Password"></input>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block form-control">Create an account</button>
                    </div>
                    <div className="py-2">
                        <p className="text-center">Already have an account? <Link to="/login"><span>Login</span></Link> </p>
                    </div>
                </div>
                <br></br>
                <div>
                    <h5 className="social-login text-center">OR</h5>
                </div>
                <br></br>
                <div className="google my-2">
                    <button className='btn btn-block d-flex justify-content-center p-1 align-items-center border' onClick={googleSignIn}> <img src={googleIcon} className="" width="35px" alt=""/><span className="ms-1">Continue with Google</span> </button>
                </div>
                <div className="google">
                    <button className='btn btn-block d-flex justify-content-center p-1 align-items-center border' onClick={googleSignIn}> <img src={facebook} className="ms-4" width="35px" alt=""/><span className="px-2">Continue with facebook</span></button>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;