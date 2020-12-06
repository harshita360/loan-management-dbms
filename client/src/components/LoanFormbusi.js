import React from "react"
import axios from "axios"



class LoanFormbusi extends React.Component{
  state = {
    custid: "",
    type: "",
    investment: 0,
    amt: 0,
    gname: "",
    grelation: "",
    loanid: "",
  };
 submitbusiform = ()=>{
   console.log(this.state);
   axios.post("busiloanform",{
     custid:this.state.custid,
     type:this.state.type,
     investment:this.state.investment,
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

 };


  render(){
    return(
    <div>
      <h3>Business loan form </h3>
      
      <input
        placeholder="enter customer Id"
        onChange={(e) => this.setState({ custid: e.target.value })}
      />
      <br />
      <input
        placeholder="enter type of business"
        onChange={(e) => this.setState({ type: e.target.value })}
      />
      <br />

      <input
        placeholder="enter investment amount"
        onChange={(e) => this.setState({ investment: e.target.value })}
      />
      <br />

      <input
        placeholder="enter amount"
        onChange={(e) => this.setState({ amt: e.target.value })}
      />
      <br />

      <input
        placeholder="enter gurantor name"
        onChange={(e) => this.setState({ gname: e.target.value })}
      />
      <br />

      <input
        placeholder="enter gurantor relation"
        onChange={(e) => this.setState({ grelation: e.target.value })}
      />
      <br />

      <input
        placeholder="enter loanid"
        onChange={(e) => this.setState({ loanid: e.target.value })}
      />
      <br />
      <br />
      <br />
      <button onClick={this.submitbusiform}>SUBMIT</button>
    </div>
    );
  }
}
export default LoanFormbusi;
