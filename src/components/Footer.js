import React from "react";
import "../index.css";
import icon1 from "../assets/icon/footer/1.png";
import icon2 from "../assets/icon/footer/2.png";
import icon3 from "../assets/icon/footer/3.png";
import icon4 from "../assets/icon/footer/4.png";
import smallIcon1 from "../assets/icon/footer/icon-1.png";
import smallIcon2 from "../assets/icon/footer/icon-2.png";
import smallIcon3 from "../assets/icon/footer/icon-3.png";
import { Row, Col, Image, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Container className="container py-3">
          <Row className="row">
            <Col xs={6} md={3}>
              <Image src={icon1} className="logo-partners"></Image>
            </Col>
            <Col xs={6} md={3}>
              <Image src={icon2} className="logo-partners"></Image>
            </Col>
            <Col xs={6} md={3}>
              <Image src={icon3} className="logo-partners"></Image>
            </Col>
            <Col xs={6} md={3}>
              <Image src={icon4} className="logo-partners"></Image>
            </Col>
          </Row>
        </Container>
        <hr className="solid-divider" />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="fw-bold my-3">Contact</h1>
              <ul className="list-unstyled footer-contact-text">
                <li style={{ paddingBottom: "20px" }}>
                  <Image src={smallIcon1} className="footer-icon"></Image>
                  <span>&nbsp;&nbsp;1-833-7GOT-FLOOD?</span><br/>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1-833-746-8356）</span>
                </li>
                <li style={{ paddingBottom: "20px" }}>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;604,446,2773</span>
                </li>
                <li style={{ paddingBottom: "20px" }}>
                  <Image src={smallIcon2} className="footer-icon"></Image>
                  <span>&nbsp;&nbsp;Info@aplrestoration.ca</span>
                </li>
                <li>
                  <Image src={smallIcon3} className="footer-icon"></Image>
                  <span>
                    &nbsp;&nbsp;PO Box 45006 Dunbar, Vancouver, BC V682M8
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h1 className="fw-bold my-3">Renovation</h1>
              <ul className="list-unstyled footer-text">
                <li>Drywall Repairs and Installation</li>
                <li>Door & Trims work</li>
                <li>Floor Installation</li>
                <li>Tiling</li>
                <li>Bathroom Renovations and Repairs</li>
                <li>Basement Finishing</li>
                <li>Painting</li>
                <li>Demolition</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h1 className="fw-bold my-3">Restoration</h1>
              <ul className="list-unstyled footer-text">
                <li>Emergency Response</li>
                <li>Water & Flood</li>
                <li>Biohazard Redemption</li>
                <li>Fire & Flood</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h1 className="fw-bold my-3">More Info</h1>
              <ul className="list-unstyled footer-text">
                <li>About us</li>
                <li>Service Property</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="solid-divider" />
        <span className="footer-note">
          © 2021, APL Restoration Ltd. All Rights Reserved.{" "}
        </span>
      </div>
    </div>
  );
};

export default Footer;
