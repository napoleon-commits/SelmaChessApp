import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';

import Amplify from 'aws-amplify';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import awsconfig from './aws-exports';

import store from './redux/store';

import './styles/common.css';
import logo from './images/logo.svg';


const Contact = React.lazy(() => import('./components/Contact'));
const Login = React.lazy(() => import('./components/Login'));
const Learn = React.lazy(() => import('./components/Learn'));
const PlayOffline = React.lazy(() => import('./components/PlayOffline'));
const PlayOnline = React.lazy(() => import('./components/PlayOnline'));
const Register = React.lazy(() => import('./components/Register'));

Amplify.configure(awsconfig);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div className="bg-primary" style={{ minHeight: '100vh' }}><img src={logo} className="App-logo d-block m-auto" alt="logo" /></div>}>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/offline">
            <PlayOffline />
          </Route>
          <Route path="/online">
            <PlayOnline />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Learn />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
