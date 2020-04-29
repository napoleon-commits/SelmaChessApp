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

/**
 * <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */
