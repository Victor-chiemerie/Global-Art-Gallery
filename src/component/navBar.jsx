import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/">Art Museum</Navbar.Brand>
        <Navbar.Text>
        <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
          </Navbar.Text>
      </Container>
    </Navbar>
  )
}

export default NavBar
