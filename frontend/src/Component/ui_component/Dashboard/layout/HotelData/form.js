import React, { Component } from "react";

import { toast } from "react-toastify";

export default class HotelForm extends Component {
  constructor() {
    super();
    this.state = {
      HotelData: {
        name: "",
        phone: "",
        email: "",
        address: "",
        description: "",
        features: "",
        error: {}
      },
      showTable: true
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, phone, email, address, description, features } = this.state;
    this.props.formData({ name, phone, email, address, description, features });
    toast.success("SucessFully Added!", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    this.setState({
      name: "",
      email: "",
      address: "",
      phone: "",
      description: "",
      features: ""
    });
  };

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
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
                <label htmlFor="Email" className style={{ color: "#44c27b" }}>
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
                  <div className="alert-warning">{this.state.error.email}</div>
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
                  Phone Number
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
                  <div className="alert-warning">{this.state.error.phone}</div>
                )}
              </div>

              <div className="position-relative form-group">
                <label htmlFor="address" className style={{ color: "#44c27b" }}>
                  address
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
              onClick={this.props.adddata}
              style={{
                background: "#18d26e",
                border: "0",
                padding: "10px 30px",
                color: "#fff",
                transition: " 0.4s",
                cursor: "pointer"
              }}
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    );
  }
}
