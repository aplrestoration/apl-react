import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'


const Header = () => {
    return (
      <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <Link to="/" className="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-dark text-decoration-none
        ">
          <h3 className="fs-4 mx-3 site-logo">APL restoration</h3>
          <span className="fs-6 ml-3">24/7 Emergency Toll-Free Number <br />
            1-833-7GOT-FlOOD（1-833-746-8356)</span>
        </Link>
        <ul className="nav">
          <li className="nav-item dropdown">
            <Link to="/" className="nav-link active" aria-current="page">Service</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link nav-custom">Who We Serve</Link></li>
          <li className="nav-item">
            <Link to="/" className="nav-link nav-custom">Where We Serve</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link nav-custom">About</Link>
            </li>
        </ul>
      </header>
    </div>
    
    )
}

export default Header
