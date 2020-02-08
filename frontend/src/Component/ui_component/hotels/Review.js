import React, { Component } from "react";
import styled from "styled-components";
import httpServices from "../../../service/httpServices";
import config from "../Dashboard/config.json";
import BeautyStars from "beauty-stars";
import uuid from "uuid";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      review: "",
      error:{}
 
    };
  }


  componentDidMount = () => {
    this.getUser();
  };
  getUser = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    let response = await httpServices.get(`${config.apiEndPoint}/auth/me`, {
      headers
    });
    this.setState({ UserData: response.data.result });
    console.log(response);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { comment } = this.state;
    if (comment === "") {
      this.setState({ error: { comment: "please Enter the comment first" } });
      return;
    }
   this.props.formData({ ...this.state, id: uuid() });
  this.setState({ comment: "", error: "" });

  };

  render() {
    const { comment} = this.state;
    return (
      <DetailWrapper>
        <div className="container">
          <div className="row">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <h5 className="review" style={{ paddingTop: "30px" }}>
                  review Here
                </h5>
                <h6>Rating :</h6>
                <BeautyStars
                  className="star"
                  value={this.state.value}
                  onChange={value => this.setState({ value })}
                />
                <br />

                <textarea
                  className="box"
                  rows="4"
                  cols="60"
                  placeholder="  Write your message here"
                  onChange={this.handleChange}
                  value={comment}
                  name="comment"
                />
                  <div style={{ color: "red" }}>{this.state.error.review}</div>

                <div className="text">
                  <button type="submit">Post</button>
                </div>
                <br />
              </div>
            </form>
          </div>
        </div>
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
  .review {
    color: #44c27b;
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

export default Review;
