import React from 'react';

import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';


const CustomNav = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Selma Chess</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/enroll">Enroll</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <NavDropdown title="Learn" id="basic-nav-dropdown">
          <NavDropdown.Item href="/learn">Basics</NavDropdown.Item>
          <NavDropdown.Item href="/videos">With Videos</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Play" id="basic-nav-dropdown">
          <NavDropdown.Item href="/online">Against a Friend Online</NavDropdown.Item>
          <NavDropdown.Item href="/offline">Against a Friend Offline</NavDropdown.Item>
          <NavDropdown.Item href="/engine">Against Engine</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNav;
