import React from "react";
import web from "../images/aboutimage.png";
import digi from "../images/digi.png";
import graphic from "../images/graph.png";
import Common from "./Common";
const Services = () => {
  return (
    <div className="services__div" data-aos="zoom-in">
      <Common
        name="Grow your business with "
        subtitle="We are the team of talented people !"
        imgsrc={web}
        visit="/website"
        btname="Get Started"
        businessName=" Mobile Friendly Website"
      />
      <Common
        name="Grow your revenue through "
        subtitle="We are the team of talented people !"
        imgsrc={digi}
        visit="/social"
        btname="Get Started"
        businessName=" Digital Medium"
      />
      <Common
        name="Make your impression with "
        subtitle="We are the team of talented people !"
        imgsrc={graphic}
        visit="/graphic"
        btname="Get Started"
        businessName=" Graphic looks"
      />
    </div>
  );
};

export default Services;
