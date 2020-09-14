import React, { Component } from "react";
import { login, autoLogin } from "./../../Actions/login.action";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    this.props.autoLogin(this.props.history);
  }

  showError = () => {
    return (
      <div className="alert alert-danger alert-dismissible">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <h4>
          <i className="icon fa fa-ban" /> Error!
        </h4>{" "}
        Incorrect username or password
      </div>
    );
  };

  render() {
    return (
      <div class="hold-transition login-page" >
          <div className="login-box">
            <div className="login-logo">
              <a href="../../index2.html">
                <b >CPE </b>Career Simulation
              </a>
            </div>
            {/* /.login-logo */}
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <form action="../../index3.html" method="post">
                  <div className="input-group mb-3">
                    <input
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>

                  {this.props.loginReducer.isError ? this.showError() : null}
                  <div className="social-auth-links text-center mb-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.login(this.props.history, this.state);
                      }}
                      type="submit"
                      className="btn btn-block btn-primary"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => this.props.history.push("/register")}
                      type="submit"
                      style={{ marginTop: 8 }}
                      className="btn btn-block btn-danger"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
              {/* /.login-card-body */}
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({ loginReducer });

const mapDispatchToProps = {
  login,
  autoLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
