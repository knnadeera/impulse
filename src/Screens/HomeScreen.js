import React from "react";
import { Col, Row } from "react-bootstrap";
import banner from "../assets/homeBanner.png";
import Product from "../Components/Product";
import productsList from "../data/productsList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeScreen.css";

const HomeScreen = () => {
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
    desktop: {
      breakpoint: { max: 1025, min: 769 },
      items: 4,
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

  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1025, min: 769 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 769, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <img src={banner} width="100%" alt="banner" />
      <Row>
        <h3 className="product">Latest Products</h3>
        <div className="carousel">
          <Carousel responsive={responsive}>
            {productsList.map((product) => (
              <Col key={product.id}>
                <Product product={product} />
              </Col>
            ))}
          </Carousel>
        </div>
        <h3 className="product">Latest Products</h3>
        <div className="carousel">
          <Carousel responsive={responsive1}>
            {productsList.map((product) => (
              <Col key={product.id}>
                <Product product={product} />
              </Col>
            ))}
          </Carousel>
        </div>
      </Row>
    </>
  );
};

export default HomeScreen;
