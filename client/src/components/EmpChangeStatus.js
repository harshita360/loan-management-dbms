import React from "react";
import axios from "axios";

class EmpChangeStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      eduformlist: [],
      busformlist: [],
      mortformlist: [],
      empid: "c101",
    };
  }

  updateStatus = (formid, status) => {
    axios
      .post("/emp/updatestatus", {
        status: status,
        empid: this.props.match.params.id,
        formid: formid,
      })
      .then(function (res) {
        //console.log(res.data);
        //history.push("/dashboard");
        if (res.data.ok) {
          console.log("done!!");
        } else {
          console.log("thats already being reviewed");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    //console.log(formid);
    //console.log(status);
  };

  getEduLoanForms = async () => {
    console.log("get edu loan form called");
    const response = await axios.get("/emp/geteducationforms");
    console.log(response.data);
    this.setState({
      eduformlist: [...this.state.eduformlist, ...response.data],
    });
    console.log(this.state.eduformlist);
  };
  getBusLoanForms = async () => {
    console.log("get bus loan form called");
    const response = await axios.get("/emp/getbusinessforms");
    console.log(response.data);
    this.setState({
      busformlist: [...this.state.busformlist, ...response.data],
    });
    console.log(this.state.busformlist);
  };
  getMortLoanForms = async () => {
    console.log("get loan form called");
    const response = await axios.get("/emp/getmortgageforms");
    console.log(response.data);
    this.setState({
      mortformlist: [...this.state.mortformlist, ...response.data],
    });
    console.log(this.state.mortformlist);
  };

  componentDidMount() {
    this.getEduLoanForms();
    this.getBusLoanForms();
    this.getMortLoanForms();
  }
  renderEduLoanForms = () => {
    return this.state.eduformlist.map((elem) => {
      console.log(elem);
      return (
        <div className="item" key={elem.form_id}>
          <h3>{elem.fname}</h3>

          <h3>{elem.form_id}</h3>

          <h3>{elem.loan_id}</h3>

          <h3>{elem.loan_name}</h3>

          <h3>{elem.state}</h3>

          <h3>{elem.gname}</h3>
          <h3>{elem.college}</h3>
          <h3>{elem.percentage}</h3>

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
  renderBusLoanForms = () => {
    return this.state.busformlist.map((elem) => {
      console.log(elem);
      return (
        <div className="item" key={elem.form_id}>
          <h3>{elem.fname}</h3>

          <h3>{elem.form_id}</h3>

          <h3>{elem.loan_id}</h3>

          <h3>{elem.loan_name}</h3>

          <h3>{elem.state}</h3>

          <h3>{elem.gname}</h3>
          <h3>{elem.type_of_business}</h3>
          <h3>{elem.investment_amt}</h3>

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

  renderMortLoanForms = () => {
    return this.state.mortformlist.map((elem) => {
      console.log(elem);
      return (
        <div className="item" key={elem.form_id}>
          <h3>{elem.fname}</h3>

          <h3>{elem.form_id}</h3>

          <h3>{elem.loan_id}</h3>

          <h3>{elem.loan_name}</h3>

          <h3>{elem.state}</h3>

          <h3>{elem.gname}</h3>
          <h3>{elem.location}</h3>
          <h3>{elem.empid_status}</h3>

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
    console.log(this.props.match.params.id);
    return (
      <div>
        <h2>List of Applications</h2>
        <br />
        <br />
        <div>{this.renderEduLoanForms()}</div>
        <div>{this.renderBusLoanForms()}</div>
        <div>{this.renderMortLoanForms()}</div>
      </div>
    );
  }
}

export default EmpChangeStatus;
