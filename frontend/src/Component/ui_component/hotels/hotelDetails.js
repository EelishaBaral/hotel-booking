import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Footer from "../Footer/Footer";


class HotelDetails extends Component {
  state = {
    hotelData: {},
    value: 0,
    review:[
      
    ]
  };
  async componentDidMount() {
    Axios.get(
      ` http://localhost:5000/api/v1/booking/${this.props.match.params.id}`
    ).then(response => this.setState({ hotelData: response.data.data }));
  }
  handleFormData = formData => {
    this.setState({ review: [formData, ...this.state.review] });
    toast.success("Inserted");
  };

  render() {
    return (
      <DetailWrapper>
        <Container>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-7 book">
              <img
                src={`http://localhost:5000/uploads/${this.state.hotelData.photo}`}
                alt=""
              />
            </div>
            <div className="col-md-4" style={{ paddingTop: "30px" }}>
              <h4>{this.state.hotelData.name}</h4>
              <h6>{this.state.hotelData.address}</h6>
              <h6>{this.state.hotelData.email}</h6>
              <h6>{this.state.hotelData.phone}</h6>
              <br />
              <Link to="/bookingForm" className="button">
              <button type="submit">Book Now</button>
              </Link>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "35px" }}>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <h5>Description</h5>
              <p style={{ textAlign: "justify" }}>
                {this.state.hotelData.description}
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3">
              <h5>Features</h5>
              {this.state.hotelData.features
                ? this.state.hotelData.features
                    .split(",")
                    .map(features => <p>{features}</p>)
                : ""}
            </div>
          </div>
        </Container>
  <br />
   
          );
        

        <Footer />
      </DetailWrapper>
    );
  }
}

const DetailWrapper = styled.div`
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
  .book {
    display: inline;
  }

  button:hover {
    background: #13a456;
  }
  h2 {
    margin-bottom: 20px;
  }
  h4,
  h5 {
    color: #44c27b;
  }
  margin-top: 50px;
  img {
    padding: 10px;
    display: block;

    width: 100%;
  }
`;

export default HotelDetails;
