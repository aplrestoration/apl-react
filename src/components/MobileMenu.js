import React from "react";
import { Link } from "react-router-dom";

const defaultProps = {
  closeMenuMobile: () => {},
};

const MobileMenu = ({ closeMenuMobile }) => {
  return (
    <div className="mobile-menu d-lg-none">
      <div className="mobile-menu-card">
        <span className="mobile-menu-info">
          24/7 Emergency Toll-Free Number <br />
          1-833-7GOT-FlOOD（1-833-746-8356)
        </span>
        <hr className="solid-divider" />
        <h4>Service</h4>
        <div className="mobile-menu-box">
      <div className=" mobile-menu-list">
        <ul className="list-unstyled">
          <li className="nav-item">
            <Link to="/drywall-service" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
              Drywall Service
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/door-and-trimworks" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Door & Trim Works
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/floor-installation" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Floor Installation
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tiling" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Tiling
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/painting" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Painting
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/basement-finishing" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Basement Finishing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/demolition" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Demolition
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bathroom-finishing" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Bathroom Finishing
            </Link>
          </li>
        </ul>
      </div>
      <div className="list-unstyled mobile-menu-list">
        <ul className="list-unstyled">
          <li className="nav-item">
            <Link to="/emergency-response" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Emergency Responce
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/water-and-flood" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Water & Flood
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/biohazard-redemption" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Biohazard Redemption
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fire-and-smoke" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
            Fire & Smoke
            </Link>
          </li>
        </ul>
      </div>
    </div>
        <hr className="solid-divider" />
        <Link
          to="/who-we-serve"
          className="mobile-menu-title"
          onClick={() => closeMenuMobile(false)}
        >
          <span className="mobile-menu-title">Who We Served</span>
        </Link>

        <hr className="solid-divider" />
        <Link
          to="/where-we-serve"
          className="mobile-menu-title"
          onClick={() => closeMenuMobile(false)}
        >
          <span className="mobile-menu-title">Where We Served</span>
        </Link>

        <hr className="solid-divider" />
        <Link
          to="/about"
          className="mobile-menu-title"
          onClick={() => closeMenuMobile(false)}
        >
          <span>About Us</span>
        </Link>
        <hr className="solid-divider" />

        <Link
          to="/"
          className="mobile-menu-title"
          onClick={() => closeMenuMobile(false)}
        >
         <span className="mobile-menu-title">Home</span>
        </Link>
        
      </div>
    </div>
  );
};
MobileMenu.defaultProps = defaultProps;
export default MobileMenu;
