import React from 'react';

import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';


const CustomNav = () => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="/">Selma Chess App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/enroll">Login/Signup</Nav.Link>
        <Nav.Link href="/learn">How to Play</Nav.Link>
        <NavDropdown title="Play" id="basic-nav-dropdown">
          <NavDropdown.Item href="/offline">Against a Friend Offline</NavDropdown.Item>
          <NavDropdown.Item href="/online">Against a Friend Online</NavDropdown.Item>
          <NavDropdown.Item href="/engine">Against Engine</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNav;
