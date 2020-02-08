import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

class Selectroom extends Component {
  state = {};
  render() {
    return (
      <div>
        <RoomWrapper>
          <Container>
            <div className="card">
              <div className="card-header">
                <h4>Choose room</h4>
              </div>
              <div className="card-body">
                <div className="chooseRoom">
                  <h5>Room Type</h5>
                  <Form>
                    {["checkbox"].map(type => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Single"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label=" Double"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label="King sized"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label="Interconnected room"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>

                <h5>Select Room Number</h5>
                <Form.Control as="select" style={{ width: "250px" }}>
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
                <Link to="/bookingForm">
                  <div
                    className="button"
                    style={{ paddingLeft: "550px", paddingTop: "20px" }}
                  >
                    <button type="submit">Next</button>
                  </div>
                </Link>
              </div>
            </div>
          </Container>
          <Footer />
        </RoomWrapper>
      </div>
    );
  }
}

export default Selectroom;
const RoomWrapper = styled.section`
  font-family: " Girassol", cursive;
  padding-top: 30px;
  .container {
    padding-bottom: 30px;
  }

  h4 {
    margin: 0 auto;
  }
  .card-body {
    padding-left: 50px;
  }
  h5 {
    padding-top: 20px;
    color: #44c27b;
  }
  button {
    background: #18d26e;
    border: 0;
    padding: 5px 20px;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }

  button:hover {
    background: #13a456;
  }
`;
