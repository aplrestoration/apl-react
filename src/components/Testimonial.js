import React from "react";
import "../index.css";
import CarouselBS from "./CarouselBS";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div>
      <div className="mb-5">
        <div className="testimonial-intro">
          <h2 className="big-title-2">WHAT OUR CUSTOMER HAVE TO SAY</h2>
          <h6 className="pt-2">5 star trusted by all customers</h6>
          <div type="button" className="custom-button-react" style={{backgroundColor:'black'}}>
            SEE ALL 50+ GOOGLE REVIEW
          </div>
        </div>
      </div>
      <CarouselBS />
    </div>   
    </div>
    
  );
};

export default Testimonial;
