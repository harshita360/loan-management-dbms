import React from "react";
import axios from "axios";
import history from "../history";
class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_id: 0,
      error: { formid: "" },
      amount: 0,
      details: [],
      do: "display",
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
          details: response.data,
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
  changeState = () => {
    this.setState({ do: "paynow" });
  };
  submitPayment = async () => {
    const response = await axios.post("/makepayment", {
      formid: this.state.form_id,
      amount: this.state.amount,
    });
    console.log(response.data.done);
    if (response.data.done) {
      console.log("payment done");
      history.push("/done");
    } else {
      console.log("entered amount not in range");
    }
  };
  // <div className="field">
  //   <label>Card Type</label>
  //   <div className="ui selection dropdown">
  //     <input type="hidden" name="card[type]" />
  //     <div className="default text">Type</div>
  //     <i className="dropdown icon"></i>
  //     <div className="menu">
  //       <div className="item" data-value="visa">
  //         <i className="visa icon"></i>
  //         Visa
  //       </div>
  //       <div className="item" data-value="amex">
  //         <i className="amex icon"></i>
  //         American Express
  //       </div>
  //       <div className="item" data-value="discover">
  //         <i className="discover icon"></i>
  //         Discover
  //       </div>
  //     </div>
  //   </div>

  render() {
    console.log(this.state.details);
    const { error } = this.state;
    if (this.state.do === "display") {
      return (
        <div className="ui container">
          <h1 style={{ textAlign: "center" }}>
            PAYMENTS{" "}
            <i
              class="large money bill alternate outline icon"
              style={{ color: "#00ff7f" }}
            ></i>
          </h1>
          <br />
          <br />

          <label>
            <h2>Your Application ID </h2>
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
                margin: "10px",
              }}
            />
            {error.formid !== "" && (
              <span style={{ color: "yellow" }}>
                {this.state.error.form_id}
              </span>
            )}
            <button
              className="ui green button"
              onClick={this.viewPayment}
              style={{ margin: "5px" }}
            >
              CHECK PAYMENT DETAILS
            </button>
          </div>
          <br />
          <br />
          <div className="ui relaxed divided list">
            <div>{this.renderPaymentDeatils()}</div>
          </div>
          <button
            className="ui green button"
            onClick={this.changeState}
            style={{ margin: "5px" }}
          >
            NEXT
            <i
              className="large right arrow icon"
              style={{ color: "white" }}
            ></i>
          </button>
        </div>
      );
    }
    if (this.state.do === "paynow") {
      return (
        <div className="ui container">
          <div className="ui grid">
            <div className="eight wide column">
              <br />
              <label>
                <h5>Enter the amount to pay:&nbsp;&nbsp;</h5>
              </label>
              <br />
              <i
                className="huge rupee sign icon"
                style={{ color: "white" }}
              ></i>

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
            </div>
            <div
              className="ui eight wide column"
              style={{
                marginTop: "15px",
                borderRadius: "8px",
                color: "white",
              }}
            >
              <div className="ui form" style={{ color: "white" }}>
                <label style={{ fontSize: "20px", color: "white" }}>
                  Payment Information :&nbsp;&nbsp;
                </label>
                <i
                  className="large credit card outline icon"
                  style={{ color: "#39ff14", backgroundColor: "#323232" }}
                ></i>
                <hr />

                <div class="field">
                  <label style={{ color: "white", fontSize: "15px" }}>
                    Name
                  </label>
                  <div class="two fields">
                    <div class="field">
                      <input
                        type="text"
                        name="shipping[first-name]"
                        placeholder="First Name"
                        style={{
                          backgroundColor: "#323232",
                          color: "white",
                          border: "1px solid white",
                        }}
                      />
                    </div>
                    <div class="field">
                      <input
                        type="text"
                        name="shipping[last-name]"
                        placeholder="Last Name"
                        style={{
                          backgroundColor: "#323232",
                          color: "white",
                          border: "1px solid white",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="field">
                  <select
                    style={{
                      backgroundColor: "#323232",
                      color: "white",
                      border: "1px solid white",
                    }}
                  >
                    <option value="">Card Type</option>
                    <option value="1">Master</option>
                    <option value="0">Rupay</option>
                    <option value="2">Visa</option>
                  </select>
                </div>
                <div class="fields">
                  <div class="seven wide field">
                    <label style={{ color: "white", fontSize: "15px" }}>
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="card[number]"
                      placeholder="Card #"
                      style={{
                        backgroundColor: "#323232",
                        color: "white",
                        border: "1px solid white",
                      }}
                    />
                  </div>
                  <div className="three wide field">
                    <label style={{ color: "white", fontSize: "15px" }}>
                      CVC
                    </label>
                    <input
                      type="text"
                      name="card[cvc]"
                      placeholder="CVC"
                      style={{
                        backgroundColor: "#323232",
                        color: "white",
                        border: "1px solid white",
                      }}
                    />
                  </div>
                  <div className="six wide field">
                    <label style={{ color: "white", fontSize: "15px" }}>
                      Expiration
                    </label>
                    <div className="two fields">
                      <div
                        className="field"
                        style={{
                          backgroundColor: "#323232",
                          color: "white",
                          border: "1px solid white",
                        }}
                      >
                        <select
                          className="ui fluid search dropdown"
                          name="card[expire-month]"
                          style={{
                            backgroundColor: "#323232",
                            color: "white",
                          }}
                        >
                          <option value="">Month</option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                      <div className="field">
                        <input
                          type="text"
                          name="card[expire-year]"
                          placeholder="Year"
                          style={{
                            backgroundColor: "#323232",
                            color: "white",
                            border: "1px solid white",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    className="ui button"
                    onClick={this.submitPayment}
                    style={{ marginTop: "5px", backgroundColor: "#14ff2a" }}
                  >
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.state.do === "invalid") {
      return (
        <div className="ui negative message">
          <i className="close icon"></i>
          <center>
            <h2>
              OOPS!🤦‍
              <br />
              <br />
              Form ID is invalid
            </h2>
          </center>
        </div>
      );
    } else if (this.state.do === "view") {
      return (
        <div className="ui yellow message">
          <i className="close icon"></i>
          <div className="header">
            <h3>Your Application is not yet accepted!</h3>
          </div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Your application's status will be updated soon
          </p>
        </div>
      );
    }
  }
}

export default Payments;
