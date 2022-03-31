import React from "react";
import bg from "../assets/bg/page-hero/restoration-header-fire-smoke.jpg"
import GalleryNav from "../components/GalleryNav";
import Layout from "../components/Layout";

const FireAndSmoke = () => {
  return (
    <Layout>
    <div className="page-container">
    <div className="container-fluid d-flex flex-column justify-content-end page-hero"
    style={{ backgroundImage: `url(${bg})` }}>
      <div className="page-text-container">
          <h1 className="page-title" style={{color:"white" }}>Fire & Smoke</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          Fires can do more than compromise the structural integrity of your
          building. They interrupt critical systems, like HVAC or electrical,
          and can release harmful materials like asbestos.
        </p>

        <p>We respond by: mitigating damage to ensure site safety.</p>

        <p>
          Although its fire&rsquo;s worst enemy, water damage, triggered as a
          result of fires, is not what most homeowners expect. Whether it is the
          damage caused by water from fire hoses and extinguishers or that from
          bursting and leaking faucets and pipes; there is often significant
          water damage that needs to be addressed immediately.
        </p>

        <p>
          Water used in fire suppression can create an entirely new set of
          challenges.
        </p>

        <p>
          Excessive moisture can rust pipes, rot drywall, create mould, or
          compromise a building&rsquo;s structural integrity.
        </p>

        <span className="big-title-2">We respond by:</span><br /><br />
        <ul className="page-li">
          <li>Providing drying & dehumidification services</li>
          <li>Sending in mould restoration specialists</li>
          <li>Offering content restoration services</li>
          <li>Reconstruction water-damaged areas</li>
          <li>Cleaning</li>
        </ul>
      </div>
      <GalleryNav />
    </div>
    </Layout>
  );
};

export default FireAndSmoke;
