import React, { Component } from "react";

class Grade extends Component {
  subject = [
    "Object-Oriented Programing",
    "Computer Networks Lab",
    "Computer Networks",
    "Algorithms for ISNE",
    "Web Programming Language",
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
    "Adv. IS and Network Technology",
    "Information Systems",
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
            <div className="card card-default" style={{borderRadius:"2.25rem"}}>
              <div className="card-header" style={{backgroundColor:"#3f607b",borderTopLeftRadius:"2.25rem",borderTopRightRadius:"2.25rem"}}>
                <h3 className="card-title" style={{color: "white"}}>
                  Please input your grade (or expected grade)
                </h3>
              </div>
              {/* /.card-header */}
              <div className="card-body" style={{backgroundColor:"#EFE7F7", borderBottomLeftRadius:"2.25rem",borderBottomRightRadius:"2.25rem"}}>
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
                            <option value="none" selected="selected">-----</option>
                            <option value="1">A</option>
                            <option value="2">B+</option>
                            <option value="3">B</option>
                            <option value="4">C+</option>
                            <option value="5">C</option>
                            <option value="6">D+</option>
                            <option value="7">D</option>
                            <option value="8">F</option>
                          </select>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={this.continue}
                  class="btn btn-info float-right"
                  style={{ marginRight: 9,backgroundColor:"#00305A",borderColor:"#00305A", borderRadius:"10px"}}
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
