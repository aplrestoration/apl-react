import React from "react";
import "../index.css";
import bg1 from "../assets/bg/restoration/1.jpg";
import bg2 from "../assets/bg/restoration/2.jpg";
import bg3 from "../assets/bg/restoration/3.jpg";
import bg4 from "../assets/bg/restoration/4.jpg";
import { Link } from "react-router-dom";

const LargeGallery = () => {
  return (
    <div className="container px-4 pt-5">
      <h2 className="pb-2 big-title-2">RESTORATION SERVICES</h2>
      <div className="row row-cols-2 row-cols-lg-2 align-items-stretch gallery-spacing">
        <Link to="/emergency-response" style={{ textDecoration: "none" }}>
          <div className="col column-height">
            <div
              className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
              style={{ backgroundImage: `url(${bg1})` }}
            >
              <div className="d-flex align-items-end flex-row h-100 p-3 text-shadow-1">
                <h3 className="fw-bold card-title">Emergency Response</h3>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/water-and-flood" style={{ textDecoration: "none" }}>
          <div className="col column-height">
            <div
              className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
              style={{ backgroundImage: `url(${bg2})` }}
            >
              <div className="d-flex align-items-end flex-row h-100 p-3 text-shadow-1">
                <h3 className="fw-bold card-title">Water & Flood</h3>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/biohazard-redemption" style={{ textDecoration: "none" }}>
          <div className="col column-height">
            <div
              className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
              style={{ backgroundImage: `url(${bg3})` }}
            >
              <div className="d-flex align-items-end flex-row h-100 p-3 text-shadow-1">
                <h3 className="fw-bold card-title">Biohazard Redemption</h3>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/fire-and-smoke" style={{ textDecoration: "none" }}>
          <div className="col column-height">
            <div
              className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
              style={{ backgroundImage: `url(${bg4})` }}
            >
              <div className="d-flex align-items-end flex-row h-100 p-3 text-shadow-1">
                <h3 className="fw-bold card-title">Fire & Smoke</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LargeGallery;
