import React, { Component } from "react";

class Menu extends Component {
  render() {
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
                  <a href="../../home" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>Performance</p>
                  </a>
                </li>

                <li className="nav-item has-treeview menu-open">
                  <a href="../../StatusProfile" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>Status Profile</p>
                  </a>
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

export default Menu;