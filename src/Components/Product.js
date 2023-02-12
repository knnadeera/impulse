import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const price = `${product.price.toFixed(2)}`
  return (
    <div className="product">
      <Card className="my-3 p-3">
        <Link to={`/product/${product.id}`}>
          <Card.Img
            src={product.image[0]}
            height="200"
            width="200"
            variant="top"
          />
        </Link>
      </Card>
      <Card.Body >
        <Container>
          <Link to={`/product/${product.id}`}>
            <Card.Title as="div">
              <h4>{product.name}</h4>
            </Card.Title>
          </Link>
          <h6>£{price}</h6>
        </Container>
      </Card.Body>
    </div>
  );
};

export default Product;
