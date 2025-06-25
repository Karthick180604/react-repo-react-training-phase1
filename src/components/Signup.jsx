import React from "react";
import { Button, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    // this.name = React.createRef();
    // this.email = React.createRef();
    // this.password = React.createRef();
    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
      nameError: false,
      emailError: false,
      passwordError: false,
    };
    this.signupHandler = this.signupHandler.bind(this);
  }
  signupHandler = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.userName,
      email: this.state.userEmail,
      password: this.state.userPassword,
    };
    this.props.onSignup(obj);
    this.setState({
      userName: "",
      userEmail: "",
      userPassword: "",
    });
  };
  loginRequest = (e) => {
    e.preventDefault();
    this.props.loginOrSignup();
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    if (name === "userEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const test = emailRegex.test(value);
      this.setState((prevState) => {
        return { emailError: !test };
      });
    }
    if (name === "userPassword") {
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
        name: "userName",
        label: "Name",
        type: "text",
        placeholder: "Enter your name",
        value: this.state.userName,
        error: "Enter valid name",
        errorState: this.state.nameError,
      },
      {
        name: "userEmail",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        value: this.state.userEmail,
        error: "Enter valid email",
        errorState: this.state.emailError,
      },
      {
        name: "userPassword",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        value: this.state.userPassword,
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
                  { name, label, type, placeholder, value, error, errorState },
                  index,
                ) => {
                  return (
                    <div className="auth-form-inside" key={index}>
                      <TextField
                        name={name}
                        label={label}
                        type={type}
                        placeholder={placeholder}
                        value={value}
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
