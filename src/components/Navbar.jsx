import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top" data-aos="zoom-in">
        <div className="container-fluid my-2 mx-2">
          <NavLink className="navbar-brand text-light" to="/" exact>
            <h3>B-A TECHNOS</h3>
          </NavLink>
          <div
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="line line_1"></div>
            <div className="line line_2"></div>
            <div className="line line_3"></div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link if_hover"
                  to="/"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link if_hover"
                  to="/services"
                  exact
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link if_hover"
                  to="/courses"
                  exact
                >
                  Courses &nbsp;
                  <span className="badge badge-success">New</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="navigation">
                  <NavLink
                    className="light_btn btn__services sm__btn"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="navigation d-none d-md-block">
            <NavLink className="light_btn btn__services lg__btn" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
