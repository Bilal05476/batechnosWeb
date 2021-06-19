import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Home from "./Home";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <nav className=" navbar navbar-expand-md fixed-top" data-aos="zoom-in">
        <div className="container mx-auto">
          {location.pathname === "/" ? (
            <>
              <a className="navbar-brand" href="#home">
                <img
                  src={logo}
                  alt="logoimage"
                  className="logo__image"
                  data-aos="fade-up"
                />
              </a>
            </>
          ) : (
            <>
              <NavLink className="navbar-brand" to="/" exact>
                <img
                  src={logo}
                  alt="logoimage"
                  className="logo__image"
                  data-aos="fade-up"
                />
              </NavLink>
            </>
          )}

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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {location.pathname === "/" ? (
                  <>
                    <a
                      activeclassname="menu_active"
                      className="nav-link if_hover text-dark"
                      href="#home"
                    >
                      Home
                    </a>
                  </>
                ) : (
                  <>
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link if_hover text-dark"
                      to="/"
                      exact
                    >
                      Home
                    </NavLink>
                  </>
                )}
              </li>
              <li className="nav-item">
                {location.pathname === "/" ? (
                  <>
                    <a
                      activeclassname="menu_active"
                      className="nav-link if_hover text-dark"
                      href="#services"
                    >
                      Services
                    </a>
                  </>
                ) : (
                  <>
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link if_hover text-dark"
                      to="/services"
                      exact
                    >
                      Services
                    </NavLink>
                  </>
                )}
              </li>
              <li className="nav-item">
                {location.pathname === "/" ? (
                  <>
                    <a
                      activeclassname="menu_active"
                      className="nav-link if_hover text-dark"
                      href="#about"
                    >
                      About
                    </a>
                  </>
                ) : (
                  <>
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link if_hover text-dark"
                      to="/about"
                      exact
                    >
                      About
                    </NavLink>
                  </>
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link if_hover text-dark"
                  to="/courses"
                  exact
                >
                  Courses &nbsp;
                  <span className="badge badge-success">New</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="navigation">
                  {location.pathname === "/" ? (
                    <>
                      <a className="btn__services sm__btn" href="#contact">
                        Contact
                      </a>
                    </>
                  ) : (
                    <>
                      <NavLink className="btn__services sm__btn" to="/contact">
                        Contact
                      </NavLink>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <div className="navigation d-none d-md-block">
            {location.pathname === "/" ? (
              <>
                <a className="btn__services lg__btn" href="#contact">
                  Contact
                </a>
              </>
            ) : (
              <>
                <NavLink className="btn__services lg__btn" to="/contact">
                  Contact
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      {location.pathname === "/" && (
        <>
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </>
      )}
    </>
  );
};
export default Navbar;
