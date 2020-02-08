import React, { Component } from "react";
import { Card } from "react-bootstrap";
class User extends Component {
  render() {
    return (
      <div className="container">
        <Card>
          <div className="row">
            <div className="col-4">
              <p>Booking</p>
              <p>Comments</p>
            </div>
            <div className="col-8">
              <p>Your Contents</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default User;
