import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  logoutHandler = () => {
    this.props.onLogout();
  };
  render() {
    return (
      <>
        <h1>Welcome {this.props.userName}</h1>
        <button onClick={this.logoutHandler}>Logout</button>
      </>
    );
  }
}

export default Home;
