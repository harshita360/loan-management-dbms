import React from "react";
import stats from "../stats.mp4";
import axios from "axios";

class EmpStats extends React.Component {
  state = {
    category: "",
    college: "",
    stateName: "",
    display: "none",
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
  };

  renderCollegeDetails = async () => {
    console.log(this.state.college);
    const response = await axios.post("/emp/stat/college", {
      collegeName: this.state.college,
    });
    console.log(response.data);
  };

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
    } else if (this.state.display === "state") {
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
    } else if (this.state.display === "college") {
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
  }
}

export default EmpStats;
