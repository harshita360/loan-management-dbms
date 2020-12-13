import React from "react";
import axios from "axios";

class CustomerViewStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formid: 0, status: [], exist: "display" };
  }

  getstatus = async () => {
    console.log(this.state.formid);
    console.log("function called");
    const response = await axios.post("/viewstatus", {
      formid: this.state.formid,
    });
    console.log(response.data);
    // .then(function(res){
    if (response.data.exist === "error") {
      console.log("database error");
      this.setState({ exist: response.data.exist });
    } else if (response.data.exist === "invalid") {
      console.log("form id is invalid");
      this.setState({ exist: response.data.exist });
    } else if (response.data.exist === "not seen") {
      console.log("not viewed application");
      this.setState({ exist: response.data.exist });
    } else {
      this.setState({
        exist: "status",
        status: [...this.state.status, ...response.data],
      });
      console.log(this.state.status);
    }

    // this.setState({
    //   lid:response.data[0].loan_id,
    //   form: [...this.state.status,...response.data],
    // });
    // console.log(this.state.status);
  };
  renderstatus = () => {
    console.log("called");
    return this.state.status.map((elem) => {
      console.log(elem);
      return (
        <div key={elem.status}>
          <h2>Form ID:{elem.form_id}</h2>
          <h2>Status of your form:{elem.status}</h2>
          <h2>Date:{elem.date}</h2>
        </div>
      );
    });
  };

  displayError = () => {
    return (
      <div>
        <h2>There was an error</h2>
      </div>
    );
  };
  render() {
    if (this.state.exist === "display") {
      return (
        <div className="ui centered grid">
          <div className="six wide column">
            <label>Enter Formid &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; </label>
            <div class="ui corner labeled input">
              <input
                onChange={(e) => this.setState({ formid: e.target.value })}
              />
              <div class="ui corner label">
                <i class="asterisk icon"></i>
              </div>
            </div>
            <br />
            <br />
            <button onClick={this.getstatus}>
              <h2>SUBMIT</h2>
            </button>
          </div>
        </div>
      );
    }
    if (this.state.exist === "invalid") {
      return <h2>Invalid FormID</h2>;
    } else if (this.state.exist === "not seen") {
      return <h2>Application not viewed</h2>;
    } else if (this.state.exist === "status") {
      console.log("else part");
      return <div className="ui class">{this.renderstatus()}</div>;
    }
  }
}
export default CustomerViewStatus;
