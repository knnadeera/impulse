import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Container className="pz-1 pt-1 header">
        <Row>
          <Col md={3}>
            <p>
              <i className="fa-solid fa-phone phone small"></i>
              {"  "}
              01728 720184
            </p>
          </Col>
          <Col md={4}>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:hello@implusefaction.co.uk">
              {" "}
              hello@implusefaction.co.uk
            </a>
          </Col>
          <Col>
              <i className="fa-solid fa-location-dot"></i>
              {' '}3-4 Market Hill, Framlingham, Woodbridge IP139AN
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
