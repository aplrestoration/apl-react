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
          <h2 className="pb-2 big-title-2">WHO DO WE SERVE</h2>
          <Link to="/who-we-serve" className="icon-link">
            <h4 className="fw-bold view-all">VIEW ALL</h4>
          </Link>
        </div>

        <div className="row g-2 pt-1 row-cols-1 row-cols-lg-3">
          <div className="col wws-mobile-column">
            <div>
              <Image src={icon1} className="icon-whoWeServed"></Image>
            </div>
            <div>
              <h3 className="fw-bold pt-2 wws-mobile-title">
                Residential Property
              </h3>
              <ul className="list-unstyled wws-text">
                <li>Residential Building Manager</li>
                <li>House Owners</li>
                <li>Condo Owners</li>
                <li>Tennants</li>
              </ul>
            </div>
          </div>
          <div className="wws-mobile-column col">
            <div className="feature-icon">
              <Image src={icon2} className="icon-whoWeServed"></Image>
            </div>
            <div>
              <h3 className="fw-bold pt-2 wws-mobile-title">
                Commercial Property
              </h3>
              <ul className="list-unstyled wws-text">
                <li>Commercial Property Owner</li>
                <li>Commercial Property Manager</li>
                <li>Business Owners Leasing Space</li>
                <li>Hospitality Sector</li>
              </ul>
            </div>
          </div>
          <div className="wws-mobile-column col">
            <div className="feature-icon">
              <Image src={icon3} className="icon-whoWeServed"></Image>
            </div>
            <div>
              <h3 className="fw-bold pt-2 wws-mobile-title">
                Insurance Professionals
              </h3>
              <ul className="list-unstyled wws-text">
                <li>Brokers</li>
                <li>Adjusters</li>
                <li>Independent Adjusters</li>
                <li>Claims Managers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServed;
