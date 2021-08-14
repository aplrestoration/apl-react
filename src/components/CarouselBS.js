import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div
              style={{ height: 537, margin: 20, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="73"
                  viewBox="0 0 89 73"
                  fill="none"
                >
                  <path
                    d="M81.4402 0.271057L68.3822 38.4534H89V72.518H50.1699V41.8225L66.6641 0.271057H81.4402ZM0 72.518V41.8225L16.4942 0.271057H31.2703L18.2124 38.4534H38.8301V72.518H0Z"
                    fill="black"
                  />
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
          </div>
          <div>
            <div
              style={{ height: 537, margin: 20, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="73"
                  viewBox="0 0 89 73"
                  fill="none"
                >
                  <path
                    d="M81.4402 0.271057L68.3822 38.4534H89V72.518H50.1699V41.8225L66.6641 0.271057H81.4402ZM0 72.518V41.8225L16.4942 0.271057H31.2703L18.2124 38.4534H38.8301V72.518H0Z"
                    fill="black"
                  />
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
          </div>
          <div>
            <div
              style={{ height: 537, margin: 20, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="73"
                  viewBox="0 0 89 73"
                  fill="none"
                >
                  <path
                    d="M81.4402 0.271057L68.3822 38.4534H89V72.518H50.1699V41.8225L66.6641 0.271057H81.4402ZM0 72.518V41.8225L16.4942 0.271057H31.2703L18.2124 38.4534H38.8301V72.518H0Z"
                    fill="black"
                  />
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
          </div>
          <div>
            <div
              style={{ height: 537, margin: 20, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="73"
                  viewBox="0 0 89 73"
                  fill="none"
                >
                  <path
                    d="M81.4402 0.271057L68.3822 38.4534H89V72.518H50.1699V41.8225L66.6641 0.271057H81.4402ZM0 72.518V41.8225L16.4942 0.271057H31.2703L18.2124 38.4534H38.8301V72.518H0Z"
                    fill="black"
                  />
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
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
