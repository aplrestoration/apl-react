import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import icon1 from "../assets/icon/whoWeServed/1.png";
import icon2 from "../assets/icon/whoWeServed/2.png";
import icon3 from "../assets/icon/whoWeServed/3.png";
import { Image } from "react-bootstrap";

const WhoWeServed = () => {
  return (
    <div className="bg-whoWeServed">
      <div className="container px-4 py-5" id="featured-3">
        <div className="d-inline-flex flex-row align-items-baseline">
          <h2 className="pb-2 big-title-2">WHO DO WE SERVED</h2>
          <Link to="#" className="icon-link">
            <h4 className="fw-bold">VIEW ALL</h4>
          </Link>
        </div>

        <div className="row g-4 pt-3 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon">
              <Image src={icon1} className="icon-whoWeServed"></Image>
            </div>
            <h3 className="fw-bold pt-4">Residential Property</h3>
            <ul className="list-unstyled">
              <h5>Residential Building Manager</h5>
              <h5>House Owners</h5>
              <h5>Condo Ownders</h5>
              <h5>Tennants</h5>
            </ul>
          </div>
          <div className="feature col">
            <div className="feature-icon">
              <Image src={icon2} className="icon-whoWeServed"></Image>
            </div>
            <h3 className="fw-bold pt-4">Commercial Property</h3>
            <ul className="list-unstyled">
              <h5>Commercial Property Owner</h5>
              <h5>Commercial Property Manager</h5>
              <h5>Business Owners Leasing Space</h5>
              <h5>Hospitality Sector</h5>
            </ul>
          </div>
          <div className="feature col">
            <div className="feature-icon">
              <Image src={icon3} className="icon-whoWeServed"></Image>
            </div>
            <h3 className="fw-bold pt-4">Insurance Professionals</h3>
            <ul className="list-unstyled">
              <h5>Brokers</h5>
              <h5>Adjusters</h5>
              <h5>Idependent Adjusters</h5>
              <h5>Claims Managers</h5>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServed;
