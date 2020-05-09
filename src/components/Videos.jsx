import React from 'react';
import CustomNav from './CustomNav';
import Footer from './Footer';
import logo from '../images/logo.svg';

const Videos = () => (
  <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
    <CustomNav />
    <img src={logo} className="App-logo" alt="logo" />
    <div className="px-3">
      <Footer />
    </div>
  </div>
);

export default Videos;
