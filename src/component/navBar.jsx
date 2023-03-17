import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/">Art Museum</Navbar.Brand>
        <Navbar.Text>
        <i className="bi bi-mic-fill text-light" style={{ fontSize: 20 }}></i>
        <i className="bi bi-gear text-light ps-4" style={{ fontSize: 20 }}></i>
          </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default NavBar
