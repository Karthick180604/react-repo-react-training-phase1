import React from "react";
import ListOfTask from "../components/ListOfTask";
import ActivityPagination from "../components/ActivityPagination";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

const FunctionalWrapper = (Home) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const { useremail } = useParams();
    return <Home {...props} email={useremail} navigate={navigate} />;
  };
  return Wrapper;
};

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  logoutHandler = () => {
    localStorage.removeItem("user");
    this.props.navigate("/");
  };
  render() {
    return (
      <>
        <h1>Welcome {this.props.email}</h1>
        <button onClick={this.logoutHandler}>Logout</button>
        <nav>
          <Link to="tasks">Tasks</Link>
          <Link to="activitylist">Activities List</Link>
        </nav>
        <Outlet />
      </>
    );
  }
}

export default FunctionalWrapper(Home);
