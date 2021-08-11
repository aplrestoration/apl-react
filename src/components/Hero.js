import React from "react";
import { Button } from "react-bootstrap";
import "../index.css";

const Hero = () => {
  return (
    <div className="hero-container position-relative text-center">
      <h1 className="hero-title">RESTORATION & RENOVATION</h1>
      <Button className="custom-button-react hero-button rounded-0 px-5 py-3 fw-bold">Get a free quote</Button>
      <h2 className="hero-block-text">
        Flood, Fire, Emergency? We’re here to help you restore and renovate, any
        time, day or night.
      </h2>
    </div>
  );
};

export default Hero;
