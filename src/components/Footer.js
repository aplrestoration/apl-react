import React from "react";
import "../index.css";
import icon1 from "../assets/icon/footer/1.png";
import icon2 from "../assets/icon/footer/2.png";
import icon3 from "../assets/icon/footer/3.png";
import icon4 from "../assets/icon/footer/4.png";
import icon5 from "../assets/icon/footer/5.png";
import mobIcon1 from "../assets/icon/footer/footer-mob-icon1.png";
import mobIcon2 from "../assets/icon/footer/footer-mob-icon2.png";
import mobIcon3 from "../assets/icon/footer/footer-mob-icon3.png";
import mobIcon4 from "../assets/icon/footer/footer-mob-icon4.png";
import smallIcon1 from "../assets/icon/footer/icon-1.png";
import smallIcon2 from "../assets/icon/footer/icon-2.png";
import smallIcon3 from "../assets/icon/footer/icon-3.png";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="container py-3">
          <div className="row">
            {/* <div className="col-12 col-md-3 footer-title-mobile">
              <span className="footer-title">APL Restoration Ltd</span>
            </div> */}
            <div className="col-3 col-md-3">
              <Image
                src={icon1}
                alt="emergency restoration company"
                className="img-fluid logo-partners d-none d-sm-block"
              ></Image>
              <Image
                src={mobIcon4}
                alt="emergency restoration company"
                className="img-fluid  d-block d-sm-none"
              ></Image>
            </div>
            <div className="col-3 col-md-3">
              <Image
                src={icon2}
                alt="emergency restoration company"
                className="img-fluid logo-partners d-none d-sm-block"
              ></Image>
              <Image
                src={mobIcon1}
                alt="emergency restoration company vancouver"
                className="img-fluid  d-block d-sm-none"
              ></Image>
            </div>
            <div className="col-3 col-md-3">
              <Image
                src={icon3}
                alt="emergency restoration company vancouver"
                className="img-fluid logo-partners d-none d-sm-block"
              ></Image>
              <Image
                src={mobIcon2}
                alt="water damage restoration company vancouver"
                className="img-fluid  d-block d-sm-none"
              ></Image>
            </div>
            <div className="col-3 col-md-3">
              <Image
                src={icon4}
                alt="drywall repair vancouver"
                className="img-fluid logo-partners d-none d-sm-block"
              ></Image>
              <Image
                src={mobIcon3}
                className="img-fluid  d-block d-sm-none"
              ></Image>
            </div>
            <div className="col-4 col-md-4 offset-4 offset-sm-4" style={{display: 'flex', justifyContent: 'center'}}>
              <Image
                style={{maxHeight: 150}}
                src={icon5}
                alt="drywall services vancouver"
                className="img-fluid logo-partners d-none d-sm-block"
              ></Image>
              <Image
                src={icon5}
                style={{maxHeight: 90}}
                className="img-fluid  d-block d-sm-none"
              ></Image>
            </div>
          </div>
        </div>
        <hr className="solid-divider" />
        <div className="container">
          <div className="row footer-row">
            <div className="col-lg-3 footer-col">
              <h3 className="fw-bold my-3 mobile-title">Contact</h3>
              <ul className="list-unstyled footer-contact-text">
                <li style={{ paddingBottom: "20px" }}>
                  <Image src={smallIcon1} className="footer-icon"></Image>
                  <span>&nbsp;&nbsp;1-833-7GOT-FLOOD?</span>
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1-833-746-8356???
                  </span>
                </li>
                <li style={{ paddingBottom: "20px" }}>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;604.446.2773
                  </span>
                </li>
                <li style={{ paddingBottom: "20px" }}>
                  <Image src={smallIcon2} className="footer-icon"></Image>
                  <span>&nbsp;&nbsp;Info@aplrestoration.ca</span>
                </li>
                <li>
                  <Image src={smallIcon3} className="footer-icon"></Image>
                  <span>
                    &nbsp;&nbsp;190-2912 W Broadway,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vancouver, BC V6K 0E9
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 d-none d-md-block">
              <h3 className="fw-bold my-3">Renovation</h3>
              <ul className="list-unstyled footer-text">
                <a
                  href="/drywall-service"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Drywall Repairs and Installation</li>
                </a>
                <a
                  href="/door-and-trimworks"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Door & Trims work</li>
                </a>
                <a
                  href="/floor-installation"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Floor Installation</li>
                </a>
                <a
                  href="/tiling"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Tiling</li>
                </a>
                <a
                  href="/bathroom-finishing"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Bathroom Renovations and Repairs</li>
                </a>
                <a
                  href="/basement-finishing"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Basement Finishing</li>
                </a>
                <a
                  href="/painting"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Painting</li>
                </a>
                <a
                  href="/demolition"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Demolition</li>
                </a>
              </ul>
            </div>
            <div className="col-lg-3 d-none d-md-block">
              <h3 className="fw-bold my-3">Restoration</h3>
              <ul className="list-unstyled footer-text">
                <a
                  href="/emergency-response"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Emergency Response</li>
                </a>
                <a
                  href="/water-and-flood"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Water & Flood</li>
                </a>
                <a
                  href="/biohazard-redemption"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Biohazard Redemption</li>
                </a>
                <a
                  href="/fire-and-smoke"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Fire & Flood</li>
                </a>
              </ul>
            </div>
            <div className="col-lg-3 d-none d-md-block">
              <h3 className="fw-bold my-3 mobile-title">More Info</h3>
              <ul className="list-unstyled footer-text">
                <a href="/about" style={{ textDecoration: "none", color: "white" }}>
                  <li>About us</li>
                </a>
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Service Property</li>
                </a>
                <a href="/" style={{ textDecoration: "none", color: "white" }}>
                  <li>Contact us</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <hr className="solid-divider" />
        <span className="footer-note">
          ?? 2022, APL Restoration Ltd. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
