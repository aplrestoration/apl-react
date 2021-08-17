import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import logo1 from '../assets/logo/1.png';
import logo2 from '../assets/logo/2.png';
import logo3 from '../assets/logo/3.png';
import logo4 from '../assets/logo/4.png';
import logo5 from '../assets/logo/5.png';
import logo6 from '../assets/logo/6.png';


const Logo = () => {
  return (
    <Container>
        <Row>
            <Col xs={1} md={2} >
                <Image src={logo1} className="logo-partners"></Image>
            </Col>
            <Col xs={1} md={2} >
                <Image src={logo2} className="logo-partners"></Image>
            </Col>
            <Col xs={1} md={2} >
                <Image src={logo3} className="logo-partners"></Image>
            </Col>
            <Col xs={1} md={2} >
                <Image src={logo4} className="logo-partners"></Image>
            </Col>
            <Col xs={1} md={2} >
                <Image src={logo5} className="logo-partners"></Image>
            </Col>
            <Col xs={1} md={2} >
                <Image src={logo6} className="logo-partners"></Image>
            </Col>
        </Row>
    </Container>
  );
};

export default Logo;
