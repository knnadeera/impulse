import React from "react";
import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Impulse from "../assets/impulse.png";
import Framlingham from "../assets/Framlingham.png";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";

const NavBar = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/impulse">
            <Navbar.Brand className="logo">
              <Row>
                <img src={Impulse} alt="impulse" />
                <img src={Framlingham} alt="framlingham" />
              </Row>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav">
              <LinkContainer to="/impulse">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="womenswear">
                <Nav.Link>WOMENSWEAR</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Shoes">
                <LinkContainer to="/shoes/heels">
                  <NavDropdown.Item>HEELS</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shoes/sandals">
                  <NavDropdown.Item>SANDALS</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/accessories">
                <Nav.Link>ACCESSORIES</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/styling_service">
                <Nav.Link>STYLING SERVICE</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact_us">
                <Nav.Link>CONTACT US</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user user"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart cart"></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
