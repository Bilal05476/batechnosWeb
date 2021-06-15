import React from "react";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="web__div courses__main text-light" data-aos="zoom-in">
        <div className="row">
          <div
            className="offset-md-3 col-md-6 alert alert-info alert-dismissible fade show"
            role="alert"
          >
            <strong>All Courses are Offering Online!</strong>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>

        <div className="row courses__div">
          <div className="offset-md-2 col-md-8">
            <h2>
              Welcome to <strong>Batechnos</strong>
            </h2>
            <h4>Courses Page</h4>
            <p>
              Assalam u Alaikum! My name is Bilal Ahmed. I am the Founder of
              Batechnos. I am also a React Developer. The vision behind the
              Batechnos is to empower the youth of Pakistan so they can earn and
              support their family too. Batechnos is a institute for all of
              those who are not able to pay a high amount of fees but eager to
              learn new technologies and earn respective income as per skills
              set. The mission behind this effort from Batechnos is to share
              knowledge with the youth of Pakistan and grow Pakistan at the
              industry level.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}
              className="my-5"
            >
              <NavLink
                style={{ marginRight: "1.2rem" }}
                className="btn btn-sm register__btn"
                to="/register"
              >
                Register Now
              </NavLink>
              <div
                style={{
                  height: "50px",
                  width: "1px",
                  background: "#fff",
                  marginRight: "15px",
                }}
              ></div>
              <div>
                <strong>
                  <CountUp start={0} end={50} duration={5} separator="," />+
                </strong>
                <br />
                <small>Applications Received</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container programs" data-aos="fade-in">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <h3 className=" text-center my-5">Avalaible Programs</h3>
          </div>
        </div>
        <div className="row mx-auto" data-aos="zoom-in">
          <div className="col-md-1"></div>
          <div className="col-md-3 column static">
            Static Website Development
            <NavLink to="/coursesdetails" className="courseDetailsLink py-2">
              Learn more
            </NavLink>
          </div>
          <div className="col-md-3 column react">
            React Web Applications
            <NavLink to="/coursesdetails" className="courseDetailsLink py-2">
              Learn more
            </NavLink>
          </div>
          <div className="col-md-3 column python">
            Python Programming
            <NavLink to="/coursesdetails" className="courseDetailsLink py-2">
              Learn more
            </NavLink>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Courses;
