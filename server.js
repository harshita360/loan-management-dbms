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

app.post("/employeesignin",async (req,res) =>{
  const { id, password } = req.body; //degenerate
  console.log(password);

  var sql =
    "SELECT * FROM emp WHERE emp_id = ? AND password = ?";
  mysqlConnection.query(
    sql,
    [id, password],

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


app.get("/edu/loans", (req, res) => {
  var sql =
    "SELECT e.loan_id,e.course,e.percentage,l.loan_name,l.i_rate,l.year,l.p_rate from education e,loans l where e.loan_id=l.loan_id";
  mysqlConnection.query(sql, function (err, result, fields) {
    if (err) {
      console.log("errorororor");
    } else {
      res.send(result);
    }
  });
});

app.get("/business/loans", (req, res) => {
  var sql =
    "SELECT l.loan_id,l.i_rate,l.p_rate,l.loan_name,l.year,b.type FROM loans l,business b where b.loan_id=l.loan_id";

  mysqlConnection.query(sql, function (err, result, fields) {
    if (err) {
      console.log("errorororor");
    } else {
      res.send(result);
    }
  });
});

app.post("/loanform/edu", (req, res) => {
  var sql =
    "INSERT INTO loanform (firstname, middlename, lastname, loan_name) VALUES ('harsh', 's', 'singh', 'Scholar MOOC loan')";
  mysqlConnection.query(sql, function (err, result) {
    if (err) {
      console.log("errorororor");
    } else {
      console.log("inserted succesfully");
      console.log("Last insert ID:", result.insertId);
      var id = result.insertId;
      console.log(id);

      var c =
        "INSERT INTO eduloanform (form_id,college,percentage) VALUES (" +
        id +
        ", 'Bangalore Institute of Tech','90%')";
      mysqlConnection.query(c, function (err, result) {
        if (err) {
          console.log("error in seconf insertion");
        } else {
          console.log("sucesss!!");
        }
      });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
