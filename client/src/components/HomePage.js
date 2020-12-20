import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import background from "../image.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div
          className="image"
          style={{ backgroundImage: `url(${background})` }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <br />
          <label style={{ color: "white", fontSize: "50px", margin: "10px" }}>
            <strong>
              {" "}
              HERE TODAY <br />
              FOR YOUR TOMORROW
            </strong>
          </label>
          <br />

          <Link
            to="/custsignin"
            className="big ui button"
            style={{
              margin: "15px",
              backgroundColor: "#990000",
              color: "white",
            }}
          >
            SIGN IN
          </Link>

          <br />
          <br />
          <br />
          <br />
        </div>
        
        <br />

        <section id="features">
          <div className="row">
            <div className="feature-box col-lg-4">
              <center>
                <i
                  className="fas fa-user-graduate fa-5x"
                  style={{ color: "#00ff7f" }}
                ></i>
                <h5>EDUCATION</h5>
                <p>lorem gfyhfieufioefrhkjgnvrmgvnkrdvm</p>
                <p>lorem gfyhfieufioefrhkjgnvrmgvnkrdvm</p>
                <p>lorem gfyhfieufioefrhkjgnvrmgvnkrdvm</p>
              </center>
            </div>
            <div className="feature-box col-lg-4">
              <i
                className="fas fa-business-time fa-5x"
                style={{ color: "#00ff7f" }}
              ></i>
              <h5>BUSINESS</h5>
              <p>
                IMPORTANT: State Bank of India never ask for your user id /
                password / pin no. through phone call / SMSes / e-mails. Any
                such phone call / SMSes / e-mails asking you to reveal
                credential or One Time Password through SMS could be attempt to
              </p>
            </div>
            <div className="feature-box col-lg-4">
              <i
                className="fas fa-building fa-5x"
                style={{ color: "#00ff7f" }}
              ></i>
              <h5>MORTGAGE</h5>
              <p>lorem gfyhfieufioefrhkjgnvrmgvnkrdvm</p>
              <p>lorem gfyhfieufioefrhkjgnvrmgvnkrdvm</p>
              <em>lorem gfyhfieufioefrhkjgnvrmgvnkrdvm</em>
            </div>
          </div>
        </section>
        <div className="service">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="title">
                  <h1>
                    <strong className="black">Service Process</strong>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img
                      src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjF8fG1vbmV5fGVufDB8fDB8&auto=format&fit=crop&w=600&q=60"
                      alt=" "
                    />
                  </i>
                  <h3>Fast service</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img
                      className="second"
                      alt=" "
                      src="https://images.unsplash.com/photo-1556741533-4020f1bf081c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGF5bWVudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                  </i>
                  <h3>Payments</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <i>
                    <img
                      alt=" "
                      src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXdvcmt8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                  </i>
                  <h3>Expert team</h3>
                  <p>
                    Exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
