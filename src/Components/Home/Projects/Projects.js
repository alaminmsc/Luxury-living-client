import React from 'react';
import icon from '../../../images/Icon/location.png'

const Projects = (props) => {
    const {name, photo, location} = props.project;
    return (
            <div className="col-md-4 px-4 my-2">
                <img src={photo} alt="" width="420px" height="380px" className="card-img-top"></img>
                <div className="card-body">
                <div className="text-center">
                <h5 class="card-title">{name}</h5>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={icon} alt="" width="30px" className="mx-1"></img>
                        <p className="card-text">{location}</p>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Projects;