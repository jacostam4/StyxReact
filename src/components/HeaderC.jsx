import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderC = () => {
  return (
    <Navbar expand="lg" bg="light" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Iniciar Sesion</Nav.Link>
            <Nav.Link href="#link">Registrarse</Nav.Link>
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Something else here</NavDropdown.Item>
            </NavDropdown>            
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderC;
