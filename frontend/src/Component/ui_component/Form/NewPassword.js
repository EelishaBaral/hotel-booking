import React, { Component } from "react";
import styled from "styled-components";

class NewPassword extends Component {
  render() {
    return (
      <div>
        <PasswordSection className="container">
          <div className="card my-5 mx-auto container card-layout">
            <div className="card-header card-header-layout">
              <h3>FORGOT PASSWORD</h3>
            </div>
            <div className="card-body">
              <div className="form">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                  />
                  <div style={{ color: "red" }}></div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-block btn-primary submit-btn"
            >
              Submit
            </button>
          </div>
        </PasswordSection>
      </div>
    );
  }
}
export default NewPassword;

const PasswordSection = styled.div`
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
  h3 {
    color: #3b28cc;
    text-align: center;
  }
  .submit-btn {
    background: #3b28cc;
    color: #fff;
  }
  .submit-btn:hover {
    background: #1705a0;
  }
`;
