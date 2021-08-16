import React from "react";
import { Link } from "react-router-dom";


const WebMenu = () => {
  return (
    <div className="web-menu-container">
      <div className="web-menu-box">
        <div className="web-menu-list">
            <h4>Restoration</h4>
            <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
                Drywall Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
                Drywall Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
                Drywall Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
                Drywall Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="web-menu-list">
            <h4>Rennovation</h4>
          <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
                Drywall Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
                Drywall Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
                Drywall Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
                Drywall Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebMenu;
