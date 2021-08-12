import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-nav-container">
        {/* Site Logo  */}
        <div className="header-nav-logo d-flex justify-content-between">
          <Link to="/" className="text-dark text-decoration-none">
            <h3 className="site-logo">APL restoration</h3>
          </Link>
          <span className="header-nav-info d-none d-xl-block">
            24/7 Emergency Toll-Free Number <br />
            1-833-7GOT-FlOOD（1-833-746-8356)
          </span>
        </div>

        {/* Desktop Navigation  */}
        <div className="header-nav">
          <ul className="nav d-none d-lg-flex">
            <li className="nav-item dropdown">
              <Link to="/" className="nav-link active" aria-current="page">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link nav-custom">
                Who We Serve
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link nav-custom">
                Where We Serve
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link nav-custom">
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Nav Menu */}
        <div className="header-nav-menu d-lg-none">
          <Link to="/">
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Panel  */}
      <div className="mobile-menu d-lg-none">
        <div className="mobile-menu-card">
            <p>Test: This is mobile menu </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
