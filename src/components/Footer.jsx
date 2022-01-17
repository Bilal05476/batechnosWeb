import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
      <div className="footer align-items-center text-white">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-12 col-md-3 foot">
              <NavLink className="navbar-brand text-light" to="/" exact>
                <h3>B-A TECHNOS</h3>
              </NavLink>{" "}
              <br />
              B-A TECHNOS provides a One-stop solution to our Foreign and Local
              clients to facelift their Brands.
            </div>
            <div className="col-12 col-md-2 links">
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
              <NavLink className="footer-links text-light" to="/demo">
                Demo
              </NavLink>
              <br />
              <FaAngleRight color="white" />
              <NavLink className="footer-links text-light" to="/courses">
                Courses
              </NavLink>
              <br />
              <FaAngleRight color="white" />
              <NavLink className="footer-links text-light" to="/contact">
                Contact
              </NavLink>
            </div>
            <div className="col-12 col-md-3 contact">
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
              className="col-12 col-md-3 links subscribe__form"
              onSubmit={handleSubmit}
            >
              <h4>Subscribe Us</h4>
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
                className="btn__db"
                style={{
                  background: loader ? "#ccc" : " rgb(255, 0, 0)",
                  border: loader ? "none" : "2px solid red",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="row copyright">
            <div className=" align-items-center text-center text-muted w-100">
              <p className="copy__text"> Copyright © 2022 | B-A Technos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
