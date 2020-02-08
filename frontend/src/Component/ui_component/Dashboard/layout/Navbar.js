import React, { Component } from "react";
import Image from "../assets/images/avatars/user.jpg";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SHowing: false,
      sidebarOpen: false
    };
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut(e) {
    e.preventDefault();
    localStorage.clear("token");
    this.props.history.replace("/");
  }
  handleSHowHide = () => {
    this.setState({ SHowing: !this.state.SHowing });
  };
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    return (
      <div>
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            <div className="logo-src" />
            <div className="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                  onClick={() => this.props.showHide()}
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
                onclick={this.handleSidebar}
              >
                <span className="hamburger-box" style={{ color: "#44c27b" }}>
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

          <div className="app-header__content">
            <div className="app-header-right">
              <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div
                      className="widget-content-left"
                      onClick={this.handleSHowHide}
                    >
                      <div>
                        <a
                          data-toggle="dropdown"
                          className="p-0 btn"
                          aria-haspopup="true"
                        >
                          <img
                            width={42}
                            className="rounded-circle"
                            src={Image}
                            alt
                          />
                          <i
                            className="fa fa-angle-down ml-2 opacity-8"
                            style={{ color: "#44c27b" }}
                          />
                        </a>
                        {this.state.SHowing ? (
                          <div
                            tabIndex={-1}
                            role="menu"
                            aria-hidden="true"
                            className="dropdown-menu dropdown-menu-right show"
                            x-placement="bottom-end"
                            style={{
                              position: "absolute",
                              willChange: "transform",
                              top: 0,
                              left: 0,
                              transform: "translate3d(-180px, 44px, 0px)"
                            }}
                          >
                            <button
                              type="button"
                              tabIndex={0}
                              className="dropdown-item"
                              href="/"
                              onClick={this.handleLogOut}
                            >
                              Logout
                            </button>
                            <div tabIndex={-1} className="dropdown-divider" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="widget-content-left  ml-3 header-user-info">
                      <div className="widget-heading">Admin</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Navbar);
