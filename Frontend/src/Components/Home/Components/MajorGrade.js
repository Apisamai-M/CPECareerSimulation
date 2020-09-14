import React, { Component } from "react";

class MajorGrade extends Component {
  subject = [
    "Broadband Communication Networks",
    "Fundamental of MultiProtocol Label Switch",
    "Advanced Database Systems",
    "Data Mining for Computer Engineering",
    "Digital Image Processing",
    "Introduction to Computational Intelligence for CPE",
    "Visual and Interactive Programming",
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

                {/* radio */}
                <div className="form-group float-right">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radio2"
                  />
                  <label
                    className="form-check-label"
                    style={{ marginRight: 30 }}
                  >
                    Normal Plan
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radio2"
                  />
                  <label className="form-check-label">Cooprative Plan</label>
                </div>
              </div>

              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  {this.subject.map((data) => {
                    return (
                      <div
                        className="form-group col-md-12"
                        style={{ display: "flex" }}
                      >
                        <div className="col-md-9">
                          <label>{data}</label>
                        </div>
                        <div className="col-md-3">
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
                  style={{ marginRight: 9 }}
                >
                  Submit
                </button>
                {/* /.row */}
              </div>
              <center>
                <span>6 credit Left</span>
                <div
                  className="progress progress-sm active"
                  style={{ width: "50%", marginBottom: 10 }}
                >
                  <div
                    className="progress-bar bg-warning progress-bar-striped"
                    role="progressbar"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "20%" }}
                  >
                    <span className="sr-only">20% Complete</span>
                  </div>
                </div>
              </center>

              {/* /.card-body */}
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default MajorGrade;
