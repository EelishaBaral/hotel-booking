import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Home from "./layout/Home";
import Hotel from "./layout/HotelData/Hotel";
import AddHotel from "./layout/HotelData/form";
import UpImage from "./layout/UploadImage/ImgUp";
import RoomModal from "./layout/HotelData/RoomModal";
import BookingInformation from "./layout/Booking/BookingInformation"

import "bootstrap/dist/css/bootstrap.min.css";
import MemberList from "./layout/MemberData/Memberlist";

function App(props) {
  const [toggle, setToggle] = useState(false);
  function handleShowHide() {
    setToggle(!toggle);
  }
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      props.history.push("/");
    }
  }, []);
  return (
    <React.Fragment>
      <div
        className={
          toggle
            ? "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
            : "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar"
        }
      >
        <Navbar showHide={handleShowHide} />

        <div className="app-main">
          <Sidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <Switch>
                  <Route path="/Dashboard/" exact component={Home} />
                  <Route exact path="/Dashboard/Hotel" component={Hotel} />
                  <Route path="/Dashboard/AddHotel" component={AddHotel} />
                  <Route path="/Dashboard/MemberList" component={MemberList} />
                  <Route path="/Dashboard/RoomModal" component={RoomModal} />
                  <Route path="/Dashboard/BookingInformation" component={BookingInformation} />
                  <Route
                    exact
                    path="/Dashboard/UploadImage"
                    component={UpImage}
                  />
                </Switch>
              </div>
            </div>
            <div class="app-wrapper-footer">
              <div class="app-footer">
                <div class="app-footer__inner">
                  <div class="app-footer-left">
                    <ul class="nav">
                      <li class="nav-item">Footer Link</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default withRouter(App);
