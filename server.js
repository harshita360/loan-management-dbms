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

app.post("/customersignin", async (req, res) => {
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

app.post("/employeesignin", async (req, res) => {
  const { id, password } = req.body; //degenerate
  console.log(password);

  var sql = "SELECT * FROM emp WHERE emp_id = ? AND password = ?";
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

app.post("/busiloanform",(req,res)=>{
  const {gname, grelation, type, investment, custid, loanid, amt} = req.body;

  var sql=
     "INSERT INTO GURANTOR (g_name,g_relation) values (?,?)";
  mysqlConnection.query(
    sql,
    [gname,grelation],function(err,result,fields){
      if(err){
        console.log(err);
      }else{
        console.log("successfully inserted");
        var gid = result.insertId;
        var sql1 =
          "INSERT INTO loanform (cust_id,loan_id,req_amt,g_id) VALUES (?,?,?,?)";
        mysqlConnection.query(sql1, [custid, loanid, amt, gid], function (
          err,
          result1
        ) {
          if (err) {
            console.log(err);
          } else {
            console.log("inserted succesfully");
            console.log("Last insert ID:", result1.insertId);
            var id = result1.insertId;
            console.log(id);

            var sql2 =
              "INSERT INTO businessloanform (form_id,type_of_business,investment_amt) VALUES (?,?,?)";
            mysqlConnection.query(sql2, [id, type, investment], function (err, result2) {
              if (err) {
                console.log("error in second insertion");
                res.json({
                  submit: false,
                });
              } else {
                console.log("sucesss!!");
                res.json({
                  submit: true,
                });
              }
            });
          }
        });
      }
    });
});
app.post("/morloanform",(req,res)=>{
  const {gname, grelation, location, empstatus, custid, loanid, amt} = req.body;

  var sql=
     "INSERT INTO GURANTOR (g_name,g_relation) values (?,?)";
  mysqlConnection.query(
    sql,
    [gname,grelation],function(err,result,fields){
      if(err){
        console.log(err);
      }else{
        console.log("successfully inserted");
        var gid = result.insertId;
        var sql1 =
          "INSERT INTO loanform (cust_id,loan_id,req_amt,g_id) VALUES (?,?,?,?)";
        mysqlConnection.query(sql1, [custid, loanid, amt, gid], function (
          err,
          result1
        ) {
          if (err) {
            console.log(err);
          } else {
            console.log("inserted succesfully");
            console.log("Last insert ID:", result1.insertId);
            var id = result1.insertId;
            console.log(id);

            var sql2 =
              "INSERT INTO mortgageloanform (form_id,location,emp_status) VALUES (?,?,?)";
            mysqlConnection.query(sql2, [id, location, empstatus], function (err, result2) {
              if (err) {
                console.log("error in second insertion");
                res.json({
                  submit: false,
                });
              } else {
                console.log("sucesss!!");
                res.json({
                  submit: true,
                });
              }
            });
          }
        });
      }
    });
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
  const { custid, clg, course, per, amt, gname, grelation, loanid } = req.body;
  // var sql =
  //   "INSERT INTO loanform (cust_id,loan_id,req_amt,g_id) VALUES (80134, 'e1111', 100000,1)";
  var sql2 = "INSERT INTO gurantor(g_name,g_relation) VALUES(?,?)";
  mysqlConnection.query(sql2, [gname, grelation], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      var gp = result.insertId;
      var sql =
        "INSERT INTO loanform (cust_id,loan_id,req_amt,g_id) VALUES (?,?,?,?)";
      mysqlConnection.query(sql, [custid, loanid, amt, gp], function (
        err,
        result2
      ) {
        if (err) {
          console.log(err);
        } else {
          console.log("inserted succesfully");
          console.log("Last insert ID:", result2.insertId);
          var id = result2.insertId;
          console.log(id);

          var c =
            "INSERT INTO eduloanform (form_id,college,percentage) VALUES (?,?,?)";
          mysqlConnection.query(c, [id, clg, per], function (err, result3) {
            if (err) {
              console.log("error in seconf insertion");
              res.json({
                submit: false,
              });
            } else {
              console.log("sucesss!!");
              res.json({
                submit: true,
              });
            }
          });
        }
      });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
