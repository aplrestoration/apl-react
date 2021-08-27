import React from "react";
import { Link } from "react-router-dom";
const defaultProps = {
  closeMenuMobile: () => {},
};


const MobileMenuService = ({ closeMenuMobile }) => {
  return (
    <div className="mobile-menu-box">
      <div className=" mobile-menu-list">
        <ul className="list-unstyled">
          <li className="nav-item">
            <Link to="/" className="mobile-nav-link">
              Drywall Service
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
      <div className="list-unstyled mobile-menu-list">
        <ul className="list-unstyled">
          <li className="nav-item">
            <Link to="/" className="mobile-nav-link">
            Emergency Responce
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/water-and-flood" className="mobile-nav-link" onClick={() => closeMenuMobile(false)}>
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
    </div>
  );
};

MobileMenuService.defaultProps = defaultProps;
export default MobileMenuService;
