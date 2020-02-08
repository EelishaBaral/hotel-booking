import React, { Component } from "react";
import "./../section.css";
import { Col, Row, Container, Image, Card } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class CardSection extends Component {
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
      <CardWrapper>
        <Container>
          <h3>Most Popular Hotels</h3>
          <Row>
            {this.state.hotelData.map((data, idx) => {
              if (idx < 6) {
                return (
                  <Col className="max-auto mt-3" md={4} sm={10}>
                    <Link to={`/hotels/${data._id}`}>
                      <Card>
                        <Image
                          src={`http://localhost:5000/uploads/${data.photo}`}
                          className="src"
                        />

                        <Card.Body>
                          <Card.Title>
                            <div className="hoteldata">
                              <h6>{data.name}</h6>
                              <i class="fas fa-sm fa-map-marker-alt"></i>
                              <a href="#">{data.address}</a>
                            </div>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </CardWrapper>
    );
  }
}

const CardWrapper = styled.div`
  font-family: " Girassol", cursive;

  padding: 40px 0;
  h3 {
    padding-top: 20px;
    font-size: 22px;
    font-family: " Girassol", cursive;
    color: #44c27b;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    position: relative;
    padding-bottom: 10px;
  }
  .card {
    border: none;
    box-shadow: 0px 0px 5px 0px rgb(184, 184, 184);
  }
  .card .hoteldata:hover {
    text-decoration: none;
  }
`;
