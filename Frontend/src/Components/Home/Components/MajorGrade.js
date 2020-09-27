import React, { Component } from "react";

class MajorGrade extends Component {
  subject = [
    "Parallel Processing and Distributed",
    "Wireless Networks",
    "Broadband Communication Networks",
    "Fundamental of MultiProtocol Label Switch",
    "Advanced Database Systems",
    "Data Mining for Computer Engineering",
    "Digital Image Processing",
    "Introduction to Computational Intelligence for CPE",
    "Visual and Interactive Programming",
    "Computer Graphics",
    "System Analysis and Design for Computer Engineering",
    "Robotics",
    "Computer-Aided Manufacturing",
    "Biomedical Instruments",
    "Data Warehousing and Business Intelligence for ISNE",
    "Computer Network Traffic Analysis",
    "Wireless Sensor Network",
    "Peer-to-peer Systems",
    "Introduction to Neuro-Fuzzy Systems",
    "Mobile Application Development",
    "Personal Software Process Improvement",
    "Introduction to Human-Computer Interaction",
    "Advanced Project Management for ISNE",
    "Risk Management in Software Project",
    "Seminar",
    "Selected Topics in ISNE",
    "Selected Topics in Information Systems 1",
    "Selected Topics in Information Systems 2",
    "Selected Topics in Network Engineering 1",
    "Selected Topics in Network Engineering 2",
    "Information Systems and Network Engineering Training"
  ];
  
  // Default Refresh
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor(props) {
    super(props);
    this.state = {
      plan: "",
      credit: 9,
      progress: 0,
      grade: "",
      count: 0,
    };
  }

  handleChange = e => {
    const target = e.target
    const value = target.value === "normal" ? this.setState({credit: 9}) : this.setState({credit: 6})
    const name = target.name

    this.setState({[name]: value})
  };

  handleChangeCount = e => {
    console.log("grade has selected")
    this.setState({count: this.state.count + 3})
  }

  render() {
    console.log("this is grade " + this.state.count)
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
                
                {/* radio */}
                <div className="form-group float-right">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="normal"
                    name="plan"
                    onClick={this.handleChange}
                  />
                  <label
                    className="form-check-label"
                    style={{ marginRight: 30 ,color: "white"}}
                  >
                    Normal Plan
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    value="cooperative"
                    name="plan"
                    onClick={this.handleChange}
                  />
                  <label className="form-check-label" style={{color: "white"}}>Cooperative Plan</label>
                </div>
              </div>

              {/* /.card-header */}
              <div className="card-body" style={{backgroundColor:"#EFE7F7"}}>   
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
                            name="grade"
                            onChange={this.handleChangeCount}
                          >
                            <option selected="selected">-----</option>
                            <option value={3}>A</option>
                            <option value={3}>B+</option>
                            <option value={3}>B</option>
                            <option value={3}>C+</option>
                            <option value={3}>C</option>
                            <option value={3}>D+</option>
                            <option value={3}>D</option>
                            <option value={3}>F</option>
                          </select>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={this.continue}
                  class="btn btn-info float-right" 
                  style={{ marginRight: 9,backgroundColor:"#FEF28A",borderColor:"#FEF28A"}}
                >
                  <span style={{color:"#8D8D8C"}}>Submit</span>
                </button>
                {/* /.row */}
              </div>
              <center>
                <span>{this.state.credit} credit Left</span>
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