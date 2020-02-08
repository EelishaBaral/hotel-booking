import React, { Component, Fragment } from "react";
import styled from "styled-components";
import HotelForm from "./form";
import ReactDatatable from "@ashvin27/react-datatable";
import httpServices from "../../services/httpServices";
import config from "../../config.json";
import { HotelModal } from "./edittable";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import {Link} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


export default class DataList extends Component {
  constructor(props) {
    super(props);
    this.config = {
      page_size: 5,
      length_menu: [5, 10, 20, 50],
      button: {
        excel: true,
        print: true
      }
    };
    this.state = {
      HotelData: [],
      showTable: true,
      showRoomTable:false,
      show: false,
      isEditing: false,
      editData: {}
    };
  }

  handleshowTable = () => {
    this.setState({ showTable: !this.state.showTable });
  };
  handleshowRoomTable = () => {
    this.setState({ showRoomTable: !this.state.showRoomTable });
  };

  componentDidMount = () => {
    this.getHotel();
  };
  getHotel = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    let response = await httpServices.get(`${config.apiEndPoint}/booking`, {
      headers
    });
    this.setState({ HotelData: response.data.data });
  };
  handleDelete = async id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async result => {
      if (result.value) {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        };
        let response = await httpServices.delete(
          `${config.apiEndPoint}/booking/${id}`,
          { headers }
        );
        if (response.status == 200) {
          let filData = this.state.HotelData.filter(hotelData => {
            return hotelData._id != id;
          });
          this.setState({ HotelData: filData });
          toast.success("SucessFully Deleted!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
      `${config.apiEndPoint}/booking/${data._id}`,
      {
        address: data.address,
        description: data.description,
        email: data.email,
        features: data.features,
        name: data.name,
        phone: data.phone
      },
      { headers }
    );

    if (response.status == 200) {
      let updateData = this.state.HotelData.map(hotelData => {
        if (hotelData._id === data._id) {
          return data;
        }
        return hotelData;
      });
      this.setState({ HotelData: updateData, show: false });
      toast.success("SucessFully Updated!", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  };
  // handleForm Data
  handleFormData = async ({
    name,
    phone,
    email,
    address,
    description,
    features
  }) => {
    let formData = {
      name: name,
      phone: phone,
      email: email,
      address: address,
      description: description,
      features: features
    };
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    };
    let booking = await httpServices.post(
      `${config.apiEndPoint}/booking`,
      {
        ...formData
      },
      { headers }
    );
    console.log(booking);
    if (booking.status === 201) {
      this.getHotel();
      this.setState({ showTable: true });
    }
  };
  render() {
    let columns = [
      {
        key: "name",
        text: "HotelName",
        className: "id",
        align: "left",

        sortable: true
      },
      {
        key: "address",
        text: "Address",
        className: "address",
        align: "left",

        sortable: true
      },
      {
        key: "email",
        text: "Email",
        className: "email",

        align: "left",
        sortable: true
      },

      {
        key: "phone",
        text: "Contact Number",
        className: "phone",
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
        key: "features",
        text: "Features",
        className: "features",
        width: 50,
        sortable: true,
        align: "left"
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
                <Link to="/Dashboard/RoomModal">

                 <button
                      className="mt-1 btn btn-primary mb-2"
                    
                      style={{
                        background: "#18d26e",
                        border: "0",
                        padding: "0",
                        color: "#fff",
                        transition: " 0.4s",
                        cursor: "pointer"
                      }}
                    >
                        <div>Add Room</div>
                    </button>
                 </Link>
              <button
                className="btn btn-primary btn-sm ml-2"
                style={{ marginBottom: "5px" }}
                onClick={() => this.handleOpenModal(data)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="btn btn-danger btn-sm ml-2"
                onClick={() => this.handleDelete(data._id)}
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
        <HotelTableWrapper>
          <div classname="app-main__outer">
            <div classname="app-main__inner">
              <div classname="app-page-title">
                <div className="main-card mb-3 card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ padding: "10px" }}>
                      <center>Information about Hotel</center>
                    </h5>
                    <button
                      className="mt-1 btn btn-primary mb-5"
                      onClick={this.handleshowTable}
                      style={{
                        background: "#18d26e",
                        border: "0",
                        padding: "10px 20px",
                        color: "#fff",
                        transition: " 0.4s",
                        cursor: "pointer"
                      }}
                    >
                      {this.state.showTable ? (
                        <div>Add hotel</div>
                      ) : (
                        <div>View hotel</div>
                      )}
                    </button>
                    {this.state.showTable ? (
                      <div>
                        <ReactDatatable
                          config={this.config}
                          records={this.state.HotelData}
                          columns={columns}
                        />
                      </div>
                    ) : (
                      <HotelForm formData={this.handleFormData} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <HotelModal
              showModal={this.handleOpenModal}
              hideModal={this.handleClose}
              show={this.state.show}
              editData={this.state.editData}
              update={this.handleUpdate}
            />
          </div>
          <ToastContainer />
        </HotelTableWrapper>
      </div>
    );
  }
}
const HotelTableWrapper = styled.section`
  font-family: " Girassol", cursive !important;
  font-size: "5px";
`;
