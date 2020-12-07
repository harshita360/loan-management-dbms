import React from "react";
import { Link } from "react-router-dom";

class Dummy extends React.Component {
  render() {
    return (
      <div>
        <h1>SUCCESSFUL!</h1>
        <br />
        <br />
        <Link to="/customer/dashboard">
          <button>Go back to DashbOARD</button>
        </Link>
      </div>
    );
  }
}
export default Dummy;
