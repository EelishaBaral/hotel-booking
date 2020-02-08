import React, { Component } from "react";
import { Col, Row, Container, Image, Card } from "react-bootstrap";
import Title from "../../../common/Title";
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

class Hotels extends Component {
  state = {
    hotelData: []
  };

  async componentDidMount() {
    Axios.get(`http://localhost:5000/api/v1/booking`).then(response =>
      this.setState({ hotelData: response.data.data })
    );
  }
  render() {
    return (
      <>
        <CardWrapper>
          <Container>
            <h3>Out Hotels</h3>

            <Row>
              {this.state.hotelData.map(data => {
                return (
                  <Col className="max-auto mt-3" md={4} sm={10}>
                    <Link to={`/hotels/${data._id}`}>
                      <Card>
                        <Image
                          src={`http://localhost:5000/uploads/${data.photo}`}
                          className="src"
                        />

                        <Card.Body>
                          <h6>{data.name}</h6>
                          <i class="fas fa-sm fa-map-marker-alt"></i>{" "}
                          <a href="#">{data.address}</a>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </CardWrapper>
        <Footer />
      </>
    );
  }
}
const CardWrapper = styled.div`
  font-family: " Girassol", cursive;
  padding-top: 20px;
  h3 {
    padding-top: 20px;
    font-size: 28px;
    color: #44c27b;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    position: relative;
    padding-bottom: 10px;
  }
  a {
    text-decoration: none;
  }
  cursor: pointer;
  padding: 40px 0;
  .card {
    border: none;
    box-shadow: 0px 0px 5px 0px rgb(184, 184, 184);
  }
`;

export default Hotels;
