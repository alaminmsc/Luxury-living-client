import React from 'react';
import villa from '../../../images/Image/villa.png';
import luxury from '../../../images/Image/luxury.png';
import gorgeous from '../../../images/Image/gorgeous.png';
import Projects from '../Projects/Projects';


const Project = () => {
    const projectData = [
        {
            name: 'Villa on Washington Avenue',
            photo: villa,
            location: 'Dhaka, Bangladesh'        
        },
        {
            name: 'Luxury villa in Rego Park',
            photo: luxury,
            location: 'Dhaka, Bangladesh'        
        },
        {
            name: 'Gorgeous House',
            photo: gorgeous,
            location: 'Dhaka, Bangladesh'        
        }
    ]
    return (
        <div className="container">
            <div className="text-center">
            <h3>Projects</h3>
            <h1>Discovery the latest Interior Design <br></br>avaiable today</h1>
            </div>
            <div className="row d-flex justify-content-between">
                {
                    projectData.map(project => <Projects project={project}></Projects>)
                }
            </div>

        </div>
    );
};

export default Project;