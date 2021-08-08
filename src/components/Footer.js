import React from "react";
import "../index.css";
import benjamin_moore from "../assets/benjamin_moore.png";
import { Row, Col, Image, Container } from "react-bootstrap";


const Footer = () => {
  return (
    <div>
      {/*Other information*/}
      <Container className="container my-3">
        <Row className="row">
          <Col xs={6} md={3}>
            <Image src={benjamin_moore}></Image>
          </Col>
          <Col xs={6} md={3}>
            <Image src={benjamin_moore}></Image>
          </Col>
          <Col xs={6} md={3}>
            <Image src={benjamin_moore}></Image>
          </Col>
          <Col xs={6} md={3}>
            <Image src={benjamin_moore}></Image>
          </Col>
        </Row>
      </Container>
      {/*Contact*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-3">Contact</h1>
            <ul className="list-unstyled nav-item">
              <li>1-833-7GOT-FLOOD (1-833-746-8356）</li>
              <li>Info@aplrestoration.ca</li>
              <li>PO Box 45006 Dunbar, Vancouver, BC V682M8</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h1 className="my-3">Contact</h1>
            <ul className="list-unstyled nav-item">
              <li>1-833-7GOT-FLOOD (1-833-746-8356）</li>
              <li>Info@aplrestoration.ca</li>
              <li>PO Box 45006 Dunbar, Vancouver, BC V682M8</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h1 className="my-3">Contact</h1>
            <ul className="list-unstyled nav-item">
              <li>1-833-7GOT-FLOOD (1-833-746-8356）</li>
              <li>Info@aplrestoration.ca</li>
              <li>PO Box 45006 Dunbar, Vancouver, BC V682M8</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h1 className="my-3">Contact</h1>
            <ul className="list-unstyled nav-item">
              <li>1-833-7GOT-FLOOD (1-833-746-8356）</li>
              <li>Info@aplrestoration.ca</li>
              <li>PO Box 45006 Dunbar, Vancouver, BC V682M8</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
