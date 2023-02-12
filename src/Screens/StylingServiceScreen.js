import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import "./StylingServiceScreen.css";

const StylingServiceScreen = () => {
  return (
    <div>
      <div className="stylingService_banner">
        <h1 className="stylingService_title">Styling Service</h1>
      </div>

      <Container className="stylingService">
        <h1 className="stylingService_h1">
          Attending a special event and want to look drop dead gorgeous?
        </h1>
        <h3 className="stylingService_h3">
          Why not try our Personal Shopping Experience?
        </h3>
        <h5 className="stylingService_h4">
          Ask Amy to assist you to style an outfit for your special occasion.
          She will provide expert guidance to make sure you have an outfit that
          makes a lasting impression!
        </h5>
      </Container>
      <div className="stylingService_banner2">
        <Container className="stylingService_icons">
          <Col md={4} className="stylingService_i">
            <i className="fa-sharp fa-solid fa-ticket-simple"></i>
            <h2 style={{ color: "white", textTransform: "uppercase" }}>
              Only £10 stylist fee
            </h2>
            <h5 style={{ color: "white", width: "80%" }}>
              Our styling service is not expensive. Only £10 per person for an
              hour. Come alone or as a group.
            </h5>
          </Col>
          <Col md={4} className="stylingService_i">
            <i className="fa-solid fa-wine-glass"></i>
            <h2 style={{ color: "white", textTransform: "uppercase" }}>
              Have a styling party!
            </h2>
            <h5 style={{ color: "white", width: "80%" }}>
              Shopping with friends can be so much fun! Bring a group of your
              mates, drink some wine and make a night of it!
            </h5>
          </Col>
          <Col md={4} className="stylingService_i">
            <i className="fa-solid fa-heart"></i>
            <h2 style={{ color: "white", textTransform: "uppercase" }}>
              Look great, Feel great!
            </h2>
            <h5 style={{ color: "white", width: "85%" }}>
              Enjoy the personal touch with an honest opinion and go away with
              an outfit you look and feel great in.
            </h5>
          </Col>
        </Container>
      </div>
      <div className="stylingService">
        <h1 className="stylingService_h1">Interested?</h1>
        <h4 className="stylingService_h3">Enquire here</h4>
        <h5>
          Simply fill a few details below and we will call you back to arrange a
          date:
        </h5>
        <Form className="stylingService_form">
          <Form.Group className="stylingService_form_group">
            <Col md={3}>
              <Form.Label htmlFor="name">NAME:</Form.Label>
            </Col>
            <Form.Control
              type="text"
              className="stylingService_form_input"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="stylingService_form_group">
            <Col md={3}>
              <Form.Label htmlFor="Phone">PHONE:</Form.Label>
            </Col>
            <Form.Control
              type="number"
              className="stylingService_form_input"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="stylingService_form_group">
            <Col md={3}>
              <Form.Label htmlFor="email">EMAIL</Form.Label>
            </Col>
            <Form.Control
              type="email"
              className="stylingService_form_input"
            ></Form.Control>
          </Form.Group>
          <Button className="stylingService_form_btn">send</Button>
        </Form>
      </div>
    </div>
  );
};

export default StylingServiceScreen;
