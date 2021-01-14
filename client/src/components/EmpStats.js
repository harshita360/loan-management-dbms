import React from "react";
import stats from "../stats.mp4";
import axios from "axios";

class EmpStats extends React.Component {
  state = {
    category: "",
    college: "",
    stateName: "",
    display: "none",
    res:[],
    con:0,
    type:"",
  };

  changeDisplay = (category) => {
    console.log(category);
    if (category === "state") {
      this.setState({ display: "state" });
    } else if (category === "college") {
      this.setState({ display: "college" });
    }
  };

  renderStateDetails = async () => {
    console.log(this.state.stateName);
    const response = await axios.post("/emp/stat/state", {
      stateName: this.state.stateName,
    });
    console.log(response.data);
    this.setState({
      res:response.data.result
    });
    console.log(this.state.res[0].customerId);
    this.setState({
      con:response.data.count,
      display:"sta"
    });
    console.log(this.state.con);

  };

  renderCollegeDetails = async () => {
    console.log(this.state.college);
    const response = await axios.post("/emp/stat/college", {
      collegeName: this.state.college,
    });
    console.log(response.data);
    this.setState({
      res:response.data.result
    });
    console.log(this.state.res[0].customerId);
    this.setState({
      con:response.data.count,
      display:"coll"
    });
    console.log(this.state.con);
    console.log(this.state.type);
}
 displayCollegeDetails = () =>{
   return this.state.res.map((elem) => {
     console.log(elem);
     return (

       <table class="ui selectable inverted table">
 <thead>
   <tr><th>CUSTOMER ID</th>
   <th>ACCOUNT NO</th>
   <th>FIRST NAME</th>
   <th>MIDDLE NAME</th>
   <th>LAST NAME</th>
   <th>PHONE NUMBER</th>
   <th>STATE</th>
   <th class="right aligned">COLLEGE</th>
 </tr></thead><tbody>
   <tr>
     <td>{elem.customerId}</td>
     <td>{elem.CaccountNo}</td>
     <td>{elem.fname}</td>
     <td>{elem.mname}</td>
     <td>{elem.lname}</td>
     <td>{elem.phone_num}</td>
     <td>{elem.state}</td>
     <td class="right aligned">{elem.college}</td>
   </tr>

 </tbody>
</table>

);
});
 }
 displayStateDetails = () =>{
   return this.state.res.map((elem) => {
     console.log(elem);
     return (

       <table class="ui selectable inverted table">
 <thead>
   <tr><th>CUSTOMER ID</th>
   <th>ACCOUNT NO</th>
   <th>FIRST NAME</th>
   <th>MIDDLE NAME</th>
   <th>LAST NAME</th>
   <th>PHONE NUMBER</th>
   <th class="right aligned">STATE</th>
 </tr></thead><tbody>
   <tr>
     <td>{elem.customerId}</td>
     <td>{elem.CaccountNo}</td>
     <td>{elem.fname}</td>
     <td>{elem.mname}</td>
     <td>{elem.lname}</td>
     <td>{elem.phone_num}</td>
     <td class="right aligned">{elem.state}</td>
   </tr>

 </tbody>
</table>

);
});
 }


  render() {
    if (this.state.display === "none") {
      return (
        <div className="ui container">
          <h1 style={{ textAlign: "center", color: "#39ff14" }}>
            Service Statistics
          </h1>
          <br />
          <br />
          <div className="ui grid">
            <div className="eight wide column">
              <h4>Choose a catgeory</h4>
              <br />
              <input
                placeholder="enter category"
                onChange={(e) => this.setState({ category: e.target.value })}
                className="sign id"
                type="id"
                style={{ color: "white" }}
              />
              <br />
              <button
                className="ui green button"
                onClick={() => this.changeDisplay(this.state.category)}
              >
                Submit
              </button>
            </div>
            <div className="eight wide column">
              <div style={{ margin: "10px" }}>
                <video width="120%" height="120%" autoPlay={true} loop>
                  <source src={stats} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }if (this.state.display === "state") {
      return (
        <div className="ui container">
          <h4 style={{ color: "#39ff14" }}>Enter the state name</h4>
          <br />
          <input
            placeholder="enter text here"
            className="sign id"
            type="id"
            style={{ color: "white" }}
            onChange={(e) => this.setState({ stateName: e.target.value })}
          />
          <br />
          <button
            className="ui large green button"
            onClick={this.renderStateDetails}
          >
            Submit
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }if (this.state.display === "college") {
      return (
        <div className="ui container">
          <h4 style={{ color: "#39ff14" }}>Enter the college name</h4>
          <br />
          <input
            placeholder="enter text here"
            className="sign id"
            type="id"
            style={{ color: "white" }}
            onChange={(e) => this.setState({ college: e.target.value })}
          />
          <br />
          <button
            className="ui large green button"
            onClick={this.renderCollegeDetails}
          >
            Submit
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }
   if(this.state.display==="coll"){
     return(
       <div>
       <p>The count of customers:{this.state.con}</p>
       {this.displayCollegeDetails()}
       </div>
     );
   }
   if(this.state.display==="sta"){
     return(
       <div>
       <p>The count of customers:{this.state.con}</p>
       {this.displayStateDetails()}
       </div>
     );
   }
  }
}

export default EmpStats;
