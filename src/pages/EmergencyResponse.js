import React from "react";
import bg from "../assets/bg/page-hero/restoration-header-emergency-response.jpg";
import GalleryNav from "../components/GalleryNav";
import Layout from "../components/Layout";

const EmergencyResponse = () => {
  return (
    <Layout>
      <div className="page-container">
        <div
          className="container-fluid d-flex flex-column justify-content-end page-hero"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="page-text-container">
            <h1 className="page-title" style={{ color: "white" }}>
              {" "}
              Emergency Response
            </h1>
          </div>
        </div>

        <div className="page-text-container">
          <p>
            Most properties can be dried in 2-4 days using our Quick Dry System.
            Whatever the cause, APL Restoration professional damage restoration
            services are available 365 days a year, 24 hours a day to respond to
            an emergency.
          </p>

          <p>
            You get our Quick Dry System, which is the most advanced equipment
            available &ndash; to dry any areas completely so that the threat of
            mould growth and pathogen spread is minimized or eliminated. APL can
            reduce the time it takes to dry most buildings to two to four days in
            order to minimize your inconvenience.
          </p>

          <p>
            <a href="https://www.aplrestoration.ca/water-and-flood"> Water damage </a> losses can happen in homes and businesses. Supply lines
            break and soak walls, floors and contents. Strong storms can result in
            flood damage allowing water to enter the structure. You probably know
            someone who has returned home to a kitchen or living room full of
            water after a water heater or toilet line has broken.
          </p>

          <p>
            This is a very difficult time for a home or business owner to walk
            inand find a water damaged area.
          </p>
        </div>
        <GalleryNav />
      </div>
    </Layout>
  );
};

export default EmergencyResponse;
