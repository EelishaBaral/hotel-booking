import React from "react";
import { Modal, ButtonToolbar } from "react-bootstrap";
import styled from "styled-components";

export class HotelModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: true
    };
    console.log(this.props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  UNSAFE_componentWillReceiveProps(props) {
    let name = props.editData.name;
    let email = props.editData.email;
    let address = props.editData.address;
    let phone = props.editData.phone;
    let description = props.editData.description;
    let features = props.editData.features;
    let id = props.editData._id;
    this.setState({ name, email, address, phone, description, features, id });
  }

  handleUpdate = e => {
    e.preventDefault();
    this.props.update({
      address: this.state.address,
      description: this.state.description,
      email: this.state.email,
      features: this.state.features,
      name: this.state.name,
      phone: this.state.phone,
      _id: this.state.id
    });
  };

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { hideModal, show } = this.props;
    console.log(this.props.editData.address);
    return (
      <div>
        <ButtonToolbar>
          <Modal
            size="lg"
            show={show}
            onHide={() => hideModal(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            style={{ fontFamily: '" Girassol", cursive' }}
          >
            <Modal.Body>
              <div>
                <h3 style={{ color: "#44c27b", paddingBottom: "15px" }}>
                  <center>Edit data</center>
                </h3>
                <form className action="" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                      <div className="position-relative form-group">
                        <label
                          htmlFor="HotelName"
                          className
                          style={{ color: "#44c27b" }}
                        >
                          Hotel Name
                        </label>
                        <input
                          name="name"
                          id="HotelName"
                          placeholder="Name of the Hotel"
                          type="text"
                          value={this.state.name}
                          onChange={this.handleTextChange}
                          className="form-control"
                        />
                      </div>

                      <div className="position-relative form-group">
                        <label
                          htmlFor="Email"
                          className
                          style={{ color: "#44c27b" }}
                        >
                          Email
                        </label>
                        <input
                          name="email"
                          id="email"
                          placeholder="Mailing adress of the Hotel"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleTextChange}
                          className="form-control"
                        />
                        {this.state.error && (
                          <div className="alert-warning">
                            {this.state.error.email}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label
                          className="form-label"
                          htmlFor="message"
                          style={{ color: "#44c27b" }}
                        >
                          Description
                        </label>
                        <textarea
                          value={this.state.description}
                          onChange={this.handleTextChange}
                          className="form-control"
                          name="description"
                          id="description"
                          rows={3}
                          placeholder="Enter a message ..."
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="col-md-1"></div>

                    <div className="col-md-5">
                      <div className="position-relative form-group">
                        <label
                          htmlFor="PhoneNumber"
                          className
                          style={{ color: "#44c27b" }}
                        >
                          PhoneNumber
                        </label>
                        <input
                          name="phone"
                          value={this.state.phone}
                          onChange={this.handleTextChange}
                          id="PhoneNumber"
                          placeholder="Number of the Hotel"
                          type="text"
                          className="form-control"
                        />
                        {this.state.error && (
                          <div className="alert-warning">
                            {this.state.error.phone}
                          </div>
                        )}
                      </div>

                      <div className="position-relative form-group">
                        <label
                          htmlFor="address"
                          className
                          style={{ color: "#44c27b" }}
                        >
                          Address
                        </label>
                        <input
                          name="address"
                          id="address"
                          value={this.state.address}
                          onChange={this.handleTextChange}
                          placeholder="Address of the Hotel"
                          type="text"
                          className="form-control"
                        />
                        {this.state.error && (
                          <div className="alert-warning">
                            {this.state.error.address}
                          </div>
                        )}
                      </div>
                      <div className="position-relative form-group">
                        <label
                          htmlFor="HotelName"
                          className
                          style={{ color: "#44c27b" }}
                        >
                          Feature
                        </label>
                        <input
                          name="features"
                          id="features"
                          value={this.state.features}
                          onChange={this.handleTextChange}
                          placeholder="Feature of Hotel"
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <center>
                    <button
                      className="mt-1 btn btn-primary"
                      onClick={this.handleUpdate}
                      onHide={() => hideModal(false)}
                      style={{
                        background: "#18d26e",
                        border: "0",
                        padding: "10px 30px",
                        color: "#fff",
                        transition: " 0.4s",
                        cursor: "pointer"
                      }}
                    >
                      Update
                    </button>
                  </center>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </ButtonToolbar>
      </div>
    );
  }
}
