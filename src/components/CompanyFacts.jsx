import React from "react";
import "./CompanyFacts.css";
import { BiHappyAlt } from "react-icons/bi";

const CompanyFacts = () => {
  return (
    <div className="conatiner-fluid companyFacts">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>
              Some of Our Company
              <br /> Real Facts
            </h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut harum aliquam cupiditate nam quibusdam ratione, in distinctio
              suscipit ullam?
            </p>
          </div>
          <div className="col-md-6 facts">
            <div className="clients-div">
              <BiHappyAlt className="facts-icons" />
              <strong>10+</strong>
              <small>Happy clients</small>
            </div>
            <div className="projects-div">
              <BiHappyAlt className="facts-icons" />
              <strong>15+</strong>
              <small>Project Completed</small>
            </div>
            <div className="team-div">
              <BiHappyAlt className="facts-icons" />
              <strong>4+</strong>
              <small>Team of People</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyFacts;
