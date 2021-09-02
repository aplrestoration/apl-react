import React from "react";
import "../index.css";
import bg from "../assets/bg/header-bg.jpg"

const Hero = () => {
  return (
    <div className="container-fluid hero-container position-relative text-center">
      <h1 className="hero-title">RESTORATIONS & RENOVATIONS</h1>
      <div type="button" className="custom-button-react hero-button">Get a free quote</div>
      <h2 className="hero-block-text">
        Flood, Fire, Emergency? We’re here to help you restore and renovate, any
        time, day or night.
      </h2>
    </div>
  );
};

export default Hero;
