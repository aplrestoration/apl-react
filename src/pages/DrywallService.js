import React from "react";
import bg from "../assets/bg/page-hero/renovation-header-drywall-repair-installation.jpg"
import GalleryNav from "../components/GalleryNav";

const DrywallService = () => {
  return (
    <div className="page-container">
      <div className="container-fluid d-flex flex-column justify-content-end page-hero" 
       style={{ backgroundImage: `url(${bg})` }}>
        <div className="page-text-container">
          <h1 className="page-title">Drywall Service</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          Over the years, the walls in your home are going to sustain a lot of
          wear and tear, from being cracked and dented by door handles to
          getting scraped and scuffed during renovation projects. Fortunately,
          the team here at APL Restoration Ltd has a lot of expertise in drywall
          repairs. We will patch-up and repaint your damaged drywall quickly and
          cleanly, so that it looks pretty much brand new.
        </p>

        <p>
          At APL Restoration Ltd we strive to provide the highest quality
          service to maintain total honesty, fairness, and transparency in the
          relationships we develop with our customers.
        </p>
      </div>
      <GalleryNav />
    </div>
  );
};

export default DrywallService;
