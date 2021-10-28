import React from "react";
import { NavLink } from "react-router-dom";

const SCard = (props) => {
  return (
    <div className="card service__card service_card_hover">
      <NavLink style={{ textDecoration: "none" }} to={props.serviceVisit}>
        <div className="card-body text-dark text-center">
          <h5 className="card-title services__heading">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default SCard;
