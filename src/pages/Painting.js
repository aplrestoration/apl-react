import React from "react";
import bg from "../assets/bg/page-hero/renovation-header-painting-service.jpg";
import GalleryNav from "../components/GalleryNav";
const Painting = () => {
  return (
    <div className="page-container">
      <div
        className="container-fluid d-flex flex-column justify-content-end page-hero"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="page-text-container">
          <h1 className="page-title"> Painting</h1>
        </div>
      </div>

      <div className="page-text-container">
        <p>
        <a href="https://www.aplrestoration.ca/"><strong>APL Restoration Ltd</strong></a> helps you transform your home with color. If
          it&rsquo;s a complete house repaint, an eye-catching accent wall, or
          anything in between, we will handle it. Our professional painters can
          paint houses and apartments of all shapes and sizes, interior and
          exterior.
        </p>
        <p>
          We show up on time, finish the job on time, and leave with a result
          that goes above and beyond your expectations. Your satisfaction is our
          number-one goal, and we take every step of the painting process
          seriously, from our preparation to the final quality checks. And we
          make sure there are no surprises along the way: from arriving on time
          to finishing on time and providing you with an accurate, upfront price
          quote.
        </p>
      </div>
      <GalleryNav />
    </div>
  );
};

export default Painting;
