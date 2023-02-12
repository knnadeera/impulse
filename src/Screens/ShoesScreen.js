import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Components/Product";
import productsList from "../data/productsList";
import heelsBanner from "../assets/heelsBanner.png";
import sandalsBanner from "../assets/sandalsBanner.jpg";

const ShoesScreen = ({ location }) => {
  const [items, setItems] = useState(productsList);
  const [banner, setBanner] = useState();

  const category = location.pathname
    ? String(location.pathname.split("shoes/")[1])
    : "";

  useEffect(() => {
    if (category === "sandals") {
      const updatedItems = productsList.filter((curItems) => {
        return curItems.category === category;
      });
      setItems(updatedItems);
      setBanner(sandalsBanner);
    } else if (category === "heels") {
      const updatedItems = productsList.filter((curItems) => {
        return curItems.category === category;
      });
      setItems(updatedItems);
      setBanner(heelsBanner);
    }
  }, [category]);

  return (
    <div className="shoesScreen">
      <img src={banner} width='100%' alt='banner' />
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Row>
          {items.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShoesScreen;
