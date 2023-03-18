import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="/">Art Museum</Navbar.Brand>
      <Navbar.Text>
        <i className="bi bi-mic-fill text-light" style={{ fontSize: 20 }} />
        <i className="bi bi-gear text-light ps-4" style={{ fontSize: 20 }} />
      </Navbar.Text>
    </Container>
  </Navbar>
);

export default NavBar;
