import React, { Component } from "react";
import styled from "styled-components";
import { Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
class bookingForm extends Component {
  state = {};

  render() {
    return (
      <>
        <FormSection>
          <div className="col-md-12" style={{paddingLeft:"150px"}}>
            <Card
              style={{
                marginLeft: "50px",
                marginRight: "50px",
                marginTop: "50px",
                width: "800px"
              }}
            >
              <Card.Header>
                <Nav variant="pills" defaultActiveKey="#first">
                  <Link to="/bookingForm" className="text">
                    User Infomation
                  </Link>
                  &emsp;
                  <Link to="/payment" className="text">
                    {" "}
                    Select Payment Method{" "}
                  </Link>
                  &emsp;
                  <Link to="/booked" className="text">
                    Booking Completed!!
                  </Link>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title>Please Enter Your Booking Details</Card.Title>
                <div classname="Form">
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>Name</h6>
                    </div>
                    <br />
                    <div className="col-md-8">
                      <input type="text" placeholder="Full name" />
                    </div>
                  </div>
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>Contact no.</h6>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                  </div>
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>Email</h6>
                    </div>
                    <div className="col-md-8">
                      <input type="Email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>Room type &emsp;</h6>
                    </div>
                    &emsp;
                    <input type="radio" name="room" value="single room" />
                    Single Bed Room &emsp;
                    <input type="radio" name="room" value="suite" />
                    Suite &emsp;
                    <input type="radio" name="room" value="doubleroom" /> Double
                    Bed Room &emsp;
                    <input type="radio" name="room" value="deluxe" /> Deluxe
                  </div>
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>No.of Room</h6>
                    </div>
                    <div className="col-md-8">
                      <select>
                        <option value="" selected hidden>
                          no of rooms
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>No.of Customer</h6>
                    </div>
                    &emsp;{" "}
                    <select>
                      <option value="" selected hidden>
                        Adults
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    &emsp;
                    <select>
                      <option value="" selected hidden>
                        Children
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>Check-In</h6>
                    </div>
                    <div className="col-md-8">
                      <input type="date" />
                    </div>
                  </div>
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>Check-Out</h6>
                    </div>
                    <div className="col-md-8">
                      <input type="date" />
                    </div>
                  </div>
                  <div className="row" style={{ paddingBottom: "20px" }}>
                    <div className="col-md-4">
                      <h6>Total</h6>
                    </div>
                    <div className="col-md-8">
                      <input type="number" placeholder="Total price" />
                    </div>
                  </div>
                </div>
                <Link to="/Payment">
                  <button type="submit">Next</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </FormSection>
      </>
    );
  }
}

export default bookingForm;
const FormSection = styled.div`

  font-family: " Girassol", cursive;
  button {
    background: #44c27b;
    border: 0;
    padding: 10px 30px;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
    float: center;
  }

 .text{
   font-size : 13px;
 }
 a {
  color: #13a456;
  text-decoration: strong;
  background-color: transparent;
  
}
input[type=radio] {
  width: 18px;
  height: 18px;
  
}


}
`;
