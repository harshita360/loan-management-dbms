import React from "react";
import axios from "axios";
import history from "../history";

class EmployeeSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeId: "",
      password: "",
      error: { empid: "", pass: "" },
    };
  }

  handleValidation() {
    const { employeId, password } = this.state;
    let isValid = true;
    let error = { empid: "", pass: "" };
    if (!employeId) {
      error.empid = "We require your ID";
      isValid = false;
    }
    if (!password) {
      error.pass = "You need to enter a password";
      isValid = false;
    }
    this.setState({ error: error });
    return isValid;
  }
  handleSignIn = (empid) => {
    console.log("function called");
    console.log(this.state);
    this.handleValidation();
    console.log(this.state);

    if (this.handleValidation()) {
      axios
        .post("employeesignin", {
          id: this.state.employeId,
          password: this.state.password,
        })
        .then(function (res) {
          console.log(res.data.auth);
          console.log("reached in then");
          //history.push("/dashboard");
          if (res.data.auth) {
            console.log("you have succesfully signed in");
            console.log(empid);
            history.push(`./emp/editstatus/${empid}`);
          } else {
            console.log("unsucessfull login");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("there is error in input");
    }
  };
  render() {
    const { error } = this.state;
    //console.log(this.state.employeId);
    return (
      <div>
        <h3>Employee sign in </h3>

        <input
          placeholder="enter employee Id"
          onChange={(e) => this.setState({ employeId: e.target.value })}
        />
        {error.empid !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.empid}</span>
        )}
        <br />
        <input
          placeholder="enter password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        {error.pass !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.pass}</span>
        )}
        <br />

        <br />
        <br />
        <button onClick={() => this.handleSignIn(this.state.employeId)}>
          Sign In
        </button>
      </div>
    );
  }
}
export default EmployeeSignIn;
