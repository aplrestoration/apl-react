import React from "react";
import { Link } from "react-router-dom";
//restoration
import bg1 from "../assets/bg/restoration/1.jpg";
import bg2 from "../assets/bg/restoration/2.jpg";
import bg3 from "../assets/bg/restoration/3.jpg";
import bg4 from "../assets/bg/restoration/4.jpg";
//rennovation
import bg5 from "../assets/bg/rennovation/1.jpg";
import bg6 from "../assets/bg/rennovation/2.jpg";
import bg7 from "../assets/bg/rennovation/3.jpg";
import bg8 from "../assets/bg/rennovation/4.jpg";
import bg9 from "../assets/bg/rennovation/5.jpg";
import bg10 from "../assets/bg/rennovation/6.jpg";
import bg11 from "../assets/bg/rennovation/7.jpg";
import bg12 from "../assets/bg/rennovation/8.jpg";

const resData = [
  {
    bgIMG: bg1,
    title: "Emergency Response",
    link: "/emergency-response",
    id: 1,
  },
  {
    bgIMG: bg2,
    title: "Water & Flood",
    link: "/water-and-flood",
    id: 2,
  },
  {
    bgIMG: bg3,
    title: "Biohazard Redemption",
    link: "/biohazard-redemption",
    id: 3,
  },
  {
    bgIMG: bg4,
    title: "Fire & Smoke",
    link: "/fire-and-smoke",
    id: 4,
  },
];

const renData = [
  {
    bgIMG: bg5,
    title: "Drywall Repairs And Installation",
    link: "/drywall-service",
    id: 5,
  },
  {
    bgIMG: bg6,
    title: "Door & Trim Works",
    link: "/door-and-trimworks",
    id: 6,
  },
  {
    bgIMG: bg7,
    title: "Floor Installation",
    link: "/floor-installation",
    id: 7,
  },
  {
    bgIMG: bg8,
    title: "Tiling",
    link: "/tiling",
    id: 8,
  },
  {
    bgIMG: bg9,
    title: "Bathroom Finishing",
    link: "/bathroom-finishing",
    id: 9,
  },
  {
    bgIMG: bg10,
    title: "Basement Finishing",
    link: "/basement-finishing",
    id: 10,
  },
  {
    bgIMG: bg11,
    title: "Painting",
    link: "/painting",
    id: 11,
  },
  {
    bgIMG: bg12,
    title: "Demolition",
    link: "/demolition",
    id: 12,
  },
];
function GalleryNav() {
  return (
    <div style={{ backgroundColor: "#F2F2F2", paddingBottom: "5%" }}>
      {/* restoration */}
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 big-title-2">RESTORATION SERVICES</h2>
        <div className="row row-cols-2 row-cols-lg-4 align-items-stretch gallery-spacing">
          {resData &&
            resData.map((item) => (
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <div className="col column-height" key={item.id}>
                  <div
                    className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
                    style={{ backgroundImage: `url(${item.bgIMG})` }}
                  >
                    <div className="d-flex flex-column-reverse h-100 p-3 text-shadow-1">
                      <h3 className="pt-5 mt-5 lh-1 fw-bold card-title">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
      {/* rennovation */}
      <div className="container px-4 pb-5" id="custom-cards">
        <h2 className="pb-2 big-title-2">RENOVATION SERVICES</h2>
        <div className="row row-cols-2 row-cols-lg-4 align-items-stretch gallery-spacing">
          {renData &&
            renData.map((item) => (
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <div className="col column-height" key={item.id}>
                  <div
                    className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            "
                    style={{ backgroundImage: `url(${item.bgIMG})` }}
                  >
                    <div className="d-flex flex-column-reverse h-100 p-3 text-shadow-1">
                      <h3 className="pt-5 mt-5 lh-1 fw-bold card-title">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryNav;
