import React from "react";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props.data + " " + state.data);
    return { data: props.data };
  }
  render() {
    return (
      <>
        <h1>Data fetched : {this.state.data}</h1>
      </>
    );
  }
}

export default Data;
