import React, { Component } from "react";
import Grade from "./Components/Grade";
import MajorGrade from "./Components/MajorGrade";
import StatusProfile from "../StatusProfile";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 3,
    };
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // Default Refresh
  continue = (e) => {
    e.preventDefault();
    this.nextStep();
  };

  render() {
    switch (this.state.step) {
      case 1:
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
                    <h3 className="card-title">Student Test Form</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="firstName"
                            class="form-control"
                            id="firstName"
                          />
                        </div>
                      </div>
                      {/* /.form-group */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="lastName"
                            class="form-control"
                            id="lastName"
                          />
                        </div>
                      </div>
                      {/* /.col */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Student Id</label>
                          <input
                            type="studentId"
                            class="form-control"
                            id="studentId"
                          />
                        </div>
                      </div>
                      {/* /.form-group */}
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Major</label>
                          <input
                            type="majorName"
                            class="form-control"
                            id="majorName"
                          />
                        </div>
                      </div>
                      {/* /.col */}
                    </div>
                    <button
                      class="btn btn-info float-right"
                      onClick={this.continue}
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
      case 2:
        return <Grade nextStep={this.nextStep} />;
      case 3:
        return <MajorGrade nextStep={this.nextStep} />;
      default:
        return <StatusProfile />;
    }
  }
}

export default Home;
