import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Project from '../Project/Project';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Project></Project>
            <Service></Service>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;