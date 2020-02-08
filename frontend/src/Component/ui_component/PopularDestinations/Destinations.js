import React, { Component } from "react";
import Slider from "react-slick";
import { Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Recommendeddata } from "./data";

class PopularDestination extends Component {
  state = {};
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 2000
    };
    return (
      <>
        <Homewrapper>
          <Container>
            <h3>Popular Destinations</h3>
            <Slider {...settings}>
              {Recommendeddata.map(data => {
                return (
                  <Col key={data.id}>
                    <Card>
                      <div className="image">
                        <img src={data.image} className="image" alt="" />
                        <br />
                        <h6>{data.title}</h6>
                        <h6 className="search">
                          <Link to="/Book" className="button">
                            {data.hotel}
                          </Link>
                        </h6>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Slider>
          </Container>
        </Homewrapper>
      </>
    );
  }
}
export default PopularDestination;
const Homewrapper = styled.div`
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
    height: 270px;
    margin-top: 20px;
    width: 240px;
  }
  .image {
    height: 200px;

    width: 250px;
  }
  h6 {
    margin-left: 10px;
    display: inline;
    font-family: " Girassol", cursive;
  }
  .search {
    display: inline;
    float: right;
    margin-right: 20px;
  }
  .button:hover {
    text-decoration: none;
    color: #44c27b;
  }
`;
