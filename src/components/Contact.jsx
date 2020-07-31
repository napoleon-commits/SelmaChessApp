import React from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import CustomNav from './subcomponents/CustomNav';
import Footer from './Footer';
import logo from '../images/logo.svg';


const Contact = () => (
  <div className="bg-primary text-white" style={{ minHeight: '100vh' }}>
    <CustomNav />
    {/* <AmplifySignOut /> */}
    <img src={logo} className="App-logo d-block m-auto" alt="logo" />
    <div className="px-3">
      <Footer />
    </div>
  </div>
);

export default Contact;
// export default withAuthenticator(Contact, true);
