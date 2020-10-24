import React, { Component } from "react";
import {Link , withRouter} from 'react-router-dom'

class Menu extends Component {
  state ={
    hover: false
  }

  handleHover = ( ) => {
    this.setState({hover: !this.state.hover})
  }
  handleHover2 = ( ) => {
    this.setState({hover2: !this.state.hover2})
  }

  render() {
    let setStyles
    let setStyles2
    this.state.hover ? setStyles = {color: "#C49DF1"} : setStyles = {color: "white"}
    this.state.hover2 ? setStyles2 = {color: "#C49DF1"} : setStyles2 = {color: "white"}
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/logo.png"
              alt="departmentofCpe Logo"
              className="brand-image img-rounded elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">
              Career Simulation
            </span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/avatar2.png"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Apisamai Maisrithong
                </a>
              </div>
            </div> */}
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <Link style={setStyles} to="/Home" className="nav-link" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>Performance</p>
                  </Link>
                </li>

                <li className="nav-item has-treeview menu-open">
                  <Link style={setStyles2} to="/StatusProfile" className="nav-link" onMouseEnter={this.handleHover2} onMouseLeave={this.handleHover2}>
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>Status Profile</p>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}

export default withRouter(Menu);