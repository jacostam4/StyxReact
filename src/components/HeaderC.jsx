import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderC = () => {
  return (
    <Navbar expand="lg" bg="light" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Styx</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cuenta" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/Login">Iniciar Sesion</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Register">Registrarse</NavDropdown.Item>                            
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
