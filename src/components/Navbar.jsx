import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [navbarIcon, setNavbarIcon] = useState(false);
  const location = useLocation();

  // Change Navbar Background
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    // changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    if (
      location.pathname === "/contact" ||
      location.pathname === "/register" ||
      location.pathname === "/coursesdetails"
    ) {
      setNavbarBackground(true);
    }
  });
  return (
    <>
      <nav
        className={`navbar navbar-expand-md fixed-top ${
          navbarBackground ? "scrollNavbar" : ""
        } ${navbarIcon ? "blurryBack" : ""}`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/" exact>
            <h3 className="logo">B-A TECHNOS</h3>
          </NavLink>
          <div
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setNavbarIcon(!navbarIcon)}
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
                  to="/demo"
                  exact
                >
                  Demo
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
