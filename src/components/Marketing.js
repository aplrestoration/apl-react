import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import "../index.css";
import icon1 from "../assets/icon/marketing/1.png";
import icon2 from "../assets/icon/marketing/2.png";
import icon3 from "../assets/icon/marketing/3.png";

const Marketing = () => {
  return (
    <Container className="pt-5">
      <div className="d-flex justify-content-around text-center pb-5">
        <div className="d-flex flex-column marketing-block">
          <Image src={icon1} className="icon-marketing"></Image>
          <span className="marketing-title">5 stars</span>
          <h6>Average Rating</h6>
        </div>
        <div className="d-flex flex-column marketing-block">
          <Image src={icon2} className="icon-marketing"></Image>
          <span className="marketing-title">570 projects</span>
          <h6>Successed</h6>
        </div>
        <div className="d-flex flex-column marketing-block">
          <Image src={icon3} className="icon-marketing"></Image>
          <span className="marketing-title">22 years</span>
          <h6>In Business</h6>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center marketing-callout">
        <div className="d-flex flex-column align-items-center  marketing-bg">
          <span className="callout-title">ready to fix your home</span>
          <span className="marketing-text">We're here to help, so you can rest assured.</span>
          <Button className="custom-button-react rounded-0 fw-bold mt-2 px-5 py-3">
            Call for free quote
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Marketing;
