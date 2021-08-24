import React from "react";
import "../index.css";
import bg1 from "../assets/bg/rennovation/1.jpg";
import bg2 from "../assets/bg/rennovation/2.jpg";
import bg3 from "../assets/bg/rennovation/3.jpg";
import bg4 from "../assets/bg/rennovation/4.jpg";
import bg5 from "../assets/bg/rennovation/5.jpg";
import bg6 from "../assets/bg/rennovation/6.jpg";
import bg7 from "../assets/bg/rennovation/7.jpg";
import bg8 from "../assets/bg/rennovation/8.jpg";

function SmallGallery() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 big-title-2">RENOVATION SERVICES</h2>
      <div className="row row-cols-2 row-cols-lg-4 align-items-stretch g-4">
        <div className="col">
          <div
            className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
              <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold card-title">
                Drywall Repairs And Installation
              </h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
              <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold card-title">
                Door & Trim Works
              </h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
            style={{ backgroundImage: `url(${bg3})` }}
          >
            <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
              <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold card-title">
                Floor Installation
              </h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
            style={{ backgroundImage: `url(${bg4})` }}
          >
            <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
              <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold card-title">
                Tiling
              </h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
            style={{ backgroundImage: `url(${bg5})` }}
          >
            <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
              <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold card-title">
                Bathroom Finishing
              </h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
            style={{ backgroundImage: `url(${bg6})` }}
          >
            <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
              <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold card-title">
                Basement Finishing
              </h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
            style={{ backgroundImage: `url(${bg7})` }}
          >
            <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
              <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold card-title">
                Painting
              </h1>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
            style={{ backgroundImage: `url(${bg8})` }}
          >
            <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
              <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold card-title">
                Demolition
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallGallery;
