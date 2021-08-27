import React from "react";
import { Link } from "react-router-dom";


const WebMenu = () => {
  return (
    <div className="web-menu-container">
      <div className="web-menu-box">
        <div className="web-menu-list">
            <div className="web-menu-title">Restoration</div>
            <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Emergency Responce
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/water-and-flood" className="mobile-nav-link">
              Water & Flood
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Biohazard Redemption
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Fire & Smoke
              </Link>
            </li>
          </ul>
        </div>

        <div className="web-menu-list">
            <div className="web-menu-title">Rennovation</div>
          <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Drywall Repairs & Installation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Door & Trim Works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Floor Installation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Tiling
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Painting
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Basement Finishing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Demolition
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="mobile-nav-link">
              Bathroom Finishing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebMenu;
