import React from "react";
import { Link } from "react-router-dom";
import MobileMenuService from "./MobileMenuService";

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
        <MobileMenuService />
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
