import React, { Component } from 'react';
import { connect } from "react-redux";
import { register } from "./../../Actions/register.action"

class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       password:""
    }
  }

  showError = ()=>{
    return (
      <div className="alert alert-danger alert-dismissible">
      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h4><i className="icon fa fa-ban" /> Error!</h4> Incorrect information
    </div>
    )
  }
  
  render() {
    return (
      <div class="hold-transition register-page">
          <div className="login-box">
            <div className="login-logo">
              <a href="../../index2.html">
                <b>CPE </b>Career Simulation
              </a>
            </div>
            {/* /.login-logo */}
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Register to start your session</p>
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

                  {this.props.registerReducer.isError ? this.showError() : null }
                  <div className="social-auth-links text-center mb-3">
                    <button
                    onClick={(e)=>
                      {
                        e.preventDefault()
                        this.props.register(this.props.history,this.state)
                      }
                      }
                    type="submit"
                      className="btn btn-block btn-primary"
                    >
                      Register
                    </button>
                    <button
                    onClick={(e)=>
                      {
                        e.preventDefault();
                        this.props.history.goBack()
                      }  
                      }
                        style={{marginTop: 8}}
                      className="btn btn-block btn-danger"
                    >
                      Cancle
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

const mapStateToProps = ({registerReducer}) => ({ registerReducer })

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
