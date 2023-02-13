import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const price = `${product.price.toFixed(2)}`
  return (
    <div className="product">
      <Card className="my-3 p-3 card">
        <Link to={`/product/${product.id}`}>
          <Card.Img
            src={product.image[0]}
            height="150"
            width="150"
            variant="top"
            className="img"
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
          <h6 className="product_h6">£{price}</h6>
        </Container>
      </Card.Body>
    </div>
  );
};

export default Product;
