import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const WhoWeServed = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <div className="d-inline-flex flex-row align-items-baseline">
        <h2 className="pb-2 big-title-2">Who do we served</h2>
        <Link to="#" className="icon-link">
          <p>VIEW ALL</p>
        </Link>
      </div>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon bg-primary bg-gradient">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h3>Residential Property</h3>
          <ul className="list-unstyled nav-item">
            <li>Residential Building Manager</li>
            <li>House Owners</li>
            <li>Condo Ownders</li>
            <li>Tennants</li>
          </ul>
        </div>
        <div className="feature col">
          <div className="feature-icon bg-primary bg-gradient">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#people-circle" />
            </svg>
          </div>
          <h3>Commercial Property</h3>
          <ul className="list-unstyled nav-item">
            <li>Commercial Property Owner</li>
            <li>Commercial Property Manager</li>
            <li>Business Owners Leasing Space</li>
            <li>Hospitality Sector</li>
          </ul>
        </div>
        <div className="feature col">
          <div className="feature-icon bg-primary bg-gradient">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2" />
            </svg>
          </div>
          <h3>Insurance Professionals</h3>
          <ul className="list-unstyled nav-item">
            <li>Brokers</li>
            <li>Adjusters</li>
            <li>Idependent Adjusters</li>
            <li>Claims Managers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServed;
