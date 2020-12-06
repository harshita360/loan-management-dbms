import React from "react";
import axios from "axios";
import CustomerSignIn from "./CustomerSignIn";
import LoansList from "./LoansList";
import history from "../history";
import { Router, Route } from "react-router-dom";
import Dummy from "./Dummy";
import LoanFormEdu from "./LoanFormEdu";
import EmployeeSignIn from "./EmployeeSignIn";
import LoanFormbusi from "./LoanFormbusi";
import LoanFormMor from "./LoanFormMor";
import EmpChangeStatus from "./EmpChangeStatus";
import CustViewMyForm from "./CustViewMyForm";
import CustomerViewStatus from"./CustomerViewStatus";
import Footer from "./Footer";

class App extends React.Component {
  showData = async () => {
    const response = await axios.get("/showData");
    //  const body = await response.json();
    if (response.status !== 200) {
      console.log("some error");
    }

    console.log(response.data);
  };
  render() {
    return (
      <div style={{ backgroundColor: "#323232", color: "white" }}>
        <div
          className="ui secondary  menu"
          style={{ backgroundColor: "#990000", color: "white", height: "10vh" }}
        >
          <a href="/#" className="active item" style={{ color: "white" }}>
            Home
          </a>
          <a href="/#" className="item" style={{ color: "white" }}>
            Messages
          </a>
          <a href="/#" className="item" style={{ color: "white" }}>
            Friends
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input
                  type="text"
                  placeholder="Search..."
                  style={{ color: "white" }}
                />
                <i className="search link icon"></i>
              </div>
            </div>
            <a href="/#" className="ui item" style={{ color: "white" }}>
              Logout
            </a>
          </div>
        </div>
        <Router history={history}>
          <div>
            <Route exact path="/custsignin" component={CustomerSignIn} />
            <Route exact path="/empsignin" component={EmployeeSignIn} />
            <Route exact path="/dummy" component={Dummy} />
            <Route exact path="/viewloans" component={LoansList} />
            <Route exact path="/educationform" component={LoanFormEdu} />
            <Route exact path="/businessform" component={LoanFormbusi} />
            <Route exact path="/mortgageform" component={LoanFormMor} />
            <Route
              exact
              path="/emp/editstatus/:id"
              component={EmpChangeStatus}
            />
            <Route exact path="/viewapp" component={CustViewMyForm} />
            <Route exact path="/view" component={CustomerViewStatus} />
          </div>
        </Router>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default App;
