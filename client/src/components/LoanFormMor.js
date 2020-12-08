import React from "react"
import axios from "axios"



class LoanFormMor extends React.Component{
  state = {
    custid: "",
    location: "",
    empstatus: "",
    amt: 0,
    gname: "",
    grelation: "",
    loanid: "",
    error: { cid:"" , loc:"" , emps:"", amount:"", name:"", relation:"", lid:"" },
  };
  handleValidation() {
    const { custid, location, empstatus, amt, gname, grelation, loanid } = this.state;
    let isValid = true;
    let error = { cid: "", loc: "", emps:"", amount:"", name:"", relation:"", lid:"" };
    if (!custid) {
      error.cid = "We require your ID";
      isValid = false;
    }
    if (!location) {
      error.loc = "You need to enter location of the property";
      isValid = false;
    }
    if (!empstatus) {
      error.emps = "You need to enter employment status";
      isValid = false;
    }
    if (!amt) {
      error.amount = "You need to enter required amount";
      isValid = false;
    }
    if (!gname) {
      error.name = "You need to enter a gurantor name";
      isValid = false;
    }
    if (!grelation) {
      error.relation = "You need to enter a gurantor relation";
      isValid = false;
    }
    if (!loanid) {
      error.lid = "You need to enter a loan Id";
      isValid = false;
    }
    this.setState({ error: error });
    return isValid;
  }
 submitmorform = ()=>{
   console.log(this.state);
   if(this.handleValidation()){
   axios.post("morloanform",{
     custid:this.state.custid,
     location:this.state.location,
     empstatus:this.state.empstatus,
     amt:this.state.amt,
     gname:this.state.gname,
     grelation:this.state.grelation,
     loanid:this.state.loanid,
   })
   .then(function (res) {
     if(res.data.submit){

     console.log("inserted msg from front end");
   }

   })
   .catch(function (error) {
     console.log(error);
   });

 }else{
   console.log("there is an error in the input");
 };
}


  render(){
    const { error } = this.state;
    return(
    <div>
      <h3>Mortgage Loan Form.</h3>
      <br />
      <br />
      <br />
      <label>Enter Your Identification Number </label>
      <input
        placeholder="enter customer Id"
        onChange={(e) => this.setState({ custid: e.target.value })}
      />
      {error.cid !== "" && (
        <span style={{ color: "yellow" }}>{this.state.error.cid}</span>
      )}
      <br />
      <br />
      <label>Enter Location </label>
      <input
        placeholder="enter location"
        onChange={(e) => this.setState({ location: e.target.value })}
      />
      {error.loc !== "" && (
        <span style={{ color: "yellow" }}>{this.state.error.loc}</span>
      )}
      <br />
      <br />
      <label>Enter emplyoment status </label>
      <input
        placeholder="enter employment status"
        onChange={(e) => this.setState({ empstatus: e.target.value })}
      />
      {error.emps !== "" && (
        <span style={{ color: "yellow" }}>{this.state.error.emps}</span>
      )}
      <br />
      <br />
      <label>Enter amount required </label>
      <input
        placeholder="enter amount"
        onChange={(e) => this.setState({ amt: e.target.value })}
      />
      {error.amt !== "" && (
        <span style={{ color: "yellow" }}>{this.state.error.amt}</span>
      )}
      <br />
      <br />
      <label>Enter gurantor name </label>
      <input
        placeholder="enter gurantor name"
        onChange={(e) => this.setState({ gname: e.target.value })}
      />
      {error.name !== "" && (
        <span style={{ color: "yellow" }}>{this.state.error.name}</span>
      )}
      <br />
      <br />
      <label>Enter gurantor relation </label>
      <input
        placeholder="enter gurantor relation"
        onChange={(e) => this.setState({ grelation: e.target.value })}
      />
      {error.relation !== "" && (
        <span style={{ color: "yellow" }}>{this.state.error.relation}</span>
      )}
      <br />
      <br />
      <label>Enter loanId </label>
      <input
        placeholder="enter loanid"
        onChange={(e) => this.setState({ loanid: e.target.value })}
      />
      {error.lid !== "" && (
        <span style={{ color: "yellow" }}>{this.state.error.lid}</span>
      )}
      <br />
      <br />
      <br />
      <button onClick={this.submitmorform}>SUBMIT</button>
    </div>
    );
  }
}
export default LoanFormMor;
