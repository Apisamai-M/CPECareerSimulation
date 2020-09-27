import React, { Component } from "react";

class StatusProfile extends Component {
  componentDidMount() {
    const scripts = document.createElement("script");
    scripts.src = "./js/chart.js";
    document.body.appendChild(scripts);
  }
  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Profile</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                {/* Profile Image */}
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img
                        className="profile-user-img img-fluid img-circle"
                        src="../../dist/img/avatar2.png"
                        alt="User profile picture"
                      />
                    </div>
                    <h3 className="profile-username text-center">
                      Apisamai Maisrithong
                    </h3>
                    {/* <p className="text-muted text-center">Software Engineer</p> */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                {/* About Me Box */}
                <div className="card card-primary">
                  <div className="card-header"style={{backgroundColor:"#7C6BA3"}}>
                    <h3 className="card-title">About Me</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <strong>
                      <i className="fas fa-book mr-1" /> Education
                    </strong>
                    <p className="text-muted">
                      Information System and Network Engineering
                    </p>
                    <hr />
                    <strong>
                      <i className="fas fa-map-marker-alt mr-1" /> Location
                    </strong>
                    <p className="text-muted">Chiang Mai University</p>
                    <hr />
                    {/* <strong>
                      <i className="fas fa-pencil-alt mr-1" /> Skills
                    </strong>
                    <p className="text-muted">
                      <span className="tag tag-danger">UI Design</span>
                      <span className="tag tag-success">Coding</span>
                      <span className="tag tag-info">Javascript</span>
                      <span className="tag tag-warning">PHP</span>
                      <span className="tag tag-primary">Node.js</span>
                    </p>
                    <hr />
                    <strong>
                      <i className="far fa-file-alt mr-1" /> Notes
                    </strong>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam fermentum enim neque.
                    </p> */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Progress bars</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <h6>Database</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "40%" }}
                      >
                        <span className="sr-only">40% Complete (success)</span>
                      </div>
                    </div>
                    <h6>Web Programing</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "20%" }}
                      >
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                    <h6>Data Science</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      >
                        <span className="sr-only">60% Complete (warning)</span>
                      </div>
                    </div>
                    <h6>Software Engineer</h6>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "80%" }}
                      >
                        <span className="sr-only">80% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card card-danger">
                  <div className="card-header"style={{backgroundColor:"#00305A"}}>
                    <h3 className="card-title">Skills Chart</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <canvas
                      id="donutChart"
                      style={{
                        minHeight: 250,
                        height: 250,
                        maxHeight: 250,
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}

                {/* /.nav-tabs-custom */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default StatusProfile;