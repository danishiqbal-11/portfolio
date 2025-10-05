import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Danish Iqbal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Technology" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/technology/dsa">DSA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technology/lld">LLD</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technology/hld">HLD</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Investment" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/resources">Resources</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/investment/blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/investment/companies">Companies</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
