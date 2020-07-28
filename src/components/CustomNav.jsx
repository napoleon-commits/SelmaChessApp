import React from 'react';

import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

import { Auth } from 'aws-amplify';

class CustomNav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      authObject : {}
    };
    this.logout = this.logout.bind(this);
  }
  componentDidMount(){
    Auth.currentUserInfo().then(authObject => {
      console.log(authObject);
      console.log(authObject.username)
      this.setState({
        authObject,
      });
    }).catch(error => {
      console.log('error currentUserInfo' + error);
      this.setState({
        authObject: {},
      });
    })
  }

  logout(){

  }

  render(){
    const {authObject} = this.state;
    return (
      <Navbar bg="dark" expand="lg">
      <div>
        <Navbar.Toggle id="navbar-toggle" aria-controls="basic-navbar-nav" className="mr-3" />
        <Navbar.Brand href="/">Selma Chess App</Navbar.Brand>
      </div>
      <div>{
        (window.location.pathname === '/enroll')
          ? null
          : authObject.username ? (
              <>
                <>{`${authObject.username}`}</>
                <div id="logout">Log out</div>
              </>
            ) : (
            <Nav.Link href="/enroll">
              {String('Log in').substring(0, 7)}
            </Nav.Link>
          )
      }</div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={window.location.pathname} className="mr-auto">
          <Nav.Link href="/learn">How to Play</Nav.Link>
          <NavDropdown title="Play" id="basic-nav-dropdown">
            <NavDropdown.Item href="/offline">Free Mode</NavDropdown.Item>
            <NavDropdown.Item href="/online">Against a Friend Online</NavDropdown.Item>
            <NavDropdown.Item href="/engine">Against Engine</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default CustomNav;
