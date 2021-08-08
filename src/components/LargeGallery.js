import React from 'react'
import '../index.css'

const LargeGallery = () => {
    return (
        <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 big-title-2">Restoration Services</h2>
        <div className="row row-cols-2 row-cols-lg-2 align-items-stretch h-100 g-4 py-5">
          <div className="col">
            <div className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              bg-dark
              rounded-5
              shadow-lg
            " style={{backgroundImage: 'url("unsplash-photo-3.jpg")'}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
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
              bg-dark
              rounded-5
              shadow-lg
            " style={{backgroundImage: 'url("unsplash-photo-3.jpg")'}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
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
              bg-dark
              rounded-5
              shadow-lg
            " style={{backgroundImage: 'url("unsplash-photo-3.jpg")'}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
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
              bg-dark
              rounded-5
              shadow-lg
            " style={{backgroundImage: 'url("unsplash-photo-3.jpg")'}}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
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
