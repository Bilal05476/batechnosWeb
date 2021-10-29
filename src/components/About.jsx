import React from "react";
import web from "../images/homeimage.png";
import CData from "./CData";
import Card from "./Card";

const About = () => {
  return (
    <div className="about__div" data-aos="zoom-in" id="about">
      <div className="container-fluid">
        <div className="row" data-aos="ease-in">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h3>About Us</h3>
            <strong className="my-3 subtitle">
              Business Planning, Strategy, and Execution. A problem-solving
              philosophy that leads to products people actually want to use.
            </strong>
            <p>
              Every successful digital journey starts with Graphics,
              Development, and Marketing. B-A TECHNOS provides a One-stop
              solution to our Foreign and Local clients to facelift their
              Brands. We made technology simple for you and adapt reliable,
              easy, and innovative ideas. Better design with easy navigation for
              stubborn marketing. So what are you waiting for?
            </p>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img ">
            <img src={web} className="img-fluid animated " alt="about" />
          </div>
        </div>
        <div className="row" data-aos="ease-in">
          <div className="card-deck mx-auto col-md-12 py-2">
            {CData.map((val, ind) => {
              return <Card key={ind} title={val.title} text={val.text} />;
            })}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default About;
