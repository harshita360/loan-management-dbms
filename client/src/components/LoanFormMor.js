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
  };
 submitmorform = ()=>{
   console.log(this.state);
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

 };


  render(){
    return(
    <div>
      <h3>Employee sign in </h3>

      <input
        placeholder="enter customer Id"
        onChange={(e) => this.setState({ custid: e.target.value })}
      />
      <br />
      <input
        placeholder="enter location"
        onChange={(e) => this.setState({ location: e.target.value })}
      />
      <br />

      <input
        placeholder="enter employment status"
        onChange={(e) => this.setState({ empstatus: e.target.value })}
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
      <button onClick={this.submitmorform}>SUBMIT</button>
    </div>
    );
  }
}
export default LoanFormMor;
