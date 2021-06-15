import React from "react";
import { NavLink } from "react-router-dom";

const Common3 = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-8 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name}</h1>
                  <h6 className="my-3 desc">{props.data}</h6>
                  <strong>{props.note}</strong>
                  <p>{props.tools}</p>
                  <strong>{props.note2}</strong>
                  <p>{props.result}</p>
                  <strong>{props.conhead}</strong>
                  <p>{props.content}</p>
                  <strong className="bg-warning text-dark host">
                    {props.dehost}
                  </strong>
                  <div className="mt-3">
                    {" "}
                    <NavLink className="btn-get-started" to={props.visit}>
                      {" "}
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 header-img pt-3 ">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated "
                    alt="...."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <hr />
    </>
  );
};

export default Common3;
