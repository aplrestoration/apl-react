import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LargeGallery from "../components/LargeGallery";
import Logo from "../components/Logo";
import Marketing from "../components/Marketing";
import SmallGallery from "../components/SmallGallery";
import Testimonial from "../components/Testimonial";
import WhoWeServed from "../components/WhoWeServed";

const Home = () => {
  return (
    <div>
      <Hero />
      <Logo />
      <LargeGallery />
      <SmallGallery />
      <WhoWeServed />
      <Testimonial />
      <Marketing />
      <Footer />
    </div>
  );
};

export default Home;
