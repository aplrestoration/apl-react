import React from "react";
import bg from "../assets/bg/page-hero/renovation-header-basement.jpg"
import GalleryNav from "../components/GalleryNav";

const BasementFinishing = () => {
  return (
    <div className="page-container">
    <div className="container-fluid d-flex flex-column justify-content-end page-hero"
    style={{ backgroundImage: `url(${bg})` }}>
      <div className="page-text-container">
          <h1 className="page-title">Basement Finishing</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          Are you looking to build out your dream basement? Our team at <a href="https://www.aplrestoration.ca/"><strong>APL Restoration Ltd</strong></a> can help, we offer professional basement finishing
          services to homeowners in Greater Vancouver. Our experts take the
          guesswork out of basement finishingby planning the work and sticking
          to the plan. <a href="https://www.aplrestoration.ca/contact"><strong>Contact</strong></a> our experts today to get started on your basement
          finishing project.
        </p>
        <span className="big-title-2">Steps to Finishing Your Basement:</span><br /><br />
        <ul className="page-li">
          <li>Insulation Installation</li>
          <li>Framing Walls</li>
          <li>Drywall Installation</li>
          <li>Drywall Finishing</li>
          <li>Wall painting</li>
          <li>Trim work</li>
          <li>Subflooring and Flooring Installation</li>
          <li>Basement Ceiling Finish</li>
        </ul>
      </div>
      <GalleryNav />
    </div>
  );
};

export default BasementFinishing;
