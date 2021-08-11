import React from 'react'
import '../index.css'

const SmallGallery = () => {
    return (
        <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 big-title-2">RENOVATION SERVICES</h2>
        <div className="row row-cols-2 row-cols-lg-4 align-items-stretch g-4 py-5">
          <div className="col ">
            <div className="
              card card-cover
              h-100
              overflow-hidden
              text-white
              bg-dark
              rounded-5
              shadow-lg
            " style={{backgroundImage: 'url("unsplash-photo-1.jpg")'}}>
              <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
                <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
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
            " style={{backgroundImage: 'url("unsplash-photo-2.jpg")'}}>
              <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
                <h1 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
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
              <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
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
              <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
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
              <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
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
              <div className="d-flex flex-column-reverse h-100 p-5 pb-3 text-shadow-1">
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

export default SmallGallery
