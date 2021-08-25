import React from "react";
import { Container, Image } from "react-bootstrap";
import "../index.css";
import icon1 from "../assets/icon/marketing/1.png";
import icon2 from "../assets/icon/marketing/2.png";
import icon3 from "../assets/icon/marketing/3.png";

const Marketing = () => {
  return (
    <Container className="pt-5">
      <div className="d-flex flex-column flex-md-row justify-content-around align-items-center text-center pb-5">
        <div className="d-flex flex-column marketing-block pb-3">
          <Image src={icon1} className="img-fluid icon-marketing"></Image>
          <span className="marketing-title">5 stars</span>
          <span className="marketing-text">Average Rating</span>
        </div>
        <div className="d-flex flex-column marketing-block pb3">
          <Image src={icon2} className="img-fluid icon-marketing"></Image>
          <span className="marketing-title">570 projects</span>
          <span className="marketing-text">Successed</span>
        </div>
        <div className="d-flex flex-column marketing-block">
          <Image src={icon3} className="img-fluid icon-marketing"></Image>
          <span className="marketing-title">22 years</span>
          <span className="marketing-text">In Business</span>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center marketing-callout">
        <div className="d-flex flex-column align-items-center marketing-bg">
          <span className="callout-title">ready to fix your home</span>
          <span className="marketing-text">We're here to help, so you can rest assured.</span>
          <div type="button" className="custom-button-react rounded-0 fw-bold">
            Call for free quote
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Marketing;
