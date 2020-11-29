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
      <div>
        <h1>Loan </h1>
        <Router history={history}>
          <div>
            <Route exact path="/custsignin" component={CustomerSignIn} />
            <Route exact path="/empsignin" component={EmployeeSignIn} />
            <Route exact path="/dummy" component={Dummy} />
            <Route exact path="/viewloans" component={LoansList} />
            <Route exact path="/educationform" component={LoanFormEdu} />
            <Route exact path="/businessform" component={LoanFormbusi} />
            <Route exact path="/mortgageform" component={LoanFormMor} />
            <Route exact path="/emp/editstatus" component={EmpChangeStatus} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
