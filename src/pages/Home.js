import React from "react";
import Hero from "../components/Hero";
import LargeGallery from "../components/LargeGallery";
import Logo from "../components/Logo";
import Marketing from "../components/Marketing";
import SmallGallery from "../components/SmallGallery";
import Testimonial from "../components/Testimonial";
import WhoWeServed from "../components/WhoWeServed";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        {/* <Banner /> */}
        <Hero />
        <Logo />
        <LargeGallery />
        <SmallGallery />
        <WhoWeServed />
        <Testimonial />
        <Marketing />
      </div>
    </Layout>
  );
};

export default Home;
