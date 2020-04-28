import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


import About from './components/About';
import Contact from './components/Contact';
import Enroll from './components/Enroll';
import Learn from './components/Learn';
import PlayEngine from './components/PlayEngine';
import PlayOffline from './components/PlayOffline';
import PlayOnline from './components/PlayOnline';
import Videos from './components/Videos';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/enroll">
          <Enroll />
        </Route>
        <Route path="/learn">
          <Learn />
        </Route>
        <Route path="/engine">
          <PlayEngine />
        </Route>
        <Route path="/offline">
          <PlayOffline />
        </Route>
        <Route path="/online">
          <PlayOnline />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
