import React from "react";
import bg from "../assets/bg/page-hero/renovation-header-floor-installation.jpg"

const FloorInstallation = () => {
  return (
    <div className="page-container">
      <div className="container-fluid d-flex flex-column justify-content-end page-hero"
      style={{ backgroundImage: `url(${bg})` }}>
        <div className="page-text-container">
          <h1 className="page-title"> Floor Installation</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          APL Restoration Ltd has an extensive inventory of flooring options in
          all types, colors, shapes and sizes. Our flooring specialists will
          evaluate your needs and make a smart recommendation. Then our expert
          installers will get your new floor installed and looking great!
        </p>

        <p>Flooring types:</p>
        <ul className="page-li">
          <li>Hardwood Flooring</li>
          <li>Laminate Flooring</li>
          <li>Carpeting</li>
          <li>Natural Stone Tile</li>
          <li>Ceramic or Porcelain Tile Floors</li>
          <li>Vinyl or Linoleum Floor Installation</li>
        </ul>
      </div>
    </div>
  );
};

export default FloorInstallation;
