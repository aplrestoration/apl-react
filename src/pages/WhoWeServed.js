import React from "react";
import bg from "../assets/bg/who-we-serve-bg.jpg";
import icon1 from "../assets/icon/whoWeServed/1.png";
import icon2 from "../assets/icon/whoWeServed/2.png";
import icon3 from "../assets/icon/whoWeServed/3.png";
import { Image } from "react-bootstrap";
import Layout from "../components/Layout";

const WhoWeServed = () => {
  return (
    <Layout>
    <div className="page-container">
      <div
        className="container-fluid d-flex flex-column justify-content-end page-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="page-text-container">
          <h1 className="page-title" style={{ color: "white" }}>
            Who We Serve
          </h1>
        </div>
      </div>

      <div className="page-text-container">
        <h2 className="fw-bold">KEY INDUSTRIES SERVED</h2>
        <p>
          At <a href="https://www.aplrestoration.ca/">APL</a>, we’re skilled team with experience of handle renovation and
          restoration of all kinds. Whether the damage be to residential,
          commercial, industrial property, we will assemble the right team both
          internally and externally to respond quickly and help get things back
          to normal, without unnecessary cost or complexity.
        </p>
        <h2 className="fw-bold pb-3">
          We have proven restoration expertise with the following property
          groups:
        </h2>
      </div>

      <div className="bg-whoWeServed">
        <div className="container px-4 py-3" id="featured-3">
          <div className="row g-4 pt-3 row-cols-1 row-cols-lg-3">
            <div className="col wws-mobile-column">
              <div>
                <Image src={icon1} className="icon-whoWeServed"></Image>
              </div>
              <div>
                <h3 className="fw-bold pt-2 wws-mobile-title">
                  Residential Property
                </h3>
                <p>
                  We restore property damage to homes and strata or condominium
                  units of every kind.
                </p>
                <ul className="page-li">
                  <li>Home Owners</li>
                  <li>Condo & Townhouse Owners</li>
                  <li>Tenants</li>
                  <li>COMMERCIAL PROPERTY</li>
                  <li>
                    Our teams restore all types of workplaces and public spaces,
                    safely and efficiently.
                  </li>
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
                <p>
                  Our teams restore all types of workplaces and public spaces,
                  safely and efficiently.
                </p>
                <ul className="page-li">
                  <li>Commercial Property Owners & Managers</li>
                  <li>
                    Business Owners Leasing Space Property / Facility / Risk
                    Managers
                  </li>
                  <li>Hospitality Sector</li>
                  <li>Public Sector</li>
                  <li>Government</li>
                  <li>Educational</li>
                  <li>Hospitals and Healthcare</li>
                  <li>Seniors Care Facilities / Daycares</li>
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
                <p>
                  On residential and commercial restoration, we work closely
                  with insurance professionals.
                </p>
                <ul className="page-li">
                  <li>Brokers</li>
                  <li>Adjusters</li>
                  <li>Independent Adjusters</li>
                  <li>Claims Managers</li>
                  <li>Risk Managers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default WhoWeServed;
