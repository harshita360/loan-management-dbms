import React from "react"
import axios from "axios"
import history from "../history"

class EmployeeSignIn extends React.Component{
  state = { employeId:"", password:""}
  handleSignIn = () => {
    console.log("function called");

    axios
      .post("employeesignin", {
        id: this.state.employeId,
        password: this.state.password,

      })
      .then(function (res) {
        console.log(res.data.auth);
        //history.push("/dashboard");
        if (res.data.auth) {
          console.log("you have succesfully signed in");
        } else {
          console.log("unsucessfull login");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h3>Employee sign in </h3>

        <input
          placeholder="enter employee Id"
          onChange={(e) => this.setState({ employeId: e.target.value })}
        />
        <br />
        <input
          placeholder="enter password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />


        <br />
        <br />
        <button onClick={this.handleSignIn}>Sign In</button>
      </div>
    );
  }
}
export default EmployeeSignIn;
