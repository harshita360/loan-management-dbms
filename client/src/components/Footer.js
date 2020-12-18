import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundColor: "black" }}>
      <h2
        style={{ textAlign: "left", paddingTop: "40px", paddingLeft: "20px" }}
      >
        Start a free <br />
        account today
      </h2>

      <hr />
      <br />

      <ul id="menu">
        <li>SELL ON CHAMB</li>
        <li>BUY ON CHAMB</li>
        <li>COMPANY</li>
        <li>INDUSTRIES</li>
      </ul>
      <br />
      <br />
      <center>
        <button class="ui circular facebook icon button">
          <i class="facebook icon" style={{ color: "white" }}></i>
        </button>
        &nbsp;&nbsp;
        <button class="ui circular twitter icon button">
          <i class="twitter icon" style={{ color: "white" }}></i>
        </button>
        &nbsp;&nbsp;
        <button class="ui circular linkedin icon button">
          <i class="linkedin icon" style={{ color: "white" }}></i>
        </button>
        &nbsp;&nbsp;
        <button class="ui circular google plus icon button">
          <i class="google plus icon" style={{ color: "white" }}></i>
        </button>
      </center>
    </div>
  );
};

export default Footer;
