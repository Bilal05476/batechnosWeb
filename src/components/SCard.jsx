import React from 'react';

const SCard = (props) => {
  return (
    <>
        <div className="card-deck mx-auto col-md-4 py-3">
          <div className="card service__card cont__hover" >
            <div className="card-body text-dark text-center">
              <h5 className="card-title services__heading">{props.title}</h5>
              <p className="card-text">{props.text}</p>
            </div>
          </div>
        </div>  
    </>
  );
}

export default SCard;