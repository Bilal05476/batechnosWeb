import React, { useEffect } from "react";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";

const Courses = () => {
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="web__div courses__main text-light" data-aos="fade-up">
        <div className="row courses__div">
          <div
            className="offset-md-3 col-md-6 alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Registration is Closed</strong>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="offset-md-1 px-4 col-md-10">
            <h2>
              Welcome to <strong>B-A Technos</strong>
            </h2>
            <h4>Courses Page</h4>
            <p>
              Assalam u Alaikum! My name is Bilal Ahmed. I am the Founder of B-A
              Technos. I am also a React Developer. The vision behind the B-A
              Technos is to empower the youth of Pakistan so they can earn and
              support their family too. B-A Technos is a institute for all of
              those who are not able to pay a high amount of fees but eager to
              learn new technologies and earn respective income as per skills
              set. The mission behind this effort from B-A Technos is to share
              knowledge with the youth of Pakistan and grow Pakistan at the
              industry level.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
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
      <div className="container programs" data-aos="fade-up">
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
