import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaHotel,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer className=".main-footer">
      <div className="row">
        <div className="col-md-4 ist-col">
          <div className="logo">
            <div className="row">
              <div className="col-md-3">
                <div className="icons">
                  <FaHotel />
                </div>
              </div>
              <div
                className="col-md-3"
                style={{
                  color: "#fff",
                  paddingTop: "8px",
                  marginBottom: "0px"
                }}
              >
                <h1>HInfo</h1>
              </div>
            </div>
          </div>

          <p style={{ fontSize: "12px", paddingBottom: "15px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed aut
            deserunt fugit perferendis. Deleniti molestiae, perferendis eum
            nobis ipsam aperiam beatae pariatur nostrum explicabo maiores velit,
            ex modi ratione suscipit? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Sed aut deserunt fugit perferendis. Deleniti
            molestiae, perferendis eum nobis ipsam aperiam beatae pariatur
            nostrum explicabo
          </p>
        </div>
        <div className="col-md-4 second-col">
          <div className="connect" style={{ paddingTop: "25px" }}>
            <h5 style={{ fontSize: "15px" }}>
              Get Connected with us through Social Media!
            </h5>
          </div>
          <div className="icon">
            <center>
              <FaGoogle /> &nbsp;&nbsp;&nbsp;
              <FaFacebook />
              &nbsp; &nbsp;&nbsp;
              <FaInstagram />
              &nbsp; &nbsp;&nbsp;
              <FaTwitter /> &nbsp; &nbsp; &nbsp;
            </center>
          </div>
        </div>
        <div className="col-md-4 last-col" style={{ paddingLeft: "22px" }}>
          <h1 style={{ padding: "10px 22px", fontSize: "18px" }}>Contact Us</h1>
          <p style={{ fontSize: "14px", paddingLeft: "22px" }}>Phone Number</p>
          <div className="row">
            <div className="col-md-1">
              <FaPhone
                style={{
                  fontSize: "0.8rem",
                  color: "#fff",
                  padding: "0px"
                }}
              />
            </div>
            <div className="col-md-6">
              <p style={{ fontSize: "12px", marginTop: "3px" }}>
                +1 5589 55488 55
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "14px",
              paddingLeft: "22px",
              paddingTop: "10px"
            }}
          >
            Email
          </p>
          <div className="row">
            <div className="col-md-1">
              <FaEnvelope
                style={{
                  fontSize: "0.8rem",
                  color: "#fff",
                  padding: "0px"
                }}
              />
            </div>
            <div className="col-md-6">
              <p style={{ fontSize: "13px", marginTop: "3px" }}>
                info@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h6 className="text-center bottom" style={{ fontSize: "15px" }}>
          Copyright &copy; {new Date().getFullYear()} Binfo.com.All rights
          reserved.
        </h6>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  font-family: " Girassol", cursive;
  padding: 0px;
  margin: 0px;

  .logo h1 {
    font-family: "Lakki Reddy", cursive;
    font-size: 25px;
    padding: 0px;
    margin: 0px;
  }
  p {
    margin-bottom: 0rem !important;
  }
  .connect p {
    padding-top: 40px;
  }
  .col-md-3 {
    padding-right: 1px;
    padding-left: 2px;
    max-width: 6%;
  }
  .row {
    padding-left: 30px;
    padding-top: 10px;
    background: #44c27b;
    color: white;
  }
  .last-col {
    padding-left: 30px;
  }
  .second-col {
    padding-left: 30px;
  }
  .ist-col {
    padding-left: 30px;
  }

  .footer-bottom {
    padding: 0px;
  }
  .icon {
    font-size: 30px;
    color: white;
    display: inline;
  }
  p {
    text-align: justify;
  }
  .bottom {
    color: #44c27b;
  }

  h6 {
    font-family: "Slabo 27px", serif;
  }
`;
