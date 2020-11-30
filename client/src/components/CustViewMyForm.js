import React from "react";
import axios from "axios";

class CustViewMyForm extends React.Component{
  constructor(props){
    super(props)
    this.state = { formid:0,form:[],lid:"true",details:{}}
  }


  getform = async ()=>{
    console.log(this.state.formid);
    console.log("function called");
    const response = await axios.post("/viewform",{
         formid:this.state.formid,
    });
    console.log(response.data);
    console.log(response.data[0].loan_id);


    this.setState({
      lid:response.data[0].loan_id,
      form: [...this.state.form,...response.data],
      details:response.data[0]


    });
    console.log(this.state.form);
  //  console.log(this.state.lid);


  }
  renderbusinessform = ()=>{
    console.log("in render business");
    console.log(this.state.details.form_id);
    return(
    <div><h3>Application ID={this.state.details.form_id}</h3>
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
    </div>);
  }
  rendereducationform = ()=>{
    return(
    <div><h3>Application ID={this.state.details.form_id}</h3>
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
    <h3>Percentage={this.state.details.percentage}</h3>
    <br />
    <h3>College={this.state.details.college}</h3>
    <br />
    </div>
  );
  }
  rendermortgageform = ()=>{
    return(
    <div><h3>Application ID={this.state.details.form_id}</h3>
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
  }

  render(){
    console.log(this.state.lid);
    if(this.state.lid.charAt(0)==="t"){
    return(
      <div>
      <label>Enter Formid</label>
      <input onChange={(e)=>this.setState({ formid: e.target.value })} />
      <button onClick={this.getform}><h2>SUBMIT</h2></button>
      </div>
    )
  }
      else if(this.state.lid.charAt(0)==="b"){
         return(
         <div>
         <h2>YOUR APPLICATION</h2>
         {this.renderbusinessform()}</div>
       )
     }else if(this.state.lid.charAt(0)==="e"){
         return(
         <div>
         <h2>YOUR APPLICATION</h2>
         {this.rendereducationform()}</div>
       )
       }else{
         return(
         <div>
         <h2>YOUR APPLICATION</h2>
         {this.rendermortgageform()}</div>
       )
       }



  }
}
export default CustViewMyForm;
