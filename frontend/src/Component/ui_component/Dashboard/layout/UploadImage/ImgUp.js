import React, { Component } from "react";

import httpServices from "../../services/httpServices";
import config from "../../config.json";
import styled from "styled-components";
class UpImage extends Component {
  state = {
    hotelData: [],
    selectVal: null,
    selectedFile: null
  };
  async componentDidMount() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    let response = await httpServices.get(`${config.apiEndPoint}/booking`, {
      headers
    });
    this.setState({ hotelData: response.data.data });
  }
  onSelect = e => {
    console.log(e.target.value);
    this.setState({ selectVal: e.target.value });
  };
  onClickHandler = async e => {
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    const fb = new FormData();
    fb.append("file", this.state.selectedFile, this.state.selectedFile.name);
    let response = await httpServices.put(
      `${config.apiEndPoint}/booking/${this.state.selectVal}/photo`,
      fb,
      { headers }
    );
    console.log(response);
  };
  onChangeHandler = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };
  render() {
    return (
      <ImageWrapper>
        <div classname="app-main__outer">
          <div classname="app-main__inner">
            <div classname="app-page-title">
              <div
                className="main-card mb-3 card"
                style={{ width: "750px", height: "300px" }}
              >
                <div className="card-header">
                  <h5>Choose Hotel and image of Hotel</h5>
                </div>
                <div
                  className="card-body"
                  style={{ paddingTop: "50px", paddingLeft: "200px" }}
                >
                  <form action="">
                    <div class="form-group">
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        onChange={this.onSelect}
                      >
                        {this.state.hotelData.map(data => (
                          <option key={data._id} value={data._id}>
                            {data.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <input
                        type="file"
                        class="form-control-file"
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <center>
                      <button
                        className="btn btn-primary btn-md"
                        onClick={this.onClickHandler}
                        style={{
                          background: "#18d26e",
                          border: "0",
                          padding: "10px 20px",
                          color: "#fff",
                          transition: " 0.4s",
                          cursor: "pointer"
                        }}
                      >
                        Upload
                      </button>
                    </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ImageWrapper>
    );
  }
}

export default UpImage;
const ImageWrapper = styled.section`
  font-family: " Girassol", cursive;
  padding-top: 60px;
  .form-control {
    width: 60%;
  }
  h5 {
    margin: 0 auto;
    color: "#44c27b";
  }
  .card {
    margin: 0 auto;
  }
`;
