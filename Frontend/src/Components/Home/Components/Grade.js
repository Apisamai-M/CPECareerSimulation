import React, { Component } from "react";

class Grade extends Component {
  subject = [
    "Object-Oriented Programing",
    "Computer Networks Lab",
    "Computer Networks",
    "Algorithms for ISNE",
    "Web Programming Language",
    "Database System",
    "Network Programming",
    "Database System",
    "Database System Lab",
    "Computer Architecture for ISNE",
    "Operating Systems",
    "Software Engineering",
    "Network and information Security",
    "Network Design",
    "Platform Programming",
    "Data Centric",
    "Project Management for ISNE",
    "Wireless and Broadband",
    "Information System",
    "Information Technology Service",
  ];

  // Default Refresh
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Performance Form</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <section className="container-fluid">
            {/* SELECT2 EXAMPLE */}
            <div className="card card-default">
              <div className="card-header">
                <h3 className="card-title">
                  Please input your grade (or expected grade)
                </h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  {this.subject.map((data) => {
                    return (
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>{data}</label>
                          <select
                            className="form-control select1"
                            style={{ width: "100%" }}
                          >
                            <option selected="selected">A</option>
                            <option>B+</option>
                            <option>B</option>
                            <option>C+</option>
                            <option>C</option>
                            <option>D+</option>
                            <option>D</option>
                            <option>F</option>
                          </select>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={this.continue}
                  class="btn btn-info float-right"
                >
                  Next
                </button>
                {/* /.row */}
              </div>
              {/* /.card-body */}
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Grade;
