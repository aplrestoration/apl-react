import React from "react";
import bg from "../assets/bg/page-hero/renovation-header-door-trim.jpg";
import GalleryNav from "../components/GalleryNav";
const DoorAndTrimWorks = () => {
  return (
    <div className="page-container">
      <div
        className="container-fluid d-flex flex-column justify-content-end page-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="page-text-container">
          <h1 className="page-title">Door & Trim Works</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
          APL Restoration provide you with a full range of doors and trims
          services.
        </p>

        <p>
          Trim is any strip of wood, aluminum or other materials that are placed
          on a surface to provide texture and depth. It can be decorative or
          more generic, but it's everything from basic baseboards to window
          castings and crown mouldings. Even chair rails and wainscoting are a
          part of the interior trim family.
        </p>

        <p>
          Door and window trim covers the gap between the frame and the wall and
          provides an elegant finish. As the casing defines a perimeter and is a
          highly visible feature, it should blend with the architectural style
          of the room.
        </p>
      </div>
      <GalleryNav />
    </div>
  );
};

export default DoorAndTrimWorks;
