import React from 'react'
import '../index.css'
import bg1 from '../assets/bg/restoration/1.jpg'
import bg2 from '../assets/bg/restoration/2.jpg'
import bg3 from '../assets/bg/restoration/3.jpg'
import bg4 from '../assets/bg/restoration/4.jpg'


const LargeGallery = () => {
    return (
        <div className="container px-4 pt-5" id="custom-cards">
        <h2 className="pb-2 big-title-2">RESTORATION SERVICES</h2>
          <div className="large-gallery-row row row-cols-2 row-cols-lg-2 align-items-stretch g-4">
          <div className="col">
            <div className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            " style={{ backgroundImage: `url(${bg1})` }}>
              <div className="d-flex align-items-end flex-row h-100 p-5 pb-3 text-shadow-1">
                <h1 className="fw-bold">
                  Emergency Response
                </h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            " style={{ backgroundImage: `url(${bg2})` }}>
              <div className="d-flex align-items-end flex-row h-100 p-5 pb-3 text-shadow-1">
                <h1 className="fw-bold">
                  Another longer title belongs here
                </h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            " style={{ backgroundImage: `url(${bg3})` }}>
              <div className="d-flex align-items-end flex-row h-100 p-5 pb-3 text-shadow-1">
                <h1 className="fw-bold">
                  Another longer title belongs here
                </h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              rounded-5
              gallery-bg
            " style={{ backgroundImage: `url(${bg4})` }}>
              <div className="d-flex align-items-end flex-row h-100 p-5 pb-3 text-shadow-1">
                <h1 className="fw-bold">
                  Another longer title belongs here
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LargeGallery
