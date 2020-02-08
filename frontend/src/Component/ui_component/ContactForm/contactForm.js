import React, { Component } from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope } from "react-icons/fa";
class Contact extends Component {
  render() {
    return (
      <div>
        <ContactWrapper>
          <section id="contact" className="section-bg wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h3>Contact Us</h3>
              </div>
              <div className="row contact-info">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className="contact-phone">
                    <center>
                      <FaPhone
                        style={{
                          fontSize: "2.5rem",
                          color: "#44c27b",
                          paddingBottom: "20px"
                        }}
                      />
                    </center>
                    <h3>Phone Number</h3>
                    <p>
                      <a href="tel:+155895548855">+1 5589 55488 55</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-email">
                    <FaEnvelope
                      style={{
                        fontSize: "2.5rem",
                        color: "#44c27b",
                        paddingBottom: "20px"
                      }}
                    />
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="form">
                    <div id="errormessage" />
                    <form
                      action
                      method="post"
                      role="form"
                      className="contactForm"
                    >
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                          />
                          <div className="validation" />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                          />
                          <div className="validation" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validation" />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                        />
                        <div className="validation" />
                      </div>
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </section>
        </ContactWrapper>
      </div>
    );
  }
}

export default Contact;
const ContactWrapper = styled.section`
  padding: 60px 0;
  font-family: " Girassol", cursive;
  .section-header h3 {
    font-size: 22px;
    color: #44c27b;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    position: relative;
    padding-bottom: 15px;
  }

  .contact-info {
    margin-bottom: 20px;
    text-align: center;
  }

  .contact-info i {
    font-size: 48px;
    display: inline-block;
    margin-bottom: 10px;
    color: #18d26e;
  }

  .contact-info address,
  .contact-info p {
    margin-bottom: 0;
    color: #000;
  }

  .contact-info h3 {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: #999;
  }

  .contact-info a {
    color: #000;
  }

  .contact-info a:hover {
    color: #18d26e;
  }
  .contact-phone {
    border-right: 1px solid #ddd;
  }

  .contact-address,
  .contact-phone,
  .contact-email {
    margin-bottom: 20px;
  }

  .form input,
  .form textarea {
    padding: 10px 14px;
    border-radius: 0;
    box-shadow: none;
    font-size: 15px;
  }

  .form button {
    background: #18d26e;
    border: 0;
    padding: 10px 30px;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }

  .form button:hover {
    background: #13a456;
  }
`;
