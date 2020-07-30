import React from 'react';
import Learn from './components/Learn';
import Footer from './components/Footer';
import CustomNav from './components/CustomNav';


import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';

function App() {
  return (
    <div className="bg-primary text-white">
      <CustomNav />
      <Learn />
      <div className="px-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
