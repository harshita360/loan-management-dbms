import React from "react";
import axios from "axios";

class LoanFormMor extends React.Component {
  state = {
    custid: "",
    location: "",
    empstatus: "",
    amt: 0,
    gname: "",
    grelation: "",
    loanid: "",
    error: {
      cid: "",
      loc: "",
      emps: "",
      amount: "",
      name: "",
      relation: "",
      lid: "",
    },
  };
  handleValidation() {
    const {
      custid,
      location,
      empstatus,
      amount,
      gname,
      grelation,
      loanid,
    } = this.state;
    let isValid = true;
    let error = {
      cid: "",
      loc: "",
      emps: "",
      amount: "",
      name: "",
      relation: "",
      lid: "",
    };
    if (!custid) {
      error.cid = "We require your ID";
      isValid = false;
    }
    if (!location) {
      error.loc = "You need to enter location of the property";
      isValid = false;
    }
    if (!empstatus) {
      error.emps = "You need to enter employment status";
      isValid = false;
    }
    if (!amount) {
      error.amount = "You need to enter required amount";
      isValid = false;
    }
    if (!gname) {
      error.name = "You need to enter a gurantor name";
      isValid = false;
    }
    if (!grelation) {
      error.relation = "You need to enter a gurantor relation";
      isValid = false;
    }
    if (!loanid) {
      error.lid = "You need to enter a loan Id";
      isValid = false;
    }
    this.setState({ error: error });
    return isValid;
  }
  submitmorform = () => {
    console.log(this.state);
    if (this.handleValidation()) {
      axios
        .post("morloanform", {
          custid: this.state.custid,
          location: this.state.location,
          empstatus: this.state.empstatus,
          amt: this.state.amt,
          gname: this.state.gname,
          grelation: this.state.grelation,
          loanid: this.state.loanid,
        })
        .then(function (res) {
          if (res.data.submit) {
            console.log("inserted msg from front end");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("there is an error in the input");
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Mortgage Loan Application Form</h2>
        <br />
        <hr />
        <br />
        <div className="ui centered grid">
          <div className="twelve wide column">
            <label>
              Your Identification Number &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input" id="in">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ custid: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.cid !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.cid}</span>
            )}

            <br />
            <br />
            <label>
              Property Location &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ location: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.loc !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.loc}</span>
            )}

            <br />
            <br />
            <label>
              Employement Status &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ empstatus: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>

            {error.emps !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.emps}</span>
            )}
            <br />
            <br />

            <label>
              Enter Loan Id &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ loanid: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.lid !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.lid}</span>
            )}

            <br />
            <br />
            <label>
              Required Loan Amount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ amt: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.amount !== "" && (
              <span style={{ color: "#39ff14" }}>
                {this.state.error.amount}
              </span>
            )}

            <br />
            <br />
            <label>
              Enter Gurantor Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ gname: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>
            {error.name !== "" && (
              <span style={{ color: "#39ff14" }}>{this.state.error.name}</span>
            )}

            <br />
            <br />
            <label>
              Enter Gurantor Relation &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp;
            </label>
            <div className="ui corner labeled input">
              <input
                type="text"
                placeholder="your text here..."
                onChange={(e) => this.setState({ grelation: e.target.value })}
                style={{
                  width: "22vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                }}
              />
              <div className="ui corner label">
                <i className="asterisk icon"></i>
              </div>
            </div>

            {error.relation !== "" && (
              <span style={{ color: "#39ff14" }}>
                {this.state.error.relation}
              </span>
            )}
            <br />
            <br />
            <br />
            <br />

            <div className="ui large buttons">
              <button className="ui green button" onClick={this.submitmorform}>
                Submit
              </button>
              <div className="or"></div>
              <button className="ui red button">Cancel</button>
            </div>

            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default LoanFormMor;
