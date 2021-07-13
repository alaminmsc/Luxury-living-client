import React from 'react';
import mainPhoto from '../../../images/Image/mainPhoto.png';

const HeaderMain = () => {
    return (
        <div className="bg-light">
        <div className="container">
            <div className="row py-5">
                <div className="col-md-5">
                    <h1>We Build <br></br>Your Dream</h1>
                    <p>Online Easte Agency the modern way to sell your own home. you can use Griffin Residential to market your property.</p>
                    <button className="btn btn-primary">Booking</button>
                </div>
                <div className="col-md-7 text-end">
                    <img src={mainPhoto} alt="" width="70%"></img>
                </div>
            </div>            
        </div>
        </div>
    );
};

export default HeaderMain;