import React from "react";
import history from "../history";
import axios from "axios";

class CustomerSignIn extends React.Component {
  state = { customerId: 0, password: "", account: 0 };
  handleSignIn = () => {
    console.log("function called");

    axios
      .post("showData", {
        id: this.state.customerId,
        password: this.state.password,
        account: this.state.account,
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
        <h3>customer sign in </h3>

        <input
          placeholder="enter customer Id"
          onChange={(e) => this.setState({ customerId: e.target.value })}
        />
        <br />
        <input
          placeholder="enter password"
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />
        <input
          placeholder="enter account number"
          onChange={(e) => this.setState({ account: e.target.value })}
        />
        <br />

        <br />
        <br />
        <button onClick={this.handleSignIn}>Sign In</button>
      </div>
    );
  }
}
export default CustomerSignIn;
