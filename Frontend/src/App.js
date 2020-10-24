import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";

// Components
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import StatusProfile from "./Components/StatusProfile";
import Quiz from "./Components/Quiz";
import { server, YES } from "./constants";
import { setApp } from "./Actions/app.action";

// Css
import "./App.css";

const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) == YES;
};

// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    this.props.setApp(this);
  }

  redirectToLogin = () => {
    return <Redirect to="/login" />;
  };

  render() {
    return (
      <Router>
        <div>
          {isLoggedIn() && <Header />}
          {isLoggedIn() && <Menu />}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <SecuredRoute path="/Home" component={Home} />
            <SecuredRoute path="/StatusProfile" component={StatusProfile} />
            <SecuredRoute path="/Quiz" component={Quiz} />
            <Route exact={true} path="/" component={this.redirectToLogin} />
            <Route path="*" component={this.redirectToLogin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Route คือ นำทางไปหน้าอื่น
