import React, { createRef } from "react";
import "./components.css";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.email = createRef();
    this.password = createRef();
    this.loginHanlder = this.loginHandler.bind(this);
    this.state = {
      emailError: true,
      passwordError: true,
    };
  }
  loginHandler = (e) => {
    e.preventDefault();
    if (
      this.state.emailError &&
      this.state.passwordError &&
      this.email.current.value !== 0 &&
      this.password.current.value !== 0
    ) {
      const loginObj = {
        email: this.email.current.value,
        password: this.password.current.value,
      };
      this.props.onLogin(loginObj);
      this.email.current.value = "";
      this.password.current.value = "";
    }
  };
  signUpRequest = (e) => {
    e.preventDefault();
    console.log("executing");
    this.props.loginOrSignup();
  };
  onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "user-email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const test = emailRegex.test(value);
      this.setState((prevState) => {
        return { emailError: test };
      });
    }
    if (name === "user-password") {
      const valid = value.length >= 8;
      this.setState((prevState) => {
        return { passwordError: valid };
      });
    }
  };
  render() {
    const formFields = [
      {
        name: "user-email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        ref: this.email,
        error: "Enter valid email",
      },
      {
        name: "user-password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        ref: this.password,
        error: "Enter valid password",
      },
    ];
    return (
      <>
        <div className="auth-container login">
          <div className="auth-text-container">
            <h1 className="auth-text">Login</h1>
          </div>
          <div className="auth-form-container">
            <form className="auth-form" onSubmit={this.loginHandler}>
              {formFields.map(
                ({ name, label, type, placeholder, ref, error }, index) => (
                  <div className="auth-form-inside" key={index}>
                    <input
                      name={name}
                      label={label}
                      type={type}
                      placeholder={placeholder}
                      ref={ref}
                      className="auth-input"
                      onChange={(e) => this.onInputChange(e)}
                    ></input>
                    <p className="form-error">
                      {(name === "user-email" &&
                        (this.state.emailError ? "" : `*${error}`)) ||
                        (name === "user-password" &&
                          (this.state.passwordError ? "" : `*${error}`))}
                    </p>
                  </div>
                ),
              )}

              <Button
                variant="outlined"
                startIcon={<LoginIcon />}
                color="secondary"
                type="submit"
              >
                Login
              </Button>
              <button className="auth-button" onClick={this.signUpRequest}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
