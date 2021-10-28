import React from "react";
import web from "../images/aboutimage.png";
import digi from "../images/digi.png";
import graphic from "../images/graph.png";
import applicaion from "../images/application.png";
import ServiceComponent from "./ServiceComponent";
const Services = () => {
  return (
    <div className="services__div" data-aos="fade-in">
      <ServiceComponent
        title="Mobile Friendly Websites"
        subTitle="Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience."
        imgSrc={web}
        visit="/website"
        btnName="Get Started"
      />
      <ServiceComponent
        title="Android App Development"
        subTitle="Android App Development is the building and maintenance of Mobile Applications; it's the work that happens behind the scenes to make a application look great, work fast and perform well with a seamless user experience."
        imgSrc={applicaion}
        visit="/"
        btnName="Get Started"
      />
      <ServiceComponent
        title="Graphics Designing"
        subTitle="Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and attract consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and reports."
        imgSrc={graphic}
        visit="/graphic"
        btnName="Get Started"
      />
      <ServiceComponent
        title="Social Media Marketing"
        subTitle="Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on social profiles, listening to and engaging your followers, analysize result, and running compaigns."
        imgSrc={digi}
        visit="/social"
        btnName="Get Started"
      />
    </div>
  );
};

export default Services;
