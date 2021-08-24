import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";


function Header() {
  const [showMobile, setShow] = useState(false);
  const [showWeb, setWeb] = useState(false);

  return (
    <div>
      <div className="header-container">
        <div className="header-nav-container">
          {/* Site Logo  */}
          <div className="header-nav-logo d-flex justify-content-between">
            <Link to="/" className="text-dark text-decoration-none">
              <h3 className="site-logo">APL restoration</h3>
            </Link>
            <span className="header-nav-info d-none d-xl-block">
              24/7 Emergency Toll-Free Number <br />
              1-833-7GOT-FLOOD?（1-833-746-8356) or 604.446.2773
            </span>
          </div>

          {/* Desktop Navigation  */}
          <div className="header-nav">
          {showWeb ? <WebMenu /> : null}
            <ul className="nav d-none d-lg-flex">
              <li>
                <Link to="/" className="nav-link"onClick={() => setWeb(!showWeb)}>
                  Service
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Where We Serve
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Hamburger Menu */}
          <div
            className="header-nav-menu d-lg-none"
            onClick={() => setShow(!showMobile)}
          >
            <Link to="/">
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </Link>
          </div>
        </div>
        <div>
        </div>
      </div>

      {/* Mobile Navigation Panel  */}
      {showMobile ? <MobileMenu /> : null}

    </div>
  );
}

export default Header;
