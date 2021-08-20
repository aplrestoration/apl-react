import React from "react";
import "../index.css";
import icon1 from "../assets/icon/footer/1.png";
import icon2 from "../assets/icon/footer/2.png";
import icon3 from "../assets/icon/footer/3.png";
import icon4 from "../assets/icon/footer/4.png";
import { Row, Col, Image, Container } from "react-bootstrap";


const Footer = () => {
  return (
    <div className="footer">
      <Container className="container my-3">
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

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="fw-bold my-3">Contact</h1>
            <ul className="list-unstyled nav-item">
              <h5>1-833-7GOT-FLOOD (1-833-746-8356）</h5>
              <h5>Info@aplrestoration.ca</h5>
              <h5>PO Box 45006 Dunbar, Vancouver, BC V682M8</h5>
            </ul>
          </div>
          <div className="col-lg-3">
            <h1 className="fw-bold my-3">Renovation</h1>
            <ul className="list-unstyled nav-item">
              <h5>1-833-7GOT-FLOOD (1-833-746-8356）</h5>
              <h5>Info@aplrestoration.ca</h5>
              <h5>PO Box 45006 Dunbar, Vancouver, BC V682M8</h5>
            </ul>
          </div>
          <div className="col-lg-3">
            <h1 className="fw-bold my-3">Restoration</h1>
            <ul className="list-unstyled nav-item">
              <h5>1-833-7GOT-FLOOD (1-833-746-8356）</h5>
              <h5>Info@aplrestoration.ca</h5>
              <h5>PO Box 45006 Dunbar, Vancouver, BC V682M8</h5>
            </ul>
          </div>
          <div className="col-lg-3">
            <h1 className="fw-bold my-3">More Info</h1>
            <ul className="list-unstyled nav-item">
              <h5>1-833-7GOT-FLOOD (1-833-746-8356）</h5>
              <h5>Info@aplrestoration.ca</h5>
              <h5>PO Box 45006 Dunbar, Vancouver, BC V682M8</h5>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
