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
        naturalSlideWidth={420}
        naturalSlideHeight={537}
        totalSlides={5}
        visibleSlides={3}
        currentSlide={0}
        className=""
      >
        <Slider>
          <Slide index={0}>
            <div
              style={{ height: 537, margin: 20, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
              <svg xmlns="http://www.w3.org/2000/svg" width="89" height="73" viewBox="0 0 89 73" fill="none">
<path d="M81.4402 0.271057L68.3822 38.4534H89V72.518H50.1699V41.8225L66.6641 0.271057H81.4402ZM0 72.518V41.8225L16.4942 0.271057H31.2703L18.2124 38.4534H38.8301V72.518H0Z" fill="black"/>
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

        <div className="carousel-button-wrapper">
          <ButtonBack className="carousel-buttons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="43"
              viewBox="0 0 27 43"
              fill="none"
            >
              <path
                d="M18.8659 1.77089C20.6493 0.0399494 23.4982 0.0824709 25.2291 1.86586C26.9601 3.64925 26.9175 6.49818 25.1341 8.22911L18.8659 1.77089ZM5 21.5L1.86586 24.7291C0.992735 23.8817 0.5 22.7168 0.5 21.5C0.5 20.2832 0.992735 19.1183 1.86586 18.2709L5 21.5ZM25.1341 34.7709C26.9175 36.5018 26.9601 39.3507 25.2291 41.1341C23.4982 42.9175 20.6493 42.96 18.8659 41.2291L25.1341 34.7709ZM25.1341 8.22911L8.13414 24.7291L1.86586 18.2709L18.8659 1.77089L25.1341 8.22911ZM8.13414 18.2709L25.1341 34.7709L18.8659 41.2291L1.86586 24.7291L8.13414 18.2709Z"
                fill="white"
              />
            </svg>
          </ButtonBack>
          <ButtonNext className="carousel-buttons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="43"
              viewBox="0 0 26 43"
              fill="none"
            >
              <path
                d="M8.23055 1.86734C6.50043 0.0831594 3.65153 0.03933 1.86734 1.76945C0.0831594 3.49957 0.03933 6.34847 1.76945 8.13266L8.23055 1.86734ZM21 21.5L24.2306 24.6327C25.9231 22.8872 25.9231 20.1128 24.2306 18.3673L21 21.5ZM1.76945 34.8673C0.03933 36.6515 0.0831594 39.5004 1.86734 41.2306C3.65153 42.9607 6.50043 42.9168 8.23055 41.1327L1.76945 34.8673ZM1.76945 8.13266L17.7694 24.6327L24.2306 18.3673L8.23055 1.86734L1.76945 8.13266ZM17.7694 18.3673L1.76945 34.8673L8.23055 41.1327L24.2306 24.6327L17.7694 18.3673Z"
                fill="white"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default CardSlider;
