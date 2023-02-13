import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  const [image, setImage] = useState(product.image[0]);
  const [size, setSize] = useState();
  const [qty, setQty] = useState(1);
  const price = product.price.toFixed(2);

  console.log(size);
  console.log(qty);
  const addToCartHandler = () => {};

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
                      width="100px"
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
                      <Form.Control
                        className="option"
                        as="select"
                        value={size || ""}
                        onChange={(e) => {
                          setSize(e.target.value);
                        }}
                      >
                        {product.size.length !== 0 ? (
                          <>
                            <option disabled value="">
                              Select Size
                            </option>
                            {product.size.map((size) => (
                              <option key={size} value={size}>
                                UK {size}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option disabled value="">
                            No sizes available
                          </option>
                        )}
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
                        onChange={(e) => {
                          setQty(e.target.value);
                        }}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                  <Button
                  className="mt-2"
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    add to basket
                  </Button>
                  <Col className="mt-3">
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
