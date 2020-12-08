import React from "react";
import axios from "axios";
import history from "../history";

class LoanFormEdu extends React.Component {
  state = {
    custid: "",
    clg: "",
    course: "",
    per: "",
    amt: 0,
    gname: "",
    grelation: "",
    loanid: "",
    error: { cid:"" , college:"" , percentage:"", cou:"", amount:"", name:"", relation:"", lid:"" },
  };
  handleValidation() {
    const { custid, course, clg, per, amt, gname, grelation, loanid } = this.state;
    let isValid = true;
    let error = { cid: "", college: "", cou:"", percentage:"", amount:"", name:"", relation:"", lid:"" };
    if (!custid) {
      error.cid = "We require your ID";
      isValid = false;
    }
    if (!clg) {
      error.college = "You need to enter institue name";
      isValid = false;
    }
    if (!course) {
      error.cou = "You need to enter course";
      isValid = false;
    }
    if (!per) {
      error.percentage = "You need to enter percentage";
      isValid = false;
    }
    if (!amt) {
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

  submitEducationForm = () => {
    console.log(this.state);
    if(this.handleValidation()){
    axios
      .post("/loanform/edu", {
        custid: this.state.custid,
        clg: this.state.clg,
        course: this.state.course,
        per: this.state.per,
        amt: this.state.amt,
        gname: this.state.gname,
        grelation: this.state.grelation,
        loanid: this.state.loanid,
      })
      .then(function (res) {
        console.log(res.data.submit);
        //history.push("/dashboard");
        if (res.data.submit) {
          console.log("submitted succesfully");
          history.push("/done");
        } else {
          console.log("unsuccessfull");
        }
      })
      .catch(function (error) {
        console.log("error in submission");
        console.log(error);
      });
  }else{
    console.log("there is an error in input");
  }
}

  render() {
    const {error} = this.state;
    return (
      <div>
        <h3> Loan Application Form</h3>
        <br />
        <h4>EDUCATION</h4>
        <label>Enter Your Identification Number </label>
        <input onChange={(e) => this.setState({ custid: e.target.value })} />
        {error.cid !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.cid}</span>
        )}
        <br />
        <br />
        <label>Enter Institution Name</label>
        <input onChange={(e) => this.setState({ clg: e.target.value })} />
        {error.college !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.college}</span>
        )}
        <br />
        <br />
        <label>Name of enrolled course</label>
        <input onChange={(e) => this.setState({ course: e.target.value })} />
        {error.cou !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.cou}</span>
        )}
        <br />
        <br />
        <label>Percentage in latest degree</label>
        <input onChange={(e) => this.setState({ per: e.target.value })} />
        {error.percentage !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.percentage}</span>
        )}
        <br />
        <br />
        <label>Enter Loan Id</label>
        <input onChange={(e) => this.setState({ loanid: e.target.value })} />
        {error.lid !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.lid}</span>
        )}
        <br />
        <br />
        <label>Required Loan Amount</label>
        <input onChange={(e) => this.setState({ amt: e.target.value })} />
        {error.amount !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.amount}</span>
        )}
        <br />
        <br />
        <label>Enter Gurantor Name</label>
        <input onChange={(e) => this.setState({ gname: e.target.value })} />
        {error.name !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.name}</span>
        )}
        <br />
        <br />
        <label>Enter Gurantor Relation</label>
        <input onChange={(e) => this.setState({ grelation: e.target.value })} />
        {error.relation !== "" && (
          <span style={{ color: "yellow" }}>{this.state.error.relation}</span>
        )}
        <br />
        <br />

        <button onClick={this.submitEducationForm}>
          <h2>SUBMIT</h2>
        </button>
        <br />
        <br />
      </div>
    );
  }
}
export default LoanFormEdu;
