import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";
import CardSlider from "./CardSlider";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <Container>
      <div className="row mb-5">
        <div className="testimonial-intro col">
          <h2 className="big-title-2">WHAT OUR CUSTOMER HAVE TO SAY</h2>
          <h6>5 star Google review from all customers</h6>
          <button type="button" className="btn btn-dark">
            SEE ALL 50+ GOOGLE REVIEW
          </button>
        </div>
      </div>
      <CardSlider />
    </Container>   
    </div>
    
  );
};

export default Testimonial;
