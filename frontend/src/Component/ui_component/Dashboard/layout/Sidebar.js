import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <sidebarSection>
        <div>
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src" />
              <div className="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  className="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button
                  type="button"
                  className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6" />
                  </span>
                </button>
              </span>
            </div>
            <div className="scrollbar-sidebar ps ps--active-y">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  <li>
                    <a href="index.html" style={{ paddingBottom: "15px" }}>
                      <i
                        className="metismenu-icon pe-7s-diamond"
                        style={{ fontSize: "40px" }}
                      />
                      <Link to="/Dashboard/" style={{ fontSize: " 18px" }}>
                        Home
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        className="metismenu-icon pe-7s-culture"
                        style={{ fontSize: "40px" }}
                      />
                      <Link to="/Dashboard/Hotel" style={{ fontSize: " 18px" }}>
                        List of Hotel
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i
                        className="metismenu-icon pe-7s-photo"
                        style={{ fontSize: "40px" }}
                      />
                      <Link
                        to="/Dashboard/UploadImage"
                        style={{ fontSize: " 18px" }}
                      >
                        Add Image of Hotel
                      </Link>
                    </a>
                    <a>
                      <i
                        className="metismenu-icon pe-7s-users"
                        style={{ fontSize: "40px" }}
                      />
                      <Link
                        to="/Dashboard/MemberList"
                        style={{ fontSize: " 18px" }}
                      >
                        Customers
                      </Link>
                    </a>
                    <a>
                      <i
                        className="metismenu-icon pe-7s-note2"
                        style={{ fontSize: "40px" }}
                      ></i>
                      <Link to="/Dashboard/BookingInformation" style={{ fontSize: " 18px" }}>Booking</Link>
                    </a>
            
                  </li>
                </ul>
              </div>
              <div className="ps__rail-x" style={{ left: 0, bottom: "-457px" }}>
                <div
                  className="ps__thumb-x"
                  tabIndex={0}
                  style={{ left: 0, width: 0 }}
                />
              </div>
              <div
                className="ps__rail-y"
                style={{ top: 457, height: 597, right: 0 }}
              >
                <div
                  className="ps__thumb-y"
                  tabIndex={0}
                  style={{ top: 259, height: 338 }}
                />
              </div>
            </div>
          </div>
        </div>
      </sidebarSection>
    );
  }
}
const sidebarSection = styled.div`
  a link {
    font-size: 18px;
  }
`;
