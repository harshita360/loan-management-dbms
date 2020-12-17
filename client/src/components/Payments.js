import React from "react";
import axios from "axios";
class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_id: 0,
      error: { formid: "" },
      amount: 0,
      details: [],
      do: "display"
    };
  }
  viewPayment = async () => {
    console.log(this.state.form_id);
    console.log("function called");
    if (this.handleValidation()) {
      const response = await axios.post("/pay/details", {
        formid: this.state.form_id,
      });
      console.log(response.data);
      //this.setState({ details: response.data });

     if (response.data.do === "invalid") {
        console.log("form id is invalid");
        this.setState({ do: response.data.do });
      } else if (response.data.do === "view") {
        console.log("Application is not yet accepted");
        this.setState({ do: response.data.do });
      } else {
        this.setState({
          details: response.data
        });
        console.log(this.state.status);
      }
    } else {
      console.log("there is error in input");
    }
  };

  handleValidation() {
    const { form_id } = this.state;
    let isValid = true;
    let error = { form_id: "" };
    if (!form_id) {
      error.form_id = "We require form ID";
      isValid = false;
    }

    this.setState({ error: error });
    return isValid;
  }

  renderPaymentDeatils = () => {
    console.log("called");
    return this.state.details.map((elem) => {
      console.log(elem);
      return (
        <div key={elem.form_id} className="item">
          <label> Form ID:</label>
          {elem.form_id}
          <br />
          <label>Amount for which loan has been issued:</label>
          {elem.total_amount}
          <br />
          <label>Interest amount</label>
          {elem.interest_amt}
          <br />
          <label> Total amount:</label>
          {elem.final_amount}
          <br />
          <label>Amount left to pay:</label>
        </div>
      );
    });
  };
  submitPayment = async () => {
    const response = await axios.post("/makepayment", {
      formid: this.state.form_id,
      amount: this.state.amount,
    });
    console.log(response.data.done);
    if (response.data.done) {
      console.log("payment done");
    } else {
      console.log("entered amount not in range");
    }
  };

  render() {
    console.log(this.state.details);
    const { error } = this.state;
    if(this.state.do === "display"){
    return (
      <div className="ui container">
        <h2 style={{ textAlign: "center" }}>PAYMENTS</h2>
        <label>
          <h5>Your Application ID : &nbsp;&nbsp;&nbsp;</h5>
        </label>
        <div className="ui form">
          <input
            className="ui large input"
            placeholder="Text here..."
            onChange={(e) => this.setState({ form_id: e.target.value })}
            type="id"
            style={{
              backgroundColor: "#323232",
              color: "white",
              border: "1px solid white",
            }}
          />
          {error.formid !== "" && (
            <span style={{ color: "yellow" }}>{this.state.error.form_id}</span>
          )}
          <button
            className="ui green button"
            onClick={this.viewPayment}
            style={{ margin: "5px" }}
          >
            GET PAYMENT DETAILS
          </button>
        </div>
        <br />
        <br />
        <div className="ui relaxed divided list">
          <div>{this.renderPaymentDeatils()}</div>
          <br />
          <label>
            <h5>Enter the amount to pay:&nbsp;&nbsp;</h5>
          </label>
          <br />
          <i className="huge rupee sign icon" style={{ color: "white" }}></i>

          <input
            className="ui large input"
            placeholder="Amount"
            onChange={(e) => this.setState({ amount: e.target.value })}
            type="id"
            style={{
              backgroundColor: "#323232",
              color: "white",
              border: "1px solid white",
            }}
          />
          <br />
          <button className="ui green button"
          onClick={this.submitPayment} style={{ margin: "20px" }}>
            DONE
          </button>
        </div>
      </div>
    );
  }if (this.state.do === "invalid") {
    return <div className="ui negative message">
            <i className="close icon"></i>
            <center>
            <h2>
            OOPS🤦‍
            <br />
            <br />
            Form ID is invalid
            </h2></center></div>;
  } else if (this.state.do === "view") {
    return <div className="ui yellow message">
           <i className="close icon"></i>
          <div className="header"><h3>
           Your Application is not yet accepted!</h3>
           </div><p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your application's status will be updated soon</p>
           </div>
  }
  }
}

export default Payments;
