import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import paypalIcon from "../assets/paypal-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Row className="footer">
        <Col md={3}>
          <h4 className="footer_h4">Contact</h4>
          <p>
            <i className="fa-solid fa-phone phone"></i>
            {"  "}
            01728 720184
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:hello@implusefaction.co.uk" className="mail">
              {" "}
              hello@implusefaction.co.uk
            </a>
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> 3-4 Market Hill,
            Framlingham, Woodbridge IP139AN
          </p>
        </Col>
        <Col md={3}>
          <Row>
            <h4 className="footer_h4">Useful links</h4>
            <Link to="/profile">My Account</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="refunds&returns">Refunds and Returns</Link>
            <Link to="terms&conditions">Terms & Conditions</Link>
            <Link to="privacypolicy">Privacy Policy</Link>
          </Row>
        </Col>
        <Col md={3}>
          <Row>
            <h4 className="footer_h4">Secure shopping</h4>
            <p>
              Secure payment on all major cards.
              <br />
              No Paypal account required.
            </p>
            <img src={paypalIcon} alt="paypalIcon" className="paypal_icons" />
          </Row>
        </Col>
        <Col md={3}>
          <Row>
            <h4 className="footer_h4">Follow us</h4>
          </Row>
          <div>
            <i className="fa-brands fa-facebook-f icons"></i>
            <i className="fa-brands fa-twitter icons"></i>
            <i className="fa-brands fa-linkedin-in icons"></i>
            <i className="fa-solid fa-rss icons"></i>
          </div>
        </Col>
      </Row>
      <p className="copyrights">&copy; All rights reserved.Company 12345678</p>
    </>
  );
};

export default Footer;
