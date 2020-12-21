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
      <div
        className="card"
        style={{
          backgroundColor: "#e2e2e2",
          padding: "10px",
        }}
      >
        <div className="content">
          <a href="/#" className="ui red right ribbon label">
            BUSINESS
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
                <h5>Applicant Name:&nbsp;</h5>
              </label>
              {this.state.details.fname}&nbsp;{this.state.details.mname}&nbsp;
              {this.state.details.lname}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Contact Number:&nbsp;</h5>
              </label>
              {this.state.details.phone_num}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>State of Residence:&nbsp;</h5>
              </label>
              {this.state.details.state}
            </div>
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
                <h5>Type of Business:&nbsp;</h5>
              </label>
              {this.state.details.type_of_business}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Investment Amount&nbsp;</h5>
              </label>
              {this.state.details.investment_amt}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Required Amount&nbsp;</h5>
              </label>
              {this.state.details.req_amt}
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
                <h5>Applicant Name:&nbsp;</h5>
              </label>
              {this.state.details.fname}&nbsp;{this.state.details.mname}&nbsp;
              {this.state.details.lname}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Contact Number:&nbsp;</h5>
              </label>
              {this.state.details.phone_num}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>State of Residence:&nbsp;</h5>
              </label>
              {this.state.details.state}
            </div>
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
      <div
        className="card"
        style={{
          backgroundColor: "#e2e2e2",
          padding: "10px",
        }}
      >
        <div className="content">
          <a href="/#" className="ui red right ribbon label">
            MORTGAGE
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
                <h5>Applicant Name:&nbsp;</h5>
              </label>
              {this.state.details.fname}&nbsp;{this.state.details.mname}&nbsp;
              {this.state.details.lname}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Contact Number:&nbsp;</h5>
              </label>
              {this.state.details.phone_num}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>State of Residence:&nbsp;</h5>
              </label>
              {this.state.details.state}
            </div>
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
                <h5>Employement Status:&nbsp;</h5>
              </label>
              {this.state.details.emp_status}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Property Location:&nbsp;</h5>
              </label>
              {this.state.details.location}
            </div>
            <div className="item">
              <label style={{ color: "#900C3F" }}>
                <h5>Required amount:&nbsp;</h5>
              </label>
              {this.state.details.req_amt}
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

  render() {
    console.log(this.state.lid);
    if (this.state.lid.charAt(0) === "t") {
      return (
        <div className="ui centered grid">
          <div className="six wide column">
            <label>
              <h2>Enter Formid &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</h2>{" "}
            </label>
            <div className="ui corner labeled input">
              <input
                onChange={(e) => this.setState({ formid: e.target.value })}
                style={{
                  width: "15vw",
                  backgroundColor: "#323232",
                  color: "white",
                  border: "1px solid white",
                  marginTop: "50px",
                }}
              />
              <div
                className="ui corner label"
                style={{
                  marginTop: "50px",
                }}
              >
                <i className="asterisk icon"></i>
              </div>
            </div>
            <br />
            <br />
            <center>
              <div className="ui large buttons">
                <button
                  className="ui green button"
                  onClick={this.getform}
                  style={{
                    marginTop: "50px",
                  }}
                >
                  Submit
                </button>
                <div
                  className="or"
                  style={{
                    marginTop: "50px",
                  }}
                ></div>
                <button
                  className="ui red button"
                  style={{
                    marginTop: "50px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </center>
          </div>
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
