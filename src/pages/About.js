import React from "react";
import bg from "../assets/bg/about-bg.jpeg";

const About = () => {
  return (
    <div className="page-container">
      <div
        className="container-fluid d-flex flex-column justify-content-end page-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="page-text-container">
          <h1 className="page-title">About Us</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          The management team of APL Restoration has over 20 years’ experience
          in helping people who have experienced a flood, or sewer back up. We
          also have extensive experience with the insurance industry and we are
          familiar with their different requirements. This knowledge often makes
          all the difference in a claim proceeding smoothly.
        </p>
        <p>
          At APL Restoration we make use of the latest technology. We use an IR
          Camera that allows us to see through walls and floors to check for the
          source of leaks and water damage. This is just one way in which we use
          technology to address water problems. We also work with an extensive
          team of plumbers, drain professionals, flood technicians, and other
          important types of skilled tradesmen.
        </p>
        <br />
        <h1 className="fw-bold">24 Hour Emergency Service:</h1>
        <ul className="page-li">
          <li>Free on-site inspection to help determine coverage</li>
          <li>Exceptional customer service</li>
          <li>Complete property restoration-Free estimates</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
