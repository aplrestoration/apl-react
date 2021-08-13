import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const CardSlider = () => {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={150}
        totalSlides={5}
        visibleSlides={3}
        currentSlide={3}

        className=""
      >
        <Slider>
          <Slide index={0}>
            <div style={{ height: 537, margin: 20, background: "white" }} className="d-flex flex-column card-box justify-content-between">
              <div className="d-flex flex-column">
                <svg width="5em" height="5em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M4.49 7.529a5.3 5.3 0 011.174-.131c3.128 0 5.663 2.716 5.663 6.065 0 3.35-2.535 6.066-5.663 6.066S0 16.814 0 13.463c0-.098.002-.197.007-.295H0C0 8.113 3.84 4 8.56 4v2.036c-1.531 0-2.943.558-4.07 1.493zm12.674 0c.378-.086.77-.131 1.172-.131 3.128 0 5.664 2.716 5.664 6.065 0 3.35-2.536 6.066-5.664 6.066-3.128 0-5.663-2.715-5.663-6.066 0-.098.002-.197.007-.295h-.007c0-5.055 3.84-9.168 8.56-9.168v2.036c-1.532 0-2.943.558-4.07 1.493z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="card-text">
                  Their care included an effective mediation with the insurance
                  company, which spared me from many headaches.
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Joel Saalfeld</h3>
                <p>~STAR~</p>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div style={{ height: 537, margin: 20, background: "white" }}>
              I am the second Slide.
            </div>
          </Slide>
          <Slide index={2}>
            <div style={{ height: 537, margin: 20, background: "white" }}>
              I am the third Slide.
            </div>
          </Slide>
          <Slide index={3}>
            <div style={{ height: 537, margin: 20, background: "white" }}>
              I am the fourth Slide.
            </div>
          </Slide>
          <Slide index={4}>
            <div style={{ height: 537, margin: 20, background: "white" }}>
              I am the fifth Slide.
            </div>
          </Slide>
        </Slider>
        <div className="carousel-buttons">
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </div>
        
      </CarouselProvider>
    </div>
  );
};

export default CardSlider;
