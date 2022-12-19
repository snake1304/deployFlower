import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";
import "./contact.css";

const Contact = ({ history }) => {
  const form = useRef();
  const alert = useAlert();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_497hbog",
        "template_4fuwdbn",
        form.current,
        "H1_tOpdXCim5MmBvB"
      )
      .then(
        (result) => {
          history.push("/");
          alert.success(result.text);
        },
        (error) => {
          alert.success(error.text);
        }
      );
  };

  return (
    <>
      <div className="about-sectionAbout">
        <div className="inner-widthAbout">
          <h1>Contact Us</h1>

          <div id="form-div">
            <form ref={form} onSubmit={sendEmail} className="form" id="form1">
              <p className="name">
                <input
                  name="user_name"
                  type="text"
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                  placeholder="Name"
                  id="name"
                />
              </p>

              <p className="email">
                <input
                  name="user_email"
                  type="text"
                  className="validate[required,custom[email]] feedback-input"
                  id="email"
                  placeholder="Email"
                />
              </p>

              <p className="text">
                <textarea
                  name="message"
                  resize="none"
                  className="validate[required,length[6,300]] feedback-input"
                  id="comment"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </p>

              <div className="submit">
                <input type="submit" value="Send" id="button-blue" />
                <div className="ease"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
