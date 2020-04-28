import React from 'react';
import Header from './components/Header';
import Learn from './components/Learn';
import Footer from './components/Footer';

import './styles/common.css';

function App() {
  return (
    <div className="bg-primary text-white">
      <Header />
      <Learn />
      <Footer />
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
