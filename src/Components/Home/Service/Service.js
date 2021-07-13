import React from 'react';
import home from '../../../images/Icon/home.png';
import interior from '../../../images/Icon/interior.png';
import showroom from '../../../images/Icon/showroom.png';
import Services from '../Services/Services';

const Service = () => {
    const serviceData = [
                            {
                                name: 'Office Interior Design',
                                photo: interior,
                                price: 299,
                                description: 'Amet mimimmollit non deserunt ullamco est sit aliqua dolor do amet sint. velit offica consequat duis enim velit molliat'
                            },
                            {
                                name: 'Showroom Design',
                                photo: showroom,
                                price: 399,
                                description: 'Amet mimimmollit non deserunt ullamco est sit aliqua dolor do amet sint. velit offica consequat duis enim velit molliat'
                            },
                            {
                                name: 'Residential/Home',
                                photo: home,
                                price: 499,
                                description: 'Amet mimimmollit non deserunt ullamco est sit aliqua dolor do amet sint. velit offica consequat duis enim velit molliat'
                            }
                        ]
    return (
        <div className="container my-4">
            <div className="text-center py-3">
                <h4>Service</h4>
                <h1>We're an agency tailored to all <br></br>
                clients' needs that always delivers
                </h1>
            </div>
            <div className="row">
                {
                    serviceData.map(service => <Services service={service}></Services>)
                }
            </div>
            <div className="text-center">
            <button className="btn btn-primary px-4 my-2">Explore more</button>
            </div>
            
        </div>
    );
};

export default Service;