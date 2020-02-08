import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import {Link} from "react-router-dom"
class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <div className="card">
            <center>
              <div className="card-title" style={{ padding: "20px" }}>
                Welcome to the Dashboard
              </div>
            </center>
            <div className="card-body">
              <div className="row" style={{ paddingBottom: "50px" }}>
                <div className="col-md-6">
                  <Card bg="light" style={{ width: "28rem" }}>
                  <Link to="/Dashboard/Hotel">
                    <Card.Body>
                    
                      <Card.Text>
                        <center>
                          <i
                            className="metismenu-icon pe-7s-culture"
                            style={{ fontSize: "80px" }}
                          />
                        </center>
                      </Card.Text>
                    </Card.Body>
                    <Card.Header>
                      
                      <h5 style={{ fontSize: "18px", margin: "0 auto" }}>
                        List of Hotels
                      </h5>
                      
                    </Card.Header>
                    </Link>
                  </Card>
                </div>

                <div className="col-md-6">
                  
                  <Card bg="light" style={{ width: "28rem" }}>
                  <Link to="/Dashboard/UploadImage">
                    <Card.Body>
                      <Card.Text>
                        <center>
                          <i
                            className="metismenu-icon pe-7s-photo"
                            style={{ fontSize: "80px" }}
                          />
                        </center>
                      </Card.Text>
                    </Card.Body>
                  
                    <Card.Header>
                      <h5 style={{ fontSize: "18px", margin: "0 auto" }}>
                        Upload an image of Hotel
                      </h5>
                    </Card.Header>
                    </Link>
                  </Card>
                </div>
              </div>
              <div className="row" style={{ paddingBottom: "50px" }}>
                <div className="col-md-6">
                  <Card bg="light" style={{ width: "28rem" }}>
                  <Link to="/Dashboard/MemberList">
                    <Card.Body>
                      <Card.Text>
                        <center>
                          <i
                            className="metismenu-icon pe-7s-users"
                            style={{ fontSize: "80px" }}
                          />
                        </center>
                      </Card.Text>
                    </Card.Body>
                    <Card.Header>
                      <h5 style={{ fontSize: "18px", margin: "0 auto" }}>
                        Members
                      </h5>
                    </Card.Header>
                    </Link>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card bg="light" style={{ width: "28rem" }}>
                  <Link to="/Dashboard/BookingInformation">
                    <Card.Body>
                      <Card.Text>
                        <center>
                          <i
                            className="metismenu-icon pe-7s-note2"
                            style={{ fontSize: "80px" }}
                          />
                        </center>
                      </Card.Text>
                    </Card.Body>
                    <Card.Header>
                      <h5 style={{ fontSize: "18px", margin: "0 auto" }}>
                      Booking Information
                      </h5>
                    </Card.Header>
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </HomeWrapper>
      </div>
    );
  }
}

export default Home;
const HomeWrapper = styled.section`
  font-family: " Girassol", cursive;
 a{
   color:#44c27b
 }
`;
