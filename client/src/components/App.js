import React from "react";
import axios from "axios";
import CustomerSignIn from "./CustomerSignIn";
import history from "../history";
import { Router, Route } from "react-router-dom";
import Dummy from "./Dummy";
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
        page one
        <button onClick={this.showData}>Click here to display</button>
        <Router history={history}>
          <div>
            <Route exact path="/custsignin" component={CustomerSignIn} />
            <Route exact path="/dummy" component={Dummy} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
