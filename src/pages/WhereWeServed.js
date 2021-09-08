import React from "react";

function WhereWeServed() {
 
  return (
    <div className="page-container">
      <div className="container-fluid d-flex flex-column justify-content-end page-hero">
        <div className="page-text-container">
          <h1 className="page-title">Where We Served</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          We serve the Greater Vancouver Regional District from Surrey to North
          Vancouver.
        </p>

        <ul className="page-li list-unstyled">
          <li className="fw-bold">British Columbia</li>
          <li>North Vancouver</li>
          <li>West Vancouver</li>
          <li>Burnaby </li>
          <li>New Westminster </li>
          <li>Richmond </li>
          <li>Port Moody</li>
          <li>Coquitlam </li>
          <li>Langley</li>
          <li>Surrey </li>
          <li>Port Coquitlam</li>
        </ul>

        <ul className="page-li list-unstyled">
          <li className="fw-bold">Alberta</li>
          <li>Calgary </li>
          <li>Edmonton</li>
        </ul>
        <ul className="page-li list-unstyled">
          <li className="fw-bold">Saskatchewan</li>
          <li>Regina </li>
        </ul>
      </div>
    </div>
  );
};

export default WhereWeServed;
