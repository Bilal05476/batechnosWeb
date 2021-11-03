import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Banner from "../images/banner.svg";

const Landing = () => {
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const [loader, setLoader] = useState(false);
  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Demo")
      .add({
        Business: businessName,
        Ownername: ownerName,
        BusinessEmail: email,
        Requirements: message,
        BusinessNumber: phone,
        Service: service,
      })
      .then(() => {
        setLoader(false);
        alert("Your request has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setBusinessName("");
    setOwnerName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setService("");
  };

  return (
    <>
      <div className="main container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 content">
            <h2 className="main__heading">Digital Creative Solution</h2>
            <h1 className="caption">
              UNDERSTAND EVERY CUSTOMER'S JOURNEY WITH INSTANT INSIGHTS
            </h1>
            <img src={Banner} alt="content img" className="content__img" />
            <br />
            <br />
            <div className="text-center">
              <a href="https://www.facebook.com/batechnos25" target="blank">
                <FaFacebookSquare
                  className="text-light landing__links"
                  color="white"
                />
              </a>
              <a href="https://www.instagram.com/batechn05/" target="blank">
                <FaInstagram
                  className="text-light landing__links"
                  color="white"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=923350037583&text=&source=&data=&app_absent="
                target="blank"
              >
                <FaWhatsapp
                  className="text-light landing__links"
                  color="white"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ba-technos"
                target="blank"
              >
                <FaLinkedin
                  className="text-light landing__links"
                  color="white"
                />
              </a>
            </div>
          </div>

          <form className="col-md-4 demo__form" onSubmit={handleSubmit}>
            <div
              className="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <strong>Demo of our Services!</strong>
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <h2 className="text-center form__heading">Request a Demo</h2>
            <div className="form-group demoFormGroup">
              <label htmlFor="email">Business Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="form-group demoFormGroup">
              <label htmlFor="bname">Business Name</label>
              <input
                type="text"
                className="form-control"
                id="bname"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Tech Control"
                required
              />
            </div>
            <div className="form-group demoFormGroup">
              <label htmlFor="owner">Business Owner</label>
              <input
                type="text"
                className="form-control"
                id="owner"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="John Smith"
                required
              />
            </div>
            <div className="form-group demoFormGroup">
              <label htmlFor="number">Business Number</label>
              <input
                type="number"
                className="form-control"
                id="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+000 000 000"
                required
              />
            </div>
            <div className="form-group demoFormGroup">
              <label htmlFor="formService">Service</label>
              <input
                type="text"
                className="form-control"
                id="formService"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                placeholder="Development, Designing, Marketing"
              />
            </div>
            <div className="form-group demoFormGroup">
              <label htmlFor="textarea">Your Requirements</label>
              <textarea
                className="form-control"
                id="textarea"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              style={{ display: loader ? "none" : "block" }}
              className="btn btn-block btn-outline-primary demo__btn"
              data-target="#"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Landing;
