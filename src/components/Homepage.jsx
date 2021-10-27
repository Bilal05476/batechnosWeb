import React from "react";
import { NavLink } from "react-router-dom";
import BannerCircle from "../images/banner-image.jpg";
const Homepage = (props) => {
  return (
    <>
      <div className="container-fluid homepage">
        <div className="row">
          <div className="col-md-7 text_div">
            <h2 className="text-light">{props.name}</h2>
            <p className="text-light">{props.subtitle}</p>
            <div>
              <a className="light_btn btn__services" href={props.servicesVisit}>
                {props.servicesbtn}
              </a>
              <NavLink className="btn__services" to={props.coursesVisit}>
                {props.coursesbtn}
              </NavLink>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <img
              className="circleImage"
              src={BannerCircle}
              alt="bannerCircle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
