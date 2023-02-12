import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  const [image, setImage] = useState(product.image[0]);
  const price = product.price.toFixed(2);

  return (
    <>
      <Container>
        <Row>
          <div className="productDetails">
            <Col md={5}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: `${product.name}`,
                    isFluidWidth: true,
                    src: image,
                  },
                  largeImage: {
                    src: image,
                    width: 1200,
                    height: 1000,
                  },
                }}
              />
              <div className="gallery">
                {product.image.map((i) => (
                  <div className="gallery_img" key={i}>
                    <img
                      src={i}
                      alt={i}
                      width='100px'
                      onClick={() => {
                        setImage(i);
                      }}
                    />
                  </div>
                ))}
              </div>
            </Col>

            <Col md={6}>
              <Row>
                <div className="productDetails_details">
                  <h2>{product.name}</h2>
                  <strong>{product.brand}</strong>
                  <h4>£{price}</h4>
                  <p>{product.description}</p>
                  <Row className="selection">
                    <Col md={3}>Select size:</Col>
                    <Col md={5}>
                      <Form.Control className="option" as="select">
                        {product.size.map((size) => (
                          <option key={size} value={size}>
                            UK {size}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                  <Row className="selection">
                    <Col md={3}>Quantity:</Col>
                    <Col md={5}>
                      <Form.Control
                        className="option"
                        as="select"
                        value={product.qty}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                  <Button disabled={product.countInStock === 0}>
                    add to basket
                  </Button>
                  <Col>
                    Can't see your size -{" "}
                    <Link to="/contact_us">contact us</Link> we may be able to
                    order them for you
                  </Col>
                </div>
              </Row>
            </Col>
          </div>
          <strong>Additional information:</strong>
          <p>Textile information, measurements, etc goes hear.</p>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
