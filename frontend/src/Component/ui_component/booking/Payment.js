import React, { Component } from "react";
import styled from "styled-components";
import paypal from "./img/paypal.png";
import visa from "./img/visa.png";
import esewa from "./img/esewa.png";
import khalti from "./img/khalti.png";
import { Card } from "react-bootstrap";
class Payment extends Component {
  state = { isActive: false };

  render() {
    return (
      <FormSection>
        <div className="row" style={{ paddingBottom: "20px" ,paddingLeft:"400px"}}>
          <Card
            style={{
              
              paddingTop: "20px",
              marginLeft: "50px",
              marginRight: "50px",
              marginTop: "50px",
              height: "400px",
              width: "500px"
              
            
            }}
          >
            <div className="col-md-4"></div>
            <div classname="col-md-8">
              <h5 style={{ paddingLeft: "20px" }}>
                {" "}
                Available payment methods
              </h5>
              </div>
              <img src={paypal} className="card" />
              <img src={esewa} className="card" />
              <img src={khalti} className="card" />
              <img src={visa} className="card" />
              <br />
              <div className="row">
                <div className="col-md-1"></div>
              <div
                classname="col-md-6"
                style={{ paddingTop: "20px", paddingLeft: "20px" }}
              >
                <h6>Select Payment Method</h6>
                <select>
                  <option value="" selected hidden>
                    Select Payment Method
                  </option>
                  <option>esewa</option>
                  <option>Khalti</option>
                  <option>Paypal</option>
                  <option>VISA</option>
                </select>
                </div>
              
            </div>
            <br />

            <div className="row">
            <div className="col-md-1"></div>
              <div className="col-md-5">
                <h6>Card Holder's Name:<input type="text" /></h6>
                
              </div>
            
           
            
              <div className="col-md-5">
                <h6>Card Number:<input type="Number" /></h6>
                
              </div>
              <div className="col-md-1"></div>
            </div>
            <button type="submit">Pay and Book</button>
          </Card>
        </div>
      </FormSection>
    );
  }
}

export default Payment;
const FormSection = styled.div`
  .card {
    height: 50px;
    width: 50px;
    display: Inline;
    margin-left: 20px;
  }
  button {
    background: #44c27b;
    border: 0;
    margin-left: 20px;
    margin-top: 20px;
    margin-down: 20px;
    padding: 10px 30px;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
    float: center;
  }
`;
