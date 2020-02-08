import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Joi from "@hapi/joi";
import Axios from "axios";
import config from "../../../../src/config.json";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      error: {}
    };
  }
  schema = Joi.object({
    FirstName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    LastName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    Email: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),

    ConfirmPassword: Joi.ref("password"),

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
    .with("password", "ConfirmPassword");

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      FirstName,
      LastName,
      email,
      password,
      ConfirmPassword
    } = this.state;
    let result = this.schema.validate(
      {
        FirstName: FirstName,
        LastName: LastName,
        email: email,
        password: password,
        ConfirmPassword: ConfirmPassword
      },
      { abortEarly: false }
    );
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    console.log(errors);
    this.setState({ error: errors });
    let response = await Axios.post(`${config.apiEndpoint}/auth/register`, {
      name: this.state.FirstName,
      email: this.state.email,
      password: this.state.password
    });
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      const headers = {
        Authorization: `Bearer ${response.data.token}`
      };
      Axios.get(`${config.apiEndpoint}/auth/me`, { headers })
        .then(res => {
          console.log(res);
          if (res.data.result.role === "user") {
            this.props.history.push("/DetailData");
            window.location = "/DetailData";
            console.log("hello");
          }
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    const {
      FirstName,
      LastName,
      email,
      password,
      ConfirmPassword
    } = this.state;
    return (
      <LoginSection>
        <div className="hint-text  text-right">
          <Link to="Login" style={{ color: "#fff" }}>
            Already have an account? Login
          </Link>
        </div>
        <div className="card my-5 mx-auto container card-layout">
          <div className="card-header card-header-layout">
            <h5 style={{ color: " #44c27b" }}>
              <center>Create a free account</center>
            </h5>
          </div>

          <div className="card-body">
            <form action="#" autoComplete="on" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="FirstName"
                  className="form-control"
                  placeholder="First Name"
                  value={FirstName}
                  name="FirstName"
                  onChange={this.handleChange}
                />

                <div style={{ color: "red" }}>{this.state.error.FirstName}</div>
              </div>

              <div className="form-group">
                <input
                  type="LastName"
                  className="form-control"
                  placeholder="Last Name"
                  value={LastName}
                  name="LastName"
                  onChange={this.handleChange}
                />

                <div style={{ color: "red" }}>{this.state.error.LastName}</div>
              </div>
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

              <div className="form-group">
                <input
                  type="Password"
                  className="form-control"
                  placeholder="ConfirmPassword"
                  value={ConfirmPassword}
                  name="ConfirmPassword"
                  onChange={this.handleChange}
                />
                <div style={{ color: "red" }}>{this.state.error.password}</div>
              </div>

              <button
                type="submit"
                className="btn btn-block submit-btn"
                style={{ backgroundColor: "#44c27b" }}
              >
                CREATE A FREE ACCOUNT
              </button>
              <div className="form-group">
                <br />
                <h6 className="sign">
                  <center>OR SIGN UP WITH</center>
                </h6>
                <p>
                  <Link to="/" className="btn btn-block btn-facebook">
                    <i className="fab fa-facebook-f"></i>  Sign Up via Facebook
                  </Link>
                  <Link to="/" className="btn btn-block btn-google">
                    <i className="fab fa-sm fa-google"></i>  Sign Up via Google
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </LoginSection>
    );
  }
}
export default Signup;
const LoginSection = styled.div`
  background-image: linear-gradient(to right, #9f96964f, #4b464d99),
    url("images/banner2.jpg");
  background-size: cover;
  height: 120vh;
  font-family: " Girassol", cursive;
  .card {
    box-shadow: 9px 9px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 0px;
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
  .checkbox-inline {
    margin-top: 12px;
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

  .btn-google:hover {
    background: #23509e;
  }

  .btn-facebook:hover,
  .btn-google:hover {
    color: #fff;
  }

  .card-header-layout p {
    color: #403b62;
    text-align: center;
  }
  h6 center {
    padding-bottom: 6px;
    color: #44c27b;
    font-size: 13px;
  }
`;
