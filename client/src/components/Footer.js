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

      <div className="search-container">
        <input
          id="footerinput"
          type="text"
          placeholder="Search.."
          name="search"
        />
        <a href="/#" className="button_footer">
          Continue
        </a>
      </div>
      <hr />
      <br />

      <ul id="menu">
        <li>SELL ON CHAMB</li>
        <li>BUY ON CHAMB</li>
        <li>COMPANY</li>
        <li>INDUSTRIES</li>
      </ul>
    </div>
  );
};

export default Footer;
