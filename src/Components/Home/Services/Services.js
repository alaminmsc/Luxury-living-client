import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const {name,price,photo,description} = props.service;
    return (
        
            <div className="col-md-4">
                    <div className="card text-center">
                        <div className="text-center py-3">
                        <img src={photo} width="180px" alt="..."/>
                        </div>
                        <div className="card-body">
                        <Link to={`/book/${name}`} style={{textDecoration:'none'}}>
                            <h3>{name}</h3>
                        </Link>
                            <h4>${price}</h4>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
            </div>
       
    );
};

export default Services;