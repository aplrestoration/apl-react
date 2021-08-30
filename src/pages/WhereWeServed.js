import React from "react";
import { Accordion } from "react-bootstrap";

const WhereWeServed = () => {
  return (
    <div className="page-container">
      <div className="container-fluid d-flex flex-column justify-content-end page-hero">
        <div className="page-text-container">
          <h1 className="page-title">WhereWeServed</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          We serve the Greater Vancouver Regional District from Surrey to North
          Vancouver.
        </p>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Vancouver</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li>Arbutus Ridge </li>
                <li>Dunbar </li>
                <li>Fairview </li>
                <li>Grandview-Woodland</li>
                <li>Granville </li>
                <li>Hastings-Sunrise </li>
                <li>Kensington-Cedar </li>
                <li>Cottage </li>
                <li>Kerrisdale </li>
                <li>Killarney </li>
                <li>Kitsilano</li>
              </ul>
              <ul className="list-unstyled">
                <li>Marpole </li>
                <li>Mount Pleasant </li>
                <li>Oakridge </li>
                <li>Renfrew-Collingwood </li>
                <li>Riley Park </li>
                <li>Shaughnessy </li>
                <li>South Cambie </li>
                <li>Strathcona </li>
                <li>Sunset </li>
                <li>UBC </li>
                <li>Victoria-Fraserview </li>
                <li>West End</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Greater Vancouver</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li>Burnaby </li>
                <li>North Vancouver</li>
                <li>New Westminster </li>
                <li>West Vancouver</li>
                <li>Richmond </li>
                <li>Port Moody</li>
                <li>Coquitlam </li>
                <li>Langley</li>
                <li>Surrey </li>
                <li>Port Coquitlam</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Alberta</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li>Calgary</li>
                <li>Edmonton</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Saskachewan</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li>Regina</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default WhereWeServed;
