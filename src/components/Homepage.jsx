import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BannerCircle from "../images/carousel-graph.jpg";
import BannerCircle2 from "../images/carousel-digi.jpg";
import BannerCircle3 from "../images/carousel-web.jpg";

const Homepage = (props) => {
  let currentImage = 0;
  const [imgSrc, setImageSrc] = useState(BannerCircle);

  //Continuous Image Changes

  const changeImages = () => {
    if (currentImage < 3) {
      currentImage++;

      if (currentImage === 1) {
        setImageSrc(BannerCircle2);
      } else if (currentImage === 2) {
        setImageSrc(BannerCircle3);
      }
    } else {
      currentImage = 0;
      setImageSrc(BannerCircle);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      changeImages();
    }, 5000);
    return () => interval;
  }, []);

  return (
    <>
      <div className="container-fluid homepage">
        <div className="row">
          <div className="col-md-7 text_div">
            <h2 className="text-light">{props.name}</h2>
            <p className="text-light text-justify">{props.subtitle}</p>
            <div>
              <NavLink
                className="light_btn btn__services"
                to={props.servicesVisit}
              >
                {props.servicesbtn}
              </NavLink>
              <NavLink className="btn__services" to={props.coursesVisit}>
                {props.coursesbtn}
              </NavLink>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <img className="circleImage" src={imgSrc} alt="bannerCircle" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
