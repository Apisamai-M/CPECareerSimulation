import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { server } from "../../constants";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu">
                <i className="fas fa-bars" />
              </a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i class="fas fa-power-off" />
                <span className="badge badge-warning navbar-badge">!</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <div
                  onClick={() => {
                    this.props.history.push("/login");
                    localStorage.removeItem(server.LOGIN_PASSED);
                    this.props.appReducer.app.forceUpdate();
                  }}
                >
                  <a className="dropdown-item dropdown-header">SignOut</a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ appReducer }) => ({
  appReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
