import React from 'react';
import logo from '../images/logo.svg';
import CustomNav from './CustomNav';
import Footer from './Footer';

const About = () => (
  <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
    <CustomNav />
    <img src={logo} className="App-logo d-block m-auto" alt="logo" />
    <div className="px-3">
      <Footer />
    </div>
  </div>
);

export default About;
