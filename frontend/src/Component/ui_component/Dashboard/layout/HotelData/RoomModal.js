import React, { Component, Fragment } from "react";
import {Link } from "react-router-dom"
import { toast } from "react-toastify";
import ReactDatatable from "@ashvin27/react-datatable";
import styled from "styled-components"

export default class RoomModal extends Component {
  constructor() {
    super();
    this.state = {
         records: [
            {
              "RoomType": "Single Bedroom",
              "RoomNumber": "10",
              "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc",
            },
            {
                "RoomType": "Double Bedroom",
                "RoomNumber": "10",
                "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc"
              },
              {
                "RoomType": "Deluxe",
                "RoomNumber": "10",
                "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc"
              },
              {
                "RoomType": "Suit",
                "RoomNumber": "10",
                "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc"
              }
        ]
    }
    this.config = {
        page_size: 5,
        length_menu: [5, 10, 20, 50],
        button: {
          excel: true,
          print: true
        }
      };
    this.handleTextChange = this.handleTextChange.bind(this);
  }



  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let columns = [
        {
          key: "RoomType",
          text: "Room Type",
          className: "id",
          align: "left",
  
          sortable: true
        },
        {
          key: "RoomNumber",
          text: "Number of Rooms available",
          className: "RoomNumber",
        
          align: "left",
  
          sortable: true
        },
  
        {

          key: "description",
          text: "Description",
          className: "description",
  
          align: "left",
          sortable: true
        },
        {

            key: "image",
            text: "Image of Room",
            className: "image",
    
            align: "left",
            sortable: true
          },
     
        {
          key: "action",
          text: "Action",
          className: "action",
  
          align: "left",
          sortable: false,
          cell: data => {
            return (
              <Fragment>
                
                <button
                  className="btn btn-primary btn-sm ml-2"
                  style={{ marginBottom: "5px" }}
                 
                >
                  <i className="fa fa-edit"></i>
                </button>
                <button
                  className="btn btn-danger btn-sm ml-2"
                
                >
                  <i className="fa fa-trash"></i>
                </button>
              </Fragment>
            );
          }
        }
      ];
  
    return (
      <div>
        <RoomWrapper>
          <Link to="/Dashboard/Hotel">
           <button
              className="mt-1 btn btn-primary mb-5"
          style={{
                background: "#18d26e",
                border: "0",
                padding: "10px 30px",
                color: "#fff",
                transition: " 0.4s",
                cursor: "pointer"
              }}
            >
              View Hotel
            </button>
            </Link>
        <form className action="" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="position-relative form-group">
                <label
                  htmlFor="RoomType"
                  className
                  style={{ color: "#44c27b" }}
                >
            Type of Room
                </label>
                <input
                  name="name"
                  id="RoomType"
                  placeholder="Name of the Room"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label
                  className="form-label"
                  htmlFor="message"
                  style={{ color: "#44c27b" }}
                >
                  Description of room
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
                  htmlFor="RoomNumber"
                
                  style={{ color: "#44c27b" }}
                >
                  Numver of Rooms Available for that room type
                </label>
                <input
                  name="RoomNumber"
                  value={this.state.phone}
                  onChange={this.handleTextChange}
                  id="RoomNumber"
                  placeholder="Number of Rooms"
                  type="text"
                  className="form-control"
                />
              
              </div>
              <div className="position-relative form-group">
                <label
                  htmlFor="RoomNumber"
                
                  style={{ color: "#44c27b" }}
                >
                 Choose Image of Room
                </label>
             
                      <input
                        type="file"
                        class="form-control-file"
                       
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

        <h5 className="card-title" style={{ padding: "20px" }}>
                      <center>List Of Rooms in Hotel abc</center>
                    </h5>
        <div>
                        <ReactDatatable
                          config={this.config}
                          records={this.state.records}
                          columns={columns}
                        />
                      </div>
                      </RoomWrapper>
      </div>
    );
  }
}
const RoomWrapper = styled.section`
  font-family: " Girassol", cursive !important;
 
`;