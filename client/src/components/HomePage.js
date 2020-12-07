import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>This is Home Screen</h1>
        <br />
        <br />
        <Link to="/custsignin" className="ui button">
          APPLY FOR A LOAN
        </Link>
      </div>
    );
  }
}
export default HomePage;
