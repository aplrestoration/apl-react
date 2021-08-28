import React from "react";
import { Link } from "react-router-dom";

const defaultProps = {
  closeMenuWeb: () => {},
};

const WebMenu = ({closeMenuWeb}) => {
  return (
    <div className="web-menu-container">
      <div className="web-menu-box">
        <div className="web-menu-list">
          <div className="web-menu-title">Restoration</div>
          <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/emergency-response" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Emergency Response
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/water-and-flood" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Water & Flood
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/biohazard-redemption" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Biohazard Redemption
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/fire-and-smoke" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Fire & Smoke
              </Link>
            </li>
          </ul>
        </div>

        <div className="web-menu-list">
          <div className="web-menu-title">Rennovation</div>
          <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/drywall-service" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Drywall Repairs & Installation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/door-and-trimworks" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Door & Trim Works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/floor-installation" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Floor Installation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tiling" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Tiling
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/painting" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Painting
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/basement-finishing" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Basement Finishing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demolition" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Demolition
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bathroom-finishing" className="mobile-nav-link" onClick={() => closeMenuWeb(false)}>
                Bathroom Finishing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

WebMenu.defaultProps = defaultProps;
export default WebMenu;
