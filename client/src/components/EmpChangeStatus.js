import React from "react";
import axios from "axios";

class EmpChangeStatus extends React.Component {
  state = { status: "", formlist: [], empid: "c101" };

  updateStatus = (formid, status) => {
    axios
      .post("/updatestatus", {
        status: status,
        empid: this.state.empid,
        formid: formid,
      })
      .then(function (res) {
        //console.log(res.data);
        //history.push("/dashboard");
        console.log("received");
      })
      .catch(function (error) {
        console.log(error);
      });
    //console.log(formid);
    //console.log(status);
  };

  getLoanForms = async () => {
    console.log("get loan form called");
    const response = await axios.get("/emp/getloans");
    console.log(response.data);
    this.setState({
      formlist: [...this.state.formlist, ...response.data],
    });
    console.log(this.state.formlist);
  };

  componentDidMount() {
    this.getLoanForms();
  }
  renderLoanForms = () => {
    return this.state.formlist.map((elem) => {
      console.log(elem);
      return (
        <div className="item" key={elem.loan_id}>
          <h2>{elem.fname}</h2>
          <br />
          <h2>{elem.form_id}</h2>
          <br />
          <h3>{elem.loan_id}</h3>

          <h3>{elem.loan_name}</h3>

          <h3>{elem.state}</h3>

          <h3>{elem.gname}</h3>

          <br />
          <button
            onClick={() => this.updateStatus(elem.form_id, "UNDER REVIEW")}
          >
            UNDER REVIEW
          </button>
          <br />
          <br />

          <button onClick={() => this.updateStatus(elem.form_id, "ACCEPTED")}>
            ACCEPTED
          </button>
          <br />
          <br />
          <button onClick={() => this.updateStatus(elem.form_id, "REJECTED")}>
            REJECTED
          </button>

          <hr />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h2>List of Applications</h2>
        <br />
        <br />
        <div>{this.renderLoanForms()}</div>
      </div>
    );
  }
}

export default EmpChangeStatus;
