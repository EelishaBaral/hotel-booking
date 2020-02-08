import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RoomPanel from "../room-panel/RoomPanel";

import httpServices from "../../../service/httpServices";
import config from "../../../config.json";

class Room extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  async componentDidMount() {
    const res = await httpServices.get(`${config.apiEndPoint}/booking`);
    console.log(res.data);

    let filter = res.data.data.filter(data => {
      return data.name.toLowerCase().indexOf(this.props.search) !== -1;
    });
    this.setState({ data: filter, loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <div class="d-flex justify-content-center mt-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <>
        <Container>
          <Row>
            <Col md="8" className="mx-auto">
              {this.state.data.length === 0 && (
                <h1 className="mt-5">No Hotel Found</h1>
              )}
              {this.state.data.length !== 0 &&
                this.state.data.map(room => (
                  <RoomPanel key={room.id} room={room} />
                ))}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Room;
