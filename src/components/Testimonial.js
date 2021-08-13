import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";

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
      <div className="d-flex">
        <div className="card col-lg-4 col-md-6">
          <div className="card-body">
            <svg width="2em" height="2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.49 7.529a5.3 5.3 0 011.174-.131c3.128 0 5.663 2.716 5.663 6.065 0 3.35-2.535 6.066-5.663 6.066S0 16.814 0 13.463c0-.098.002-.197.007-.295H0C0 8.113 3.84 4 8.56 4v2.036c-1.531 0-2.943.558-4.07 1.493zm12.674 0c.378-.086.77-.131 1.172-.131 3.128 0 5.664 2.716 5.664 6.065 0 3.35-2.536 6.066-5.664 6.066-3.128 0-5.663-2.715-5.663-6.066 0-.098.002-.197.007-.295h-.007c0-5.055 3.84-9.168 8.56-9.168v2.036c-1.532 0-2.943.558-4.07 1.493z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h6>
              Their care included an effective mediation with the insurance
              company, which spared me from many headaches.{" "}
            </h6>
          </div>
          <div>
            <h3>Joel Saalfeld</h3>
            <p>This is for the stars</p>
          </div>
        </div>
        <div className="card col-lg-4 col-md-6">
          <div className="card-body">
            <svg width="2em" height="2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.49 7.529a5.3 5.3 0 011.174-.131c3.128 0 5.663 2.716 5.663 6.065 0 3.35-2.535 6.066-5.663 6.066S0 16.814 0 13.463c0-.098.002-.197.007-.295H0C0 8.113 3.84 4 8.56 4v2.036c-1.531 0-2.943.558-4.07 1.493zm12.674 0c.378-.086.77-.131 1.172-.131 3.128 0 5.664 2.716 5.664 6.065 0 3.35-2.536 6.066-5.664 6.066-3.128 0-5.663-2.715-5.663-6.066 0-.098.002-.197.007-.295h-.007c0-5.055 3.84-9.168 8.56-9.168v2.036c-1.532 0-2.943.558-4.07 1.493z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h6>
              Their care included an effective mediation with the insurance
              company, which spared me from many headaches.{" "}
            </h6>
          </div>
          <div>
            <h3>Joel Saalfeld</h3>
            <p>This is for the stars</p>
          </div>
        </div>
        <div className="card col-lg-4 col-md-6">
          <div className="card-body">
            <svg width="2em" height="2em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.49 7.529a5.3 5.3 0 011.174-.131c3.128 0 5.663 2.716 5.663 6.065 0 3.35-2.535 6.066-5.663 6.066S0 16.814 0 13.463c0-.098.002-.197.007-.295H0C0 8.113 3.84 4 8.56 4v2.036c-1.531 0-2.943.558-4.07 1.493zm12.674 0c.378-.086.77-.131 1.172-.131 3.128 0 5.664 2.716 5.664 6.065 0 3.35-2.536 6.066-5.664 6.066-3.128 0-5.663-2.715-5.663-6.066 0-.098.002-.197.007-.295h-.007c0-5.055 3.84-9.168 8.56-9.168v2.036c-1.532 0-2.943.558-4.07 1.493z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <h6>
              Their care included an effective mediation with the insurance
              company, which spared me from many headaches.{" "}
            </h6>
          </div>
          <div>
            <h3>Joel Saalfeld</h3>
            <p>This is for the stars</p>
          </div>
        </div>
      </div>
    </Container>   
    </div>
    
  );
};

export default Testimonial;
