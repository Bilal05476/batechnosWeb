import React from "react";
import { NavLink } from "react-router-dom";
const Homepage = (props) => {
  return (
    <>
      <div className="container-fluid homepage">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-light">
              {props.name}
              <strong className="company-name">{props.businessName}</strong>
            </h3>
            <p className="text-light">{props.subtitle}</p>
            <div className="mt-3">
              <a className="btn__services" href={props.servicesVisit}>
                {props.servicesbtn}
              </a>
              <NavLink className="btn__services" to={props.coursesVisit}>
                {props.coursesbtn}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
