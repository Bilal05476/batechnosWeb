import React, { useState, useEffect } from "react";
import { db } from "./firebase";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  // This scroll page at top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: fullName,
        email: email,
        message: message,
        phone: phone,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFullName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };

  return (
    <div className="contact__div" data-aos="fade-right">
      <br />
      <h3 className="text-center">Contact</h3>
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
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
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
                <small id="contactHelp" className="form-text text-muted">
                  We'll never share your number with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="textarea">Your Message</label>
                <textarea
                  className="form-control"
                  id="textarea"
                  rows="3"
                  placeholder="your message"
                  name="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="send"
                className="btn-block btn__db"
                style={{ background: loader ? "#ccc" : "rgb(214, 43, 100)" }}
              >
                Send
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
