import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import benjamin_moore from '../assets/benjamin_moore.png';


const Logo = () => {
  return (
    <Container>
        <Row>
            <Col xs={6} md={2} >
                <Image src={benjamin_moore}></Image>
            </Col>
            <Col xs={6} md={2} >
                <Image src={benjamin_moore}></Image>
            </Col>
            <Col xs={6} md={2} >
                <Image src={benjamin_moore}></Image>
            </Col>
            <Col xs={6} md={2} >
                <Image src={benjamin_moore}></Image>
            </Col>
            <Col xs={6} md={2} >
                <Image src={benjamin_moore}></Image>
            </Col>
            <Col xs={6} md={2} >
                <Image src={benjamin_moore}></Image>
            </Col>
        </Row>
    </Container>
  );
};

export default Logo;
