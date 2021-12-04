import React from "react";
import "../index.css";

const Hero = () => {
  return (
    <div className="container-fluid hero-container position-relative text-center">
      <h1 className="hero-title">RESTORATIONS & RENOVATIONS</h1>
      <div type="button" className="custom-button-react hero-button btn-blue">
        <a
          href="tel:+16044462773"
          style={{ textDecoration: "none", color: "white" }}
        >
          Get a free quote
        </a>
      </div>
      <div className="hero-block-text">
        <span>
          Flood, Fire, Emergency? We’re here to help you restore and renovate,
          any time, day or night.
        </span>
      </div>
    </div>
  );
};

export default Hero;
