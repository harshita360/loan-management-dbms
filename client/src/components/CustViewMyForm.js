import React from "react";
import axios from "axios";

class CustViewMyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formid: 0, form: [], lid: "true", details: {} };
  }

  getform = async () => {
    console.log(this.state.formid);
    console.log("function called");
    const response = await axios.post("/viewform", {
      formid: this.state.formid,
    });
    console.log(response.data);
    console.log(response.data[0].loan_id);

    this.setState({
      lid: response.data[0].loan_id,
      form: [...this.state.form, ...response.data],
      details: response.data[0],
    });
    console.log(this.state.form);
    //  console.log(this.state.lid);
  };
  renderbusinessform = () => {
    console.log("in render business");
    console.log(this.state.details.form_id);
    return (
      <div>
        <h3>Application ID={this.state.details.form_id}</h3>
        <br />
        <h3>Gurantor name={this.state.details.g_name}</h3>
        <br />
        <h3>Gurantor relation={this.state.details.g_relation}</h3>
        <br />
        <h3>Loan ID={this.state.details.loan_id}</h3>
        <br />
        <h3>Loan name={this.state.details.loan_name}</h3>
        <br />
        <h3>Amount required={this.state.details.req_amt}</h3>
        <br />
        <h3>Type of business={this.state.details.type_of_business}</h3>
        <br />
        <h3>Investment amount={this.state.details.investment_amt}</h3>
        <br />
      </div>
    );
  };
  rendereducationform = () => {
    return (
      <div
        className="card"
        style={{
          backgroundColor: "#e2e2e2",
          padding: "10px",
        }}
      >
        <div className="content">
          <a href="/#" className="ui red right ribbon label">
            EDUCATION
          </a>

          <div className="meta" style={{ padding: "35px" }}>
            <label className="ui yellow horizontal label">
              <h5 style={{ color: "black" }}>Application Number:&nbsp;</h5>
            </label>
            {this.state.details.form_id}
          </div>
          <div
            className="ui relaxed divided list"
            style={{ fontSize: "16px", paddingLeft: "40px", color: "black" }}
          >
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Issued Loan ID:&nbsp;</h5>
              </label>
              {this.state.details.loan_id}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Loan Name:&nbsp;</h5>
              </label>
              {this.state.details.loan_name}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>State Of Residence:&nbsp;</h5>
              </label>
              {this.state.details.state}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Institution Name:&nbsp;</h5>
              </label>
              {this.state.details.college}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Score:&nbsp;</h5>
              </label>
              {this.state.details.percentage}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Gurantor Name:&nbsp;</h5>
              </label>
              {this.state.details.g_name}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Gurantor Relation:&nbsp;</h5>
              </label>
              {this.state.details.g_relation}
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  };
  rendermortgageform = () => {
    return (
      <div>
        <h3>Application ID={this.state.details.form_id}</h3>
        <br />
        <h3>Gurantor name={this.state.details.g_name}</h3>
        <br />
        <h3>Gurantor relation={this.state.details.g_relation}</h3>
        <br />
        <h3>Loan ID={this.state.details.loan_id}</h3>
        <br />
        <h3>Loan name={this.state.details.loan_name}</h3>
        <br />
        <h3>Amount required={this.state.details.req_amt}</h3>
        <br />
        <h3>Location={this.state.details.location}</h3>
        <br />
        <h3>Employement Status={this.state.details.emp_status}</h3>
        <br />
      </div>
    );
  };

  render() {
    console.log(this.state.lid);
    if (this.state.lid.charAt(0) === "t") {
      return (
        <div>
          <label>Enter Formid</label>
          <input onChange={(e) => this.setState({ formid: e.target.value })} />
          <button onClick={this.getform}>
            <h2>SUBMIT</h2>
          </button>
        </div>
      );
    } else if (this.state.lid.charAt(0) === "b") {
      return (
        <div>
          <h2>YOUR APPLICATION</h2>
          {this.renderbusinessform()}
        </div>
      );
    } else if (this.state.lid.charAt(0) === "e") {
      return (
        <div>
          <h2>YOUR APPLICATION</h2>
          {this.rendereducationform()}
        </div>
      );
    } else {
      return (
        <div>
          <h2>YOUR APPLICATION</h2>
          {this.rendermortgageform()}
        </div>
      );
    }
  }
}
export default CustViewMyForm;
