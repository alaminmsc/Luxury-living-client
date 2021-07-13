import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import dithiPhoto from '../../../images/Image/dithisultana.png';
import munnaPhoto from '../../../images/Image/munna.png';
import pannaPhoto from '../../../images/Image/panna.png';
import star from '../../../images/Icon/star.png';
import './Testimonial.css';

const Testimonial = () => {

    return (
        <div className="bg-light">
        <div className="container py-5">
            <OwlCarousel className='owl-theme' autoPlay items="3" loop nav dots>
                <div className='item card p-4'>
                    <div className="d-flex">
                        <div className="card-section">
                            <img src={dithiPhoto} alt=""/>
                        </div>
                        <div className="ms-4 pt-2">
                            <h4>Mahirul Mahmud</h4>
                            <h5>CEO, xyz.com</h5>
                        </div>
                    </div>
                    <div>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex">
                            <img src={star} style={{width:'20px'}} alt=""></img>
                            <img src={star} style={{width:'20px'}} alt=""></img>
                            <img src={star} style={{width:'20px'}} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className='item card p-4 mx-2'>
                    <div className="d-flex">
                        <div className="card-section">
                            <img src={pannaPhoto} alt=""/>
                        </div>
                        <div className="ms-4 pt-2">
                            <h4>Mahirul Mahmud</h4>
                            <h5>CEO, xyz.com</h5>
                        </div>
                    </div>
                    <div>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex">
                            <img src={star} style={{width:'20px'}} alt=""></img>
                            <img src={star} style={{width:'20px'}} alt=""></img>
                            <img src={star} style={{width:'20px'}} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className='item card p-4 mx-2'>
                    <div className="d-flex">
                        <div className="card-section">
                            <img src={munnaPhoto} alt=""/>
                        </div>
                        <div className="ms-4 pt-2">
                            <h4>Mahirul Mahmud</h4>
                            <h5>CEO, xyz.com</h5>
                        </div>
                    </div>
                    <div>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex">
                            <img src={star} style={{width:'20px'}} alt=""></img>
                            <img src={star} style={{width:'20px'}} alt=""></img>
                            <img src={star} style={{width:'20px'}} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className='item card p-4 mx-2'>
                    <div className="d-flex">
                        <div className="card-section">
                            <img src={dithiPhoto} alt=""/>
                        </div>
                        <div className="ms-4 pt-2">
                            <h4>Mahirul Mahmud</h4>
                            <h5>CEO, xyz.com</h5>
                        </div>
                    </div>
                    <div>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex">
                            <img src={star} style={{width:'20px'}} alt=""></img>
                            <img src={star} style={{width:'20px'}} alt=""></img>
                            <img src={star} style={{width:'20px'}} alt=""></img>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            
        </div>
        </div>
    );
};

export default Testimonial;