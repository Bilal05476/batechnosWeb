import React, { useState } from "react";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [city, setCity] = useState("");
  const [qualification, setQualification] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("enrollements")
      .add({
        name: fullName,
        email: email,
        course: course,
        phone: phone,
        city: city,
        qualification: qualification,
      })
      .then(() => {
        setLoader(false);
        alert("Your details has been submitted! We Reach out to you shortly👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFullName("");
    setEmail("");
    setCourse("");
    setPhone("");
    setCity("");
    setQualification("");
  };
  const handleSelect = (e) => {
    console.log(e);
    setCourse(e);
  };

  return (
    <div className="contact__div" data-aos="fade-right">
      <br />
      <h3 className="text-center">Register For Course</h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8 col-12">
            <form className="font-weight-bold" onSubmit={handleSubmit}>
              <div className="form-group ">
                <label htmlFor="mail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="mail"
                  required
                  placeholder="example@gmail.com"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  placeholder="your name"
                  name="FullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact Num</label>
                <input
                  type="number"
                  className="form-control"
                  id="contact"
                  required
                  placeholder="923XXXXXXXX"
                  name="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  required
                  placeholder="karachi/Lahore/Islamabad"
                  name="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="qualification">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  id="qualification"
                  required
                  placeholder="Any"
                  name="Qualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Course Name</label>

                <DropdownButton
                  title={!course ? "select" : course}
                  id="dropdown-menu"
                  className="selectBtn"
                  onSelect={handleSelect}
                  required
                >
                  <Dropdown.Item eventKey="Static website development">
                    Static website development
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="React website development">
                    React website development
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Python programming">
                    Python programming
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              {fullName === "" ||
              email === "" ||
              city === "" ||
              phone === "" ||
              qualification === "" ||
              course === "" ? (
                <button type="send" className="btn-block btn__disable" disabled>
                  Register
                </button>
              ) : (
                <button
                  type="send"
                  className="btn-block btn__db"
                  style={{
                    background: loader ? "#ccc" : "rgb(214, 43, 100)",
                  }}
                >
                  Register
                </button>
              )}
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
