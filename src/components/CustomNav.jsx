import React from 'react';

import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';


const CustomNav = () => (
  <Navbar bg="dark" expand="lg">
    <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-3"/>
      <Navbar.Brand href="/">Selma Chess App</Navbar.Brand>
    </div>
    <Nav.Link href="/enroll">{String("Log in").substring(0,7)}</Nav.Link>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/learn">How to Play</Nav.Link>
        <NavDropdown title="Play" id="basic-nav-dropdown">
          <NavDropdown.Item href="/offline">Against a Friend Offline</NavDropdown.Item>
          <NavDropdown.Item href="/online">Against a Friend Online</NavDropdown.Item>
          <NavDropdown.Item href="/engine">Against Engine</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNav;
