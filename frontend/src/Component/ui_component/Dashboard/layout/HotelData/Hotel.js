import React, { Component } from "react";
import DataList from "./HotelTable.js";
// const emailRegex = RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/);

export default class Hotel extends Component {
  constructor() {
    super();
    this.state = {
      HotelData: []
    };
  }

  render() {
    console.log(this.state.error);
    return (
      <>
        <DataList />
      </>
    );
  }
}
