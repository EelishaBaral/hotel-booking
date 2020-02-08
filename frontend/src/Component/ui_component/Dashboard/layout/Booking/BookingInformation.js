import React, { Component, Fragment } from "react";
import {Link } from "react-router-dom"
import { toast } from "react-toastify";
import ReactDatatable from "@ashvin27/react-datatable";
import styled from "styled-components"

export default class BookingInformation extends Component {
  constructor() {
    super();
    this.state = {
         records: [
             {
            "name":'Sita Thapa',
             "email":'sita@gmail.com',
             "phoneNumber":8842957864,
             "hotelbooked":'Shambala Hotel',
             "RoomType":'Deluxe Room',
             "CheckIn":'Jan 20, 2020',
             "CheckOut":'Jan 24, 2020',
             "noOfCustomer":3
             },
             {
                "name":'Ram Shrestha',
                 "email":'ram@gmail.com',
                 "phoneNumber":8842957864,
                 "hotelbooked":'Mariot Hotel',
                 "RoomType":'Suit',
                 "CheckIn":'Feb 20, 2020',
                 "CheckOut":'Feb 24, 2020',
                 "noOfCustomer":10
                 },
                 {
                    "name":'Samrat Khatri',
                     "email":'samrat@gmail.com',
                     "phoneNumber":8842957864,
                     "hotelbooked":'Shambala Hotel',
                     "RoomType":'Deluxe Room',
                     "CheckIn":'Feb 10, 2020',
                     "CheckOut":'Feb 15, 2020',
                     "noOfCustomer":2
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
   
  }




  render() {
    let columns = [
        {
          key: "name",
          text: "Name of Customer",
          className: "name",
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

          key: "phoneNumber",
          text: "Contact Number",
          className: "phoneNumber",
  
          align: "left",
          sortable: true
        },
        {

            key: "hotelbooked",
            text: "Hotel Booked",
            className: "hotelBooked",
    
            align: "left",
            sortable: true
          },
          {

            key: "RoomType",
            text: "Room Type",
            className: "RoomType",
    
            align: "left",
            sortable: true
          },

          {

            key: "CheckIn",
            text: "Check In Date",
            className: "checkin",
    
            align: "left",
            sortable: true
          },
          {

            key: "CheckOut",
            text: "Check Out Date",
            className: "checkout",
    
            align: "left",
            sortable: true
          },
          {

            key: "noOfCustomer",
            text: "Number of Customer",
            className: "noOfCustomer",
    
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
         <BookingWrapper>
        <h5 className="card-title" style={{ padding: "10px" }}>
                      <center>Booking Information</center>
                    </h5>
        <div>
                        <ReactDatatable
                          config={this.config}
                          records={this.state.records}
                          columns={columns}
                        />
                      </div>
                      </BookingWrapper>
      </div>
    );
  }
}
const BookingWrapper = styled.section`
  font-family: " Girassol", cursive !important;
 
`;