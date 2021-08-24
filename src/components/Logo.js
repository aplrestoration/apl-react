import React from "react";
import { Image } from "react-bootstrap";
import logo1 from "../assets/logo/1.png";
import logo2 from "../assets/logo/2.png";
import logo3 from "../assets/logo/3.png";
import logo4 from "../assets/logo/4.png";
import logo5 from "../assets/logo/5.png";
import logo6 from "../assets/logo/6.png";

const Logo = () => {
  return (
    <div className="container logo-section">
      <div className="row">
        <div className="col-4 col-md-2">
          <Image src={logo1} className="img-fluid"></Image>
        </div>
        <div className="col-4 col-md-2">
          <Image src={logo2} className="img-fluid"></Image>
        </div>
        <div className="col-4 col-md-2">
          <Image src={logo3} className="img-fluid"></Image>
        </div>
        <div className="col-4 col-md-2">
          <Image src={logo4} className="img-fluid"></Image>
        </div>
        <div className="col-4 col-md-2">
          <Image src={logo5} className="img-fluid"></Image>
        </div>
        <div className="col-4 col-md-2">
          <Image src={logo6} className="img-fluid"></Image>
        </div>
      </div>
    </div>
  );
};

export default Logo;
