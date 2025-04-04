import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ title, price, img }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;