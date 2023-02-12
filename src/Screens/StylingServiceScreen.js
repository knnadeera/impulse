import React from "react";
import { Container } from "react-bootstrap";
import banner from "../assets/stylingServiceBanner.png";
import banner2 from "../assets/stylingServiceBanner2.png";
import "./StylingServiceScreen.css";

const StylingServiceScreen = () => {
  return (
    <div>
      <Container className="stylingService_cont">
        <h1 className="stylingService_title">Styling Service</h1>
      </Container>
      <img
        src={banner}
        width="100%"
        alt="banner"
        className="stylingService_banner"
      />

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
      <img src={banner2} width="100%" alt="banner2" />
      <i class="fa-sharp fa-solid fa-ticket-simple"></i>
      <i class="fa-solid fa-wine-glass"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  );
};

export default StylingServiceScreen;
