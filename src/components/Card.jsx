import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card service__card">
        <div className="card-body text-dark text-center">
          <h5 className="card-title services__heading">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <div className="card-footer bg-transparent text-center text-muted">
          B-A TECHNOS
        </div>
      </div>
    </>
  );
};

export default Card;
