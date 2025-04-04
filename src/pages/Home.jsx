import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard"; // Para mostrar productos


const Home = () => {
  return (
    <Container className="home-container text-center">
      <h1 className="mt-4">Bienvenido a Styx Skate Shop</h1>
      <p>Explora nuestra colección de ropa y accesorios para skaters.</p>
      <Button variant="dark" href="/shop">Ver Productos</Button>

      <h2 className="mt-5">Productos Destacados</h2>
      <Row>
        <Col md={4}><ProductCard title="Jeans Carpintero" price="$120,000" img="https://via.placeholder.com/150" /></Col>
        <Col md={4}><ProductCard title="Camiseta Oversize" price="$60,000" img="https://via.placeholder.com/150" /></Col>
        <Col md={4}><ProductCard title="Gorra Skate" price="$40,000" img="https://via.placeholder.com/150" /></Col>
      </Row>
    </Container>
  );
};

export default Home;
