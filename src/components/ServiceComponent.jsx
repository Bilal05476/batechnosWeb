import React from "react";
import { NavLink } from "react-router-dom";

const ServiceComponent = (props) => {
  return (
    <div className="container-fluid homepage serviceComponent">
      <div className="row">
        <div className="col-md-7 text_div">
          <h2 className="text-light">{props.title}</h2>
          <p className="text-light text-justify">{props.subTitle}</p>
          <div>
            <NavLink className="light_btn btn__services" to={props.visit}>
              {props.btnName}
            </NavLink>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <img className="img-fluid" src={props.imgSrc} alt="website" />
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
