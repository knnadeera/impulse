import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import productsList from "../data/productsList";
import Product from "./Product";
import "./SimilarProduct.css";

const SimilarProduct = ({ category }) => {
  const [similarProduct, setSimilarProduct] = useState(productsList);

  useEffect(() => {
    const updatedItems = productsList.filter((curItems) => {
      return curItems.category === category;
    });
    setSimilarProduct(updatedItems);
  }, [category]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1440 },
      items: 7,
    },
    largeDesktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 6,
    },
    desktopL: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 800, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 769, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div >
      <Row>
        <h4 className="similar">Similar Product</h4>
        <Carousel responsive={responsive}>
          {similarProduct.map((product) => (
            <Row key={product.id}>
              <Col>
                <Product product={product} />
              </Col>
            </Row>
          ))}
        </Carousel>
      </Row>
    </div>
  );
};

export default SimilarProduct;
