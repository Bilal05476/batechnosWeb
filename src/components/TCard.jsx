import React from "react";
import { FaCommentDots } from "react-icons/fa";

const TCard = (props) => {
  return (
    <div className="service__card service_card_hover">
      <div className="card-body text-dark text-center">
        <FaCommentDots style={{ fontSize: "2rem" }} className="mb-2" />
        <br />
        <strong>{props.service}</strong>
        <p className="card-text">{props.feedBack}</p>
        <small className="card-title">{props.name}</small>
      </div>
    </div>
  );
};

export default TCard;
