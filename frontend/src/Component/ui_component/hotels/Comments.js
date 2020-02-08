import React, { Component } from "react";
import httpServices from "../../../service/httpServices";
import config from "../Dashboard/config.json";
import {Card,Image} from "react-bootstrap"
import styled from "styled-components"
class Comment extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      UserData: {},
     
    };
  }
  state = {
  
    comment: this.props.review.comment,
    id: this.props.review.id,
    error: {}
  };
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
  render() {
    console.log(this.props.review);
    const style = {
    
      color: "black"
    };
    return (
        <div className="container">
      <Card className="revcard">
          <div className="container">
          
            <div className="row">
            <div className="col-md-1.5">
              <div className="userImage">
                        <center>
                          <Image
                            src={`http://localhost:5000/uploads/${this.state.UserData.photo}`}
                            className="src"
                            style={{
                              width: 100,
                              height: 100,
                              borderRadius: 200 / 2
                            }}
                          />
                        </center>
                      </div>
              </div>
              <div className="col-md-6">
                <p className="comment">
                  <h6>
                  {this.state.UserData.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </h6>
                  {this.props.review.comment}
                </p>
              </div>
            </div>
          </div>
        </Card>
            </div>

    
    ) 
  }

   
  }

export default Comment;
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
  .comment {
    font-size: 11px;
    padding-top: 20px;
  }
  .profile {
    height: 75px;
    width: 75px;
    display: flex;
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
  .fas {
    color: yellow;
  }
  .far {
    color: yellow;
  }
  .stars {
    float: left;
  }
  .revcard {
    height: 300px;
    width: 600px;
    margin: 100px;
  }
`;
