import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "./Home";
import "./pages.css";
import { useNavigate } from "react-router-dom";

const FunctionalWrapper = (Authentication) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    return <Authentication {...props} navigate={navigate} />;
  };
  return Wrapper;
};

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
      localStorage.setItem("user", user.email);
      this.props.navigate(`/home/${user.email}`);
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
    // if (this.state.userLogin) {
    //   return (
    //     <Home userName={this.state.currentUser.name} onLogout={this.onLogout} />
    //   );
    // } else {
    return (
      <>
        <div className="container">
          {this.state.login ? (
            <Login loginOrSignup={this.loginOrSignup} onLogin={this.onLogin} />
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
export default FunctionalWrapper(Authentication);

// components
// - /Form - formFields, callback

// pages
// - Login
// - Signup

// middleware
// - Authentication
