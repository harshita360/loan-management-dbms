import React from "react";
import { Link } from "react-router-dom";

class CustomerDashboard extends React.Component {
  render() {
    return (
      <div>
        <Link to="/viewloans">
          <button>View Loan schemes</button>
        </Link>
        <br />
        <br />
        <Link to="/viewapp">
          <button>Review my loan application</button>
        </Link>
        <br />
        <br />

        <Link to="/view">
          <button>Check my loan status</button>
        </Link>
        <br />
        <br />
        <Link to="/payments">
          <button>Pay my Loan</button>
        </Link>
      </div>
    );
  }
}

export default CustomerDashboard;
