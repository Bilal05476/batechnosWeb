import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/ba-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

import { db } from "./firebase";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("subscribe")
      .add({
        email: email,
      })
      .then(() => {
        setLoader(false);
        alert("Thank you for Subscribe👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setEmail("");
  };
  return (
    <>
      <div className="footer align-items-center text-white" data-aos="zoom-in">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 foot align-self-center">
              <img src={logo} alt="logoimage" className="logo__image" /> <br />
              Every SUCCESSFUL DIGITAL JOURNEY START WITH GRAPHICS DEVELOPMENT
              AND MARKETING...! Ba Technos Provide One Window Solution to our
              Foreign and Local clients to Facelift their Brands.
            </div>
            <div className="col-12 col-md-2 links align-self-center">
              <h4>Links</h4>
              <FaAngleRight color="white" />
              <NavLink className="footer-links text-light" to="/">
                Home
              </NavLink>
              <br />
              <FaAngleRight color="white" />
              <NavLink className="footer-links text-light" to="/services">
                Services
              </NavLink>
              <br />
              <FaAngleRight color="white" />
              <NavLink className="footer-links text-light" to="/about">
                About
              </NavLink>
              <br />
              <FaAngleRight color="white" />
              <NavLink className="footer-links text-light" to="/contact">
                Contact
              </NavLink>
              <br />
              <FaAngleRight color="white" />
              <NavLink className="footer-links text-light" to="/courses">
                Courses
              </NavLink>
            </div>
            <div className="col-12 col-md-3 contact align-self-center">
              <h4>Contact Us</h4>
              <p className="footer-contact">
                <FaLocationArrow className="fa-social-icons" color="white" />
                PECHS, Karachi, Pakistan
                <br />
                <FaPhoneAlt className="fa-social-icons" color="white" />
                +92-335-0037583
                <br />
                <FaEnvelope className="fa-social-icons" color="white" />
                info@batechnos.com
              </p>
              <a
                className="footer-social-links social-icons"
                href="https://www.facebook.com/batechnos25"
                target="blank"
              >
                <FaFacebookF className="facebook__link" color="white" />
              </a>
              <a
                className="footer-social-links social-icons"
                href="https://www.instagram.com/batechn05"
                target="blank"
              >
                <FaInstagram className="instagram__link" color="white" />
              </a>
              <a
                className="footer-social-links social-icons"
                href="https://api.whatsapp.com/send?phone=923350037583&text=&source=&data=&app_absent="
                target="blank"
              >
                <FaWhatsapp className="whatsapp__link" color="white" />
              </a>
              <a
                className="footer-social-links social-icons"
                href="https://www.linkedin.com/company/ba-technos"
                target="blank"
              >
                <FaLinkedin className="linkedin__link" color="white" />
              </a>
            </div>
            <form
              className="col-12 col-md-3 links align-self-center subscribe__form"
              onSubmit={handleSubmit}
            >
              <h4>Subscribe Us</h4>
              <label htmlFor="exampleInputEmail1"></label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                required
                placeholder="example@gmail.com"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="send"
                className="btn-block my-2 btn__db"
                style={{ background: loader ? "#ccc" : " rgb(255, 0, 0)" }}
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="row copyright">
            <div className=" align-items-center text-right w-100">
              <p className="copy__text"> Copyright © 2021 | BaTechnos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
