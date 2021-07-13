import React from 'react';
import dithiPhoto from '../../../images/Image/dithisultana.png';
import munnaPhoto from '../../../images/Image/munna.png';
import pannaPhoto from '../../../images/Image/panna.png';
import star from '../../../images/Icon/star.png';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonialData = [
                                {
                                    name:'Nash Patrik',
                                    photo:dithiPhoto,
                                    designation:'CEO, Manpol',
                                    message:'Lorem ipsum dolor sit amet cansectetur adipiscing elit purus commodo ipsum dutis idarset maceena fougit',
                                    rank:star
                                },
                                {
                                    name:'Minan Munna',
                                    photo:munnaPhoto,
                                    designation:'CEO, Manpol',
                                    message:'Lorem ipsum dolor sit amet cansectetur adipiscing elit purus commodo ipsum dutis idarset maceena fougit',
                                    rank:star
                                },
                                {
                                    name:'Mahirul Panna',
                                    photo:pannaPhoto,
                                    designation:'CEO, Manpol',
                                    message:'Lorem ipsum dolor sit amet cansectetur adipiscing elit purus commodo ipsum dutis idarset maceena fougit',
                                    rank:star
                                }

                            ]
    return (
        <div className="container">
            <div>
                <h1>Testimonials</h1>
            </div>
            <div className="row">
                {
                    testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                }
            </div>

            
        </div>
    );
};

export default Testimonials;