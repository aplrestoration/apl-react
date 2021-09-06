import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import WebMenu from "./WebMenu";


function Header() {
  const [showMobile, setMobile] = useState(false);
  const [showWeb, setWeb] = useState(false);

  return (
    <div>
      <div className="header-container">
        <div className="header-nav-container">
          <div className="d-flex align-items-center">
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
            {showWeb ? <WebMenu closeMenuWeb={setWeb}/> : null}
            <ul className="nav d-none d-lg-flex">
              <li>
                <button
                  className="nav-link"
                  style={{border: 'none', backgroundColor: 'white', color: 'black'}}
                  onClick={() => setWeb(!showWeb)}
                >
                  Service&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="9"
                    viewBox="0 0 13 9"
                    fill="none"
                  >
                    <path
                      d="M1 1L6.5 7L12 1"
                      stroke="black"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <Link to="/who-we-serve" className="nav-link">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link to="/where-we-serve" className="nav-link">
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
            onClick={() => setMobile(!showMobile)}
          >
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="23"
                viewBox="0 0 40 23"
                fill="none"
              >
                <rect y="20" width="40" height="3" fill="black" />
                <rect y="10" width="40" height="3" fill="black" />
                <rect width="40" height="3" fill="black" />
              </svg>
            </Link>
          </div>
        </div>
        <div></div>
      </div>

      {/* Mobile Navigation Panel  */}
      {showMobile ? <MobileMenu closeMenuMobile={setMobile}/> : null}
    </div>
  );
}

export default Header;
