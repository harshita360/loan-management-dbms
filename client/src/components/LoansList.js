import React from "react";
import axios from "axios";

class LoansList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edloans: [], busloans: [] };
  }

  componentDidMount() {
    this.getEduLoans();
    this.getBusLoans();
  }
  getEduLoans = async () => {
    console.log("function called");
    const response = await axios.get("/edu/loans");
    console.log(response.data);
    this.setState({
      edloans: [...this.state.edloans, ...response.data],
    });
    console.log(this.state.edloans);
  };

  getBusLoans = async () => {
    console.log("function called");
    const response = await axios.get("/business/loans");
    console.log(response.data);
    this.setState({
      busloans: [...this.state.busloans, ...response.data],
    });
    console.log(this.state.busloans);
  };

  renderEducationList = () => {
    return this.state.edloans.map((elem) => {
      console.log(elem);
      return (
        <div
          className="item"
          style={{ backgroundColor: "yellow" }}
          key={elem.loan_id}
        >
          <h2>{elem.loan_name}</h2>
          <br />
          This loan is provided for student admiited in the {elem.course} and
          having percentage gretaer than {elem.percentage}
          <br />
          the interest rate is {elem.i_rate}
          <br />
          the penlaity rate id {elem.p_rate}
          <br />
          <hr />
        </div>
      );
    });
  };

  renderBusinessList = () => {
    return this.state.busloans.map((elem) => {
      //console.log(elem);

      return (
        <div
          className="item"
          style={{ backgroundColor: "cyan" }}
          key={elem.loan_id}
        >
          <h2>{elem.loan_name}</h2>
          <br />
          This loan is pro vided for business type of {elem.type}
          <br />
          the interest rate is {elem.i_rate}
          <br />
          the penlaity rate id {elem.p_rate}
          <br />
          <hr />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>LOAN SCHEMES</h2>
        <br />

        <h2>Education Loans</h2>
        <button>
          <h3>APPLY</h3>
        </button>
        <br />
        <br />
        <div>{this.renderEducationList()}</div>
        <h2>Business Loans</h2>
        <button>
          <h3>APPLY</h3>
        </button>

        <br />
        <br />
        <br />
        <div>{this.renderBusinessList()}</div>
      </div>
    );
  }
}
export default LoansList;
