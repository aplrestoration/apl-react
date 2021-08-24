import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import stars from "../assets/icon/star.png";
import QuoteIcon from "./QuoteIcon";

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
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  APL's workers are polite, well organized and tidy, they did
                  not try to spend more than need be to complete. They have all
                  the necessary equipment, Very satisfied.
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Norma Freeman</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  My shower leaked to the unit below. The knowledgeable APL team
                  were fantastic, I can't recommend them enough! Attention to
                  detail, and the job is done right to your liking.
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Shannon Froklage</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  Used APL Restoration after a burst pipe and flooding. They
                  were very professional, did great work. Receptive to questions
                  and great job at explaining their process.
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Raj Brar</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  From initial meeting to completion, I felt being supported at
                  challenging time. Response time was quick, work done well,
                  cost reasonable. There were no surprises!
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Lonnie Delisle</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  My apartment had a flood, flooring and walls were damaged. APL
                  Team make sure I was clear on everything happening. They went
                  above and beyond, my apartment looked better than before.
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Mairead Raupach</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  APL helped our business with a flood. The job was quick,
                  efficient, safe (dust control, dehumidification,
                  sterilization, etc). I hope not have another flood, I'd be
                  happy to use APL again and again.
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Emese Tokes</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  They were professional and courteous, with great communication
                  and friendly staff. The work performed was of the highest
                  quality, with excellent dust control and workspace
                  cleanliness. 
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Duncan Stratton</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  Fantastic work done by APL Restoration and their
                  technicians!!! The 3 yrs warranty they provide is also great.
                  Highly recommend their service if you're in a trouble!
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Sang Min Kim</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  APL's amazing team of craftsmen completely redid my ruined
                  basement. They arrived within hours after I called. Removed
                  the mess, dried it out, laid floor, fixed the drywall and our
                  basement look new!!
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Richard Lee</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ height: 600, margin: 10, background: "white" }}
              className="d-flex flex-column card-box justify-content-between"
            >
              <div className="d-flex flex-column">
                <QuoteIcon />
                <span className="card-text">
                  Amazing work. My flooded basement was a mess and they
                  refinished it to an amazing high standard. Made it all so
                  simple with the insurance, even helped with deductible.
                  Thanks!!
                </span>
              </div>
              <div>
                <h3 className="fw-bold">Ed Berry</h3>
                <Image src={stars} style={{ height: "36px" }}></Image>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
