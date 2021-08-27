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

const smallGalleryData = [
  {
    bgIMG: bg1,
    title: "Drywall Repairs And Installation",
    link: "/",
    id: 1,
  },
  {
    bgIMG: bg2,
    title: "Door & Trim Works",
    link: "/",
    id: 2,
  },
  {
    bgIMG: bg3,
    title: "Floor Installation",
    link: "/",
    id: 3,
  },
  {
    bgIMG: bg4,
    title: "Tiling",
    link: "/",
    id: 4,
  },
  {
    bgIMG: bg5,
    title: "Bathroom Finishing",
    link: "/",
    id: 5,
  },
  {
    bgIMG: bg6,
    title: "Basement Finishing",
    link: "/",
    id: 6,
  },
  {
    bgIMG: bg7,
    title: "Painting",
    link: "/",
    id: 7,
  },
  {
    bgIMG: bg8,
    title: "Demolition",
    link: "/",
    id: 8,
  },
];

function SmallGallery() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 big-title-2">RENOVATION SERVICES</h2>
      <div className="row row-cols-2 row-cols-lg-4 align-items-stretch gallery-spacing">
        {smallGalleryData &&
          smallGalleryData.map((item) => (
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
                  <h1 className="pt-5 mt-5 lh-1 fw-bold card-title">
                    {item.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SmallGallery;
