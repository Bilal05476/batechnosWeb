import React from "react";
import { NavLink } from "react-router-dom";
const Homepage = (props) => {
  return (
    <>
      <div className="container-fluid homepage">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="text-light">
              {props.name} <br />
              <strong className="company-name">{props.businessName}</strong>
            </h1>
            <div className="mt-3">
              <a className="btn__services" href={props.servicesVisit}>
                {props.servicesbtn}
              </a>
              <NavLink className="btn__services" to={props.coursesVisit}>
                {props.coursesbtn}
              </NavLink>
              <NavLink className="btn__services" to={props.demoVisit}>
                {props.demobtn}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
