import React from "react";
import { Button, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      nameError: false,
      emailError: false,
      passwordError: false,
    };
    this.signupHandler = this.signupHandler.bind(this);
  }
  signupHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: this.name.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
    };
    console.log("signuphandler", this.name);
    this.props.onSignup(obj);
    this.name.current.value = "";
    this.email.current.value = "";
    this.password.current.value = "";
  };
  loginRequest = (e) => {
    e.preventDefault();
    this.props.loginOrSignup();
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "user-email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const test = emailRegex.test(value);
      this.setState((prevState) => {
        return { emailError: !test };
      });
    }
    if (name === "user-password") {
      const valid = value.length >= 8;
      this.setState((prevState) => {
        return { passwordError: !valid };
      });
    }
  };

  resetState = (e) => {
    const { name } = e.target;
    if (name === "user-name") {
      this.setState((prevState) => ({ nameError: false }));
    } else if (name === "user-email") {
      this.setState((prevState) => ({ emailError: false }));
    } else if (name === "user-password") {
      this.setState((prevState) => ({ nameError: false }));
    }
  };

  render() {
    const formFields = [
      {
        name: "user-name",
        label: "Name",
        type: "text",
        placeholder: "Enter your name",
        ref: this.name,
        error: "Enter valid name",
        errorState: this.state.nameError,
      },
      {
        name: "user-email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        ref: this.email,
        error: "Enter valid email",
        errorState: this.state.emailError,
      },
      {
        name: "user-password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        ref: this.password,
        error: "Minimum length should be 8",
        errorState: this.state.passwordError,
      },
    ];
    return (
      <>
        <div className="auth-container signup">
          <div className="auth-text-container">
            <h1>Sign up</h1>
          </div>
          <div className="auth-form-container">
            <form className="auth-form" onSubmit={this.signupHandler}>
              {formFields.map(
                (
                  { name, label, type, placeholder, ref, error, errorState },
                  index,
                ) => {
                  return (
                    <div className="auth-form-inside" key={index}>
                      <TextField
                        name={name}
                        label={label}
                        type={type}
                        placeholder={placeholder}
                        ref={ref}
                        // className='auth-input'
                        variant="standard"
                        sx={{
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "limegreen",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "limegreen",
                          },
                        }}
                        onBlur={(e) => this.resetState(e)}
                        error={errorState}
                        helperText={errorState ? error : ""}
                        onChange={(e) => this.onInputChange(e)}
                      ></TextField>
                    </div>
                  );
                },
              )}
              <Button
                variant="outlined"
                startIcon={<LoginIcon />}
                // sx={{
                //     // borderColor: 'limegreen',
                //     color: "limegreen",
                //     width: "70%",
                // }}
                className="auth-button"
                type="submit"
              >
                Sign Up
              </Button>
              <Button
                // className='auth-button'
                sx={{
                  color: "limegreen",
                }}
                onClick={this.loginRequest}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
