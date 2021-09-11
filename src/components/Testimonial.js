import React from "react";
import "../index.css";
import CarouselBS from "./CarouselBS";
 
const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="container">
        <div className="testimonial-intro mb-5">
          <h2 className="big-title-2">WHAT OUR CUSTOMERS HAVE TO SAY</h2>
          <span className="pt-1 testimonial-text">
            5 star trusted by all customers
          </span>
          <div
            type="button"
            className="custom-button-react btn-black"
            style={{ backgroundColor: "black" }}
          >
            <a
              href="https://g.page/APL-Restoration?share"
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              SEE ALL 50+ GOOGLE REVIEW
            </a>
          </div>
        </div>

        <CarouselBS />
      </div>
    </div>
  );
};

export default Testimonial;
