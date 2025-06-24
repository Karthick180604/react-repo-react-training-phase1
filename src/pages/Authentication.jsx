import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "./Home";
import "./pages.css";

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      login: true,
      userLogin: false,
      currentUser: {},
    };
    this.onSignup = this.onSignup.bind(this);
  }
  onSignup = (newUser) => {
    const userExist = this.state.users.find((user) => {
      return user.email === newUser.email;
    });
    const isUserExist = !!userExist;
    if (!isUserExist) {
      this.setState(
        (prevState) => {
          return {
            users: [...prevState.users, newUser],
            login: !prevState.login,
          };
        },
        () => {
          console.log(this.state.users);
        },
      );
    } else {
      console.log("User already exist");
    }
  };
  onLogin = (loginUser) => {
    const user = this.state.users.find((user) => {
      return (
        user.email == loginUser.email && user.password == loginUser.password
      );
    });
    console.log(user);
    const validUser = !!user;
    if (validUser) {
      console.log("Home page");
      this.setState((prevState) => {
        return { userLogin: true, currentUser: user };
      });
    }
  };
  loginOrSignup = () => {
    this.setState((prevState) => {
      return { login: !prevState.login };
    });
  };
  onLogout = () => {
    this.setState((prevState) => {
      return { userLogin: false };
    });
  };
  render() {
    if (this.state.userLogin) {
      return (
        <Home userName={this.state.currentUser.name} onLogout={this.onLogout} />
      );
    } else {
      return (
        <>
          <div className="container">
            {this.state.login ? (
              <Login
                loginOrSignup={this.loginOrSignup}
                onLogin={this.onLogin}
              />
            ) : (
              <Signup
                loginOrSignup={this.loginOrSignup}
                onSignup={this.onSignup}
              />
            )}
          </div>
        </>
      );
    }
  }
}
export default Authentication;

// components
// - /Form - formFields, callback

// pages
// - Login
// - Signup

// middleware
// - Authentication
