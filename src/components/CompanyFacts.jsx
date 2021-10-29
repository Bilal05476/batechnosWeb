import React from "react";
import "./CompanyFacts.css";
import { BiHappyAlt } from "react-icons/bi";
import { FaTeamspeak } from "react-icons/fa";
import {AiOutlineProject} from "react-icons/ai";
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
              B-A Technos provides the best services to clients as their
              requirements. We have our happy clients who work with us. We
              complete our projects with a target-oriented approach with highly
              skillful team members.
            </p>
          </div>
          <div className="col-md-6 facts">
            <div className="clients-div">
              <BiHappyAlt className="facts-icons" />
              <strong>10+</strong>
              <small>Happy clients</small>
            </div>
            <div className="projects-div">
              <AiOutlineProject className="facts-icons" />
              <strong>15+</strong>
              <small>Project Completed</small>
            </div>
            <div className="team-div">
              <FaTeamspeak className="facts-icons" />
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
