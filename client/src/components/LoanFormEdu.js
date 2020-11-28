import React from "react";
import axios from "axios";

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
  };

  submitEducationForm = () => {
    console.log(this.state);
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
        } else {
          console.log("unsuccessfull");
        }
      })
      .catch(function (error) {
        console.log("error in submission");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h3> Loan Application Form</h3>
        <br />
        <h4>EDUCATION</h4>
        <label>Enter Your Identification Number </label>
        <input onChange={(e) => this.setState({ custid: e.target.value })} />
        <br />
        <br />
        <label>Enter Institution Name</label>
        <input onChange={(e) => this.setState({ clg: e.target.value })} />
        <br />
        <br />
        <label>Name of enrolled course</label>
        <input onChange={(e) => this.setState({ course: e.target.value })} />
        <br />
        <br />
        <label>Percentage in latest degree</label>
        <input onChange={(e) => this.setState({ per: e.target.value })} />
        <br />
        <br />
        <label>Enter Loan Id</label>
        <input onChange={(e) => this.setState({ loanid: e.target.value })} />
        <br />
        <br />
        <label>Required Loan Amount</label>
        <input onChange={(e) => this.setState({ amt: e.target.value })} />
        <br />
        <br />
        <label>Enter Gurantor Name</label>
        <input onChange={(e) => this.setState({ gname: e.target.value })} />
        <br />
        <br />
        <label>Enter Gurantor Relation</label>
        <input onChange={(e) => this.setState({ grelation: e.target.value })} />
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
