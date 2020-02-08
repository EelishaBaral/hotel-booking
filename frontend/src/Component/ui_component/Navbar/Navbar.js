import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import User from "../../../image/user.jpg";
import { withRouter } from "react-router-dom";
import { FaHotel } from "react-icons/fa";

function Navbars(props) {
  function handleLogOut(e) {
    e.preventDefault();
    localStorage.clear("token");
    this.props.history.replace("/");
  }

  return (
    <div>
      <NavWrapper style={{ backgroundColor: "rgb(f, f, f)" }}>
        <div className="topNavbar">
          <Container>
            <Navbar expand="lg">
              <Navbar.Brand href="/" className="logo">
                <div className="row">
                  <div className="col-md-3">
                    <div className="icons">
                      <FaHotel />
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    style={{
                      color: "#44c27b",
                      paddingTop: "8px",
                      marginBottom: "0px"
                    }}
                  >
                    <h1>HInfo</h1>
                  </div>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
                <Nav className="ml-auto">
                  <Link to="/" className="nav-link">
                    <p> Home</p>
                  </Link>
                  <Link to="/hotels" className="nav-link">
                    <p> Popular Destinations</p>
                  </Link>
                  <Link to="/hotels" className="nav-link">
                    <p> Hotels</p>
                  </Link>
                  <Link to="/hotels" className="nav-link">
                    <p> Contact Us</p>
                  </Link>

                  {props.users === "user" ? (
                    <NavDropdown
                      title={<img src={User} alt="user" />}
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">Contact</NavDropdown.Item>
                      <NavDropdown.Item href="/DetailData">
                        <p> setting</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/" onClick={handleLogOut}>
                        <p> LogOut</p>
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <React.Fragment>
                      <Link to="/Login" className="nav-link">
                        Login
                      </Link>
                      <Link to="/signup" className="nav-link">
                        SignUp
                      </Link>
                    </React.Fragment>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
      </NavWrapper>
    </div>
  );
}
export default withRouter(Navbars);

const NavWrapper = styled.section`
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px;
  font-family: "Slabo 27px", serif;
  .topNavbar {
    height: 45px;
  }
  .icons {
    color: #44c27b;
    font-size: 1.2rem;
  }
  .logo h1 {
    font-family: "Lakki Reddy", cursive;
    font-size: 25px;
    padding: 0px;
    margin: 0px;
  }
  .col-md-3 {
    padding-right: 1px;
    padding-left: 2px;
  }
  .nav-link {
    color: #44c27b !important;
    padding-right: 2rem;
    text-transform: capitalize;
    font-size: 17px;
  }
  .nav-link:hover {
    color: rgba(5, 5, 5, 0.5) !important;
  }
  .dropdown-toggle::after {
    content: none;
  }
  img {
    width: 30px;
    height: 30px;
  }
  .navbar {
    padding: 0rem 1rem;
  }
`;
