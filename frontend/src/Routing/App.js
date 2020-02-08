import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Footer from "../Component/ui_component/Footer/Footer";
import Navbars from "../Component/ui_component/Navbar/Navbar";
import Signup from "../Component/ui_component/Form/Signup";
import Login from "../Component/ui_component/Form/Login";
import EditDetail from "../Component/ui_component/Detail/EditDetail";
import DetailData from "../Component/ui_component/Detail/DetailData";
import Home from "../Component/Home/Home";
import Room from "./../Component/ui_component/Room/room";
import Dashboard from "../Component/ui_component/Dashboard/App";
import httpServices from "../service/httpServices";
import config from "../config.json";
import ForgotPassword from "../Component/ui_component/Form/ForgotPassword";
import NewPassword from "../Component/ui_component/Form/NewPassword";
import Hotels from "../Component/ui_component/hotels/hotel";
import HotelDetails from "../Component/ui_component/hotels/hotelDetails";
import Selectroom from "../Component/ui_component/booking/room";
import bookingForm from "../Component/ui_component/booking/bookingForm";
import Payment from "../Component/ui_component/booking/Payment"

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      search: "",
      loading: true
    };
  }

  async componentDidMount() {
    console.log(localStorage.getItem("token"));
    try {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      let userData = await httpServices.get(`${config.apiEndpoint}/auth/me`, {
        headers
      });

      if (userData.data.result.role === "admin") {
        this.setState({ user: "admin", loading: false });
        this.props.history.push("/dashboard");
      } else {
        this.setState({ user: "user", loading: false });
      }
    } catch (error) {
      console.log(error);
    }
    this.setState({ loading: false });
  }
  handleSearch = data => {
    this.setState({ search: data });
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <>
        <Navbars users={this.state.user} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...props} search={this.handleSearch} />}
          />
          <Route
            path="/DetailData"
            render={() =>
              this.state.user === "user" ? <DetailData /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/room"
            render={props => <Room {...props} search={this.state.search} />}
          />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/room" component={Room} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/NewPassword" component={NewPassword} />
          <Route path="/EditDetail" component={EditDetail} />
          <Route path="/Payment" component={Payment}/>
          <Route
            path="/dashboard"
            render={() =>
              this.state.user === "admin" ? (
                <Dashboard />
              ) : (
                <Redirect to="/Login" />
              )
            }
          />
          <Route path="/hotels/:id" component={HotelDetails} />
          <Route path="/hotels" exact render={props => <Hotels {...props} />} />
          <Route path="/Selectroom" component={Selectroom} />
          <Route path="/bookingForm" component={bookingForm} />
        </Switch>
        <br />
      </>
    );
  }
}

export default withRouter(App);
