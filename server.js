const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "harshita",
  database: "loanmg",
  multipleStatements: true,
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }

  console.log("connected to database");
});

app.get("/first", (req, res) => {
  mysqlConnection.query(
    "select * from customer where customerId = " + req.body.userid,
    function (err, result, fields) {
      if (err) {
        console.log("erorrrrrrr" + err);
      }
      resultfinal = JSON.parse(JSON.stringify(result));
      console.log(resultfinal);
      res.send(resultfinal);
    }
  );
});

app.post("/showData", async (req, res) => {
  const { id, password, account } = req.body; //degenerate
  console.log(password);
  // var sql =
  //   "SELECT * FROM `customer` WHERE `customerId`='" +
  //   id +
  //   "' and cpassword = '" +
  //   password +
  //   "'";
  var sql =
    "SELECT * FROM customer WHERE customerId = ? AND cpassword = ? AND CaccountNo = ?";
  mysqlConnection.query(
    sql,
    [id, password, account],

    function (err, result, fields) {
      console.log(result);
      if (err) {
        console.log("error has ocuured");
      }

      if (result.length) {
        res.json({
          auth: true,
        });
      } else {
        res.json({
          auth: false,
        });
      }
    }
  );
});

// app.get("/showData", (req, res) => {
//   mysqlConnection.query("select * from customer", function (
//     err,
//     result,
//     fields
//   ) {
//     if (err) {
//       console.log("errorororor");
//     } else {
//       res.send(result);
//     }
//   });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
