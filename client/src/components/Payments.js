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
      this.setState({ details: response.data });
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
  // submitPayment = async () => {
  //   const response = await axios.post("/makepayment", {
  //     formid: this.state.form_id,
  //     amount: this.state.amount,
  //   });
  //   console.log(response.data.ok);
  //   if (res.data.ok) {
  //     console.log("payment done");
  //   } else {
  //     console.log("eroor");
  //   }
  // };

  render() {
    console.log(this.state.details);
    const { error } = this.state;
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
          <i class="huge rupee sign icon" style={{ color: "white" }}></i>

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
          <button className="ui green button" style={{ margin: "20px" }}>
            DONE
          </button>
        </div>
      </div>
    );
  }
}

export default Payments;
