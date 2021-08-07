import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Hero = () => {
    return (

        <div className="
  position-relative
  overflow-hidden
  p-3 p-md-5
  m-md-3
  text-left
  bg-light
">
  <div className="col-md-5 p-lg-5 ml-1 my-5">
    <h1 className="hero-title text-center">Restorate and Renovate your home</h1>
    <p className="lead fs-5 ">
      Flood, Fire, Emergency? We’re here to help you restore and renovate,
      any time, day or night.
    </p>
    <Link className="btn btn-outline-secondary" to="/">Get a free quote </Link>
  </div>
  <div className="product-device shadow-sm d-none d-md-block" />
  <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
</div>

    )
}

export default Hero
