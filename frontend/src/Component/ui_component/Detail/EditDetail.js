import React, { Component } from "react";
import { Col, Row, Form, Modal, ButtonToolbar } from "react-bootstrap";
import styled from "styled-components";
import httpServices from "../../../service/httpServices";
import config from "../Dashboard/config.json";

class EditDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
    console.log(this.props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(props) {
    let name = props.editData.name;
    let email = props.editData.email;
    let password = props.editData.password;

    let id = props.editData._id;
    this.setState({ name, email, password, id });
  }

  handleUpdate = e => {
    e.preventDefault();
    this.props.update({
      email: this.state.email,

      name: this.state.name,
      password: this.state.password,
      _id: this.state.id
    });
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
  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onClickHandler = async e => {
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    const fb = new FormData();
    fb.append("file", this.state.selectedFile);
    let response = await httpServices.put(
      `${config.apiEndPoint}/auth/me/${this.props.UserData._id}/photo`,
      fb,
      { headers }
    );
    console.log(response);
  };
  onChangeHandler = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  render() {
    const { hideModal, show } = this.props;
    return (
      <ButtonToolbar>
        <Modal
          size="md"
          show={show}
          onHide={() => hideModal(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Body>
            <div>
              <CustomarDetail>
                <div className="container">
                  <h6
                    className="card-title"
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      color: "#44c27b"
                    }}
                  >
                    Personal Information
                  </h6>
                  <hr />

                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                      Name
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleTextChange}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                      Email
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleTextChange}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                      Password
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    controlId="formPlaintextPassword"
                    value={this.state.password}
                    onChange={this.handleTextChange}
                  >
                    <Form.Label column sm="4">
                      Upload Image
                    </Form.Label>
                    <Col sm="8">
                      <div class="form-group">
                        <input
                          type="file"
                          className="form-control-file"
                          onChange={this.onChangeHandler}
                        />
                      </div>
                    </Col>
                  </Form.Group>
                  <center>
                    <button
                      href="#"
                      className="btn btn-secondary"
                      onClick={this.onClickHandler}
                      // onClick={this.props.hideModal}
                      // onClick={this.handleUpdate}
                    >
                      Update
                    </button>
                  </center>
                </div>
                <br />
              </CustomarDetail>
            </div>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default EditDetail;

const CustomarDetail = styled.div`
  font-family: " Girassol", cursive !important;
  .row {
    padding-top: 10px;
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
