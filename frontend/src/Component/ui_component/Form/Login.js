import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Joi from "@hapi/joi";
import axios from "axios";
import config from "../../../../src/config.json";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: {}
    };
  }

  schema = Joi.object({
    email: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),

    repeat_password: Joi.ref("password"),

    access_token: [Joi.string(), Joi.number()],

    birth_year: Joi.number()
      .integer()
      .min(1900)
      .max(2013),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    })
  })
    .with("username", "birth_year")
    .xor("password", "access_token")
    .with("password", "repeat_password");

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    let response = await axios.post(`${config.apiEndpoint}/auth/login`, {
      email: this.state.email,
      password: this.state.password
    });
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      const headers = {
        Authorization: `Bearer ${response.data.token}`
      };

      axios
        .get(`${config.apiEndpoint}/auth/me`, { headers })
        .then(res => {
          console.log(res);
          if (res.data.result.role === "admin") {
            window.location = "/dashboard";
            console.log("hello");
          } else if (res.data.result.role === "user") {
            window.location = "/";
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <LoginSection>
        <div className="hint-text text-right ">
          <Link to="/Signup" style={{ color: "#fff" }}>
            New to Booking.com? Create a free account?
          </Link>
        </div>
        <div className="card my-5 mx-auto container card-layout">
          <div className="card-header card-header-layout">
            <h4 style={{ color: " #44c27b", textAlign: "center" }}>
              Welcome Back
            </h4>
          </div>

          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.state.error.email}</div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.state.error.password}</div>
              </div>
              <button type="submit" className="btn btn-block  submit-btn">
                LOGIN
              </button>
              <br />
              <center>
                <Link to="ForgotPassword">
                  <p>Forgot Password ??</p>
                </Link>
              </center>
              <br />
              <h6>
                <center> OR LOGIN WITH</center>
              </h6>
              <p>
                <Link to="/" className="btn btn-block btn-facebook">
                  <i className="fab fa-facebook-f"></i> Sign Up via Facebook
                </Link>
                <Link to="/" className="btn btn-block btn-google">
                  <i className="fab fa-sm fa-google"></i> Sign Up via Google
                </Link>
              </p>
            </form>
          </div>
        </div>
      </LoginSection>
    );
  }
}
export default Login;
const LoginSection = styled.div`
  background-image: linear-gradient(to right, #9f96964f, #4b464d99),
    url("images/banner2.jpg");
  background-size: cover;
  height: 100vh;
  font-family: " Girassol", cursive;
  .card {
    box-shadow: 9px 9px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 5px;
    border: none !important;
  }
  .card-layout {
    width: 400px !important;
    border: #ced4da solid 1px !important;
  }
  .card-header-layout {
    background: #ffffff;
    color: #000;
  }

  .submit-btn {
    color: #fff;
    border: 0;
    padding: 10px 30px;
    background-color: #44c27b;
    transition: 0.4s;
    cursor: pointer;
  }
  .submit-btn:hover {
    background: #13a456;
  }
  .submit-btn:hover {
    color: #fff;
  }

  .btn-facebook {
    background: #3b5998;
    color: #fff;
  }
  .btn-google {
    background: #4488fd;
    color: #fff;
    margin-top: 12px !important;
  }

  h6 center {
    padding-bottom: 6px;
    color: #44c27b;
    font-size: 13px;
  }
  .btn-facebook:hover {
    background: #203a72;
  }
  .btn-google:hover {
    background: #23509e;
  }

  .btn-facebook:hover,
  .btn-google:hover {
    color: #fff;
  }
  h3 {
    color: #3b28cc;
    text-align: center;
  }
  .card-header-layout p {
    color: #403b62;

    text-align: center;
  }

  .checkbox-inline {
    margin-top: 12px;
  }
`;
