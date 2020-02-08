import React, { Component } from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
import httpServices from "../../../service/httpServices";
import config from "../Dashboard/config.json";
import EditDetail from "./EditDetail";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Datainformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserData: {},
      show: false,
      editData: {}
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
  handleOpenModal = data => {
    this.setState({ show: true });
    this.setState({ editData: data });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleUpdate = async data => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    let response = await httpServices.put(
      `${config.apiEndPoint}/auth/updatedetails/${data._id}`,
      {
        name: data.name,
        email: data.email,
        password: data.password
      },
      { headers }
    );
    console.log(response);

    if (response.status == 200) {
      let updateData = this.state.UserData.map(userData => {
        if (userData._id === data._id) {
          return data;
        }
        return userData;
      });
      this.setState({ UserData: updateData, show: false });
      toast.success("SucessFully Updated!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };

  render() {
    return (
      <>
        <CustomarDetail>
          <div className="container">
            <div className="card-area">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h6
                        className="card-title"
                        style={{ fontSize: "20px", textAlign: "center" }}
                      >
                        Personal Information
                      </h6>
                      <hr />
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

                      <p class="card-text">
                        <div className="row">
                          <div className="col-md-5">FirstName:</div>
                          <div className="col-md-7">
                            <div>{this.state.UserData.name}</div>
                            <br />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-5">Email Address:</div>
                          <div className="col-md-7">
                            <div>{this.state.UserData.email}</div>
                            <br />
                          </div>
                        </div>
                      </p>
                      <center>
                        <button
                          className="btn btn-secondary"
                          onClick={data => this.handleOpenModal(data)}
                        >
                          Edit Settings
                        </button>
                      </center>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
            <EditDetail
              showModal={this.handleOpenModal}
              hideModal={this.handleClose}
              show={this.state.show}
              UserData={this.state.UserData}
              update={this.handleUpdate}
              editData={this.state.editData}
            />
          </div>
          <Footer />
        </CustomarDetail>
      </>
    );
  }
}

export default Datainformation;

const CustomarDetail = styled.div`
  font-family: " Girassol", cursive !important;
  .card-area {
    padding-top: 60px;
    padding-bottom: 50px;
  }
  .userImage {
    padding-bottom: 20px;
  }

  button {
    background: #18d26e;
    border: 0;

    padding: 5px 15px;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
  }

  button:hover {
    background: #13a456;
  }
`;
