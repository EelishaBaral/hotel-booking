import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import Footer from "../Footer/Footer";

export default function RoomPanel({ room }) {
  return (
    <>
      <Card style={{ margin: "16px 0px" }}>
        <Card.Body>
          <CardWrapper>
            <Link to={`/hotels/${room._id}`}>
              <Row>
                <Col md="4" className="cardImage">
                  <Card.Img
                    variant="top"
                    src={`http://localhost:5000/uploads/${room.photo}`}
                  />
                </Col>

                <Col md="8">
                  <Card.Title>{room.name}</Card.Title>
                  <i class="fas fa-map-marker-alt" />
                  <span>{room.address}</span>
                  {room.location}
                  <hr />
                  <Card.Text>
                    <Row>
                      <Col md="8">
                        <ul>
                          <li>Email: {room.email}</li>
                          <li>phone: {room.phone}</li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Text>
                </Col>
              </Row>
            </Link>
          </CardWrapper>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
}

const CardWrapper = Styled.div`
  i {
    display: inline-block;
    margin-right: 1em;
  }
  span {
    color: green
  }

   .cardImage img{
    height:200px;
    width:200px;
    object-fit:cover;
  }
`;
