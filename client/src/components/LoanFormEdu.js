import React from "react";

class LoanFormEdu extends React.Component {
  state = {
    fname: "",
    mname: "",
    lname: "",
    clg: "",
    adhrno: 0,
    course: "",
    per: "",
    gname: "",
    grelation: "",
    loanname: "",
  };

  render() {
    return (
      <div>
        <h3> Loan Application Form</h3>
        <br />
        <h4>EDUCATION</h4>
        <label>Enter First Name </label>
        <input />
        <br />
        <br />
        <label>Enter Middle Name </label>
        <input />
        <br />
        <br />
        <label>Enter Last Name </label>
        <input />
        <br />
        <br />
        <label>Enter Institution Name</label>
        <input />
        <br />
        <br />
        <label>Enter Aadhar Card No</label>
        <input />
        <br />
        <br />
        <label>Name of enrolled course</label>
        <input />
        <br />
        <br />
        <label>Percentage in latest degree</label>
        <input />
        <br />
        <br />
        <label>Enter Gurantor Name</label>
        <input />
        <br />
        <br />
        <label>Enter Gurantor Relation</label>
        <input />
        <br />
        <br />
        <label>Enter Loan Name</label>
        <input />
        <br />
        <br />
        <button>
          <h2>SUBMIT</h2>
        </button>
        <br />
        <br />
      </div>
    );
  }
}
export default LoanFormEdu;
