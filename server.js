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

app.post("/busiloanform", (req, res) => {
  const { gname, grelation, type, investment, custid, loanid, amt } = req.body;

  var sql = "INSERT INTO GURANTOR (g_name,g_relation) values (?,?)";
  mysqlConnection.query(sql, [gname, grelation], function (
    err,
    result,
    fields
  ) {
    if (err) {
      console.log(err);
    } else {
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
          mysqlConnection.query(sql2, [id, type, investment], function (
            err,
            result2
          ) {
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
app.post("/morloanform", (req, res) => {
  const {
    gname,
    grelation,
    location,
    empstatus,
    custid,
    loanid,
    amt,
  } = req.body;

  var sql = "INSERT INTO GURANTOR (g_name,g_relation) values (?,?)";
  mysqlConnection.query(sql, [gname, grelation], function (
    err,
    result,
    fields
  ) {
    if (err) {
      console.log(err);
    } else {
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
          mysqlConnection.query(sql2, [id, location, empstatus], function (
            err,
            result2
          ) {
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

app.get("/mortgage/loans", (req, res) => {
  var sql =
    "SELECT l.loan_id,l.i_rate,l.p_rate,l.loan_name,l.year,m.min_salary FROM loans l,mortgage m where m.loan_id=l.loan_id";
  mysqlConnection.query(sql, function (err, result, fields) {
    if (err) {
      console.log("errorororor");
    } else {
      res.send(result);
    }
  });
});

app.post("/viewform", (req, res) => {
  const id = req.body.formid;
  console.log(id);
  var q = "SELECT ls.loan_id FROM loanform ls WHERE ls.form_id= ?";
  mysqlConnection.query(q, [id], function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
      console.log("proceeding");
      console.log(result[0].loan_id);
      var qe = result[0].loan_id;
      if (qe.charAt(0) === "e") {
        var q1 =
          "SELECT g.g_name,g.g_relation,e.college,e.percentage,ls.form_id,ls.loan_id,ls.req_amt,lo.loan_name FROM gurantor g,eduloanform e,loanform ls,loans lo where ls.form_id= ? and ls.loan_id= ? and g.g_id=ls.g_id and ls.loan_id=lo.loan_id";
        mysqlConnection.query(q1, [id, qe], function (err, result1, fields) {
          if (err) {
            console.log(err);
          } else {
            console.log("proceeding1");
            res.send(result1);
            console.log(result1);
          }
        });
      } else if (qe.charAt(0) == "b") {
        var q2 =
          "SELECT g.g_name,g.g_relation,b.type_of_business,b.investment_amt,ls.form_id,ls.loan_id,ls.req_amt,lo.loan_name FROM gurantor g,businessloanform b,loanform ls,loans lo where ls.form_id= ? and ls.loan_id= ? and g.g_id=ls.g_id and ls.loan_id=lo.loan_id;";
        mysqlConnection.query(q2, [id, qe], function (err, result2, fileds) {
          if (err) {
            console.log(err);
          } else {
            console.log("proceeding2");
            res.send(result2);
          }
        });
      } else {
        var q3 =
          "SELECT g.g_name,g.g_relation,m.location,m.emp_status,ls.form_id,ls.loan_id,ls.req_amt,lo.loan_name FROM gurantor g,mortgageloanform m,loanform ls,loans lo where ls.form_id= ? and ls.loan_id= ? and g.g_id=ls.g_id and ls.loan_id=lo.loan_id";
        mysqlConnection.query(q3, [id, qe], function (err, result3, fields) {
          if (err) {
            console.log(err);
          } else {
            console.log("proceeding3");
            res.send(result3);
          }
        });
      }
    }
  });
});

app.post("/viewstatus", (req, res) => {
  const fid = req.body.formid;
  console.log(fid);
  var s = "SELECT form_id FROM loanform where form_id=?";
  mysqlConnection.query(s, fid, function (err, result) {
    if (err) {
      console.log(err);
      res.json({
        exists: "error",
      });
    }
    if (!result.length) {
      console.log("Invalid formid");
      res.json({
        exist: "invalid",
      });
    } else {
      var s1 = "SELECT form_id FROM loanstatus where form_id=?";
      mysqlConnection.query(s1, fid, function (err, result1) {
        if (err) {
          console.log(err);
          res.json({
            exist: "error",
          });
        }
        if (!result1.length) {
          console.log("Form is not seen");
          res.json({
            exist: "not seen",
          });
        } else {
          var s2 =
            "SELECT form_id,status,date FROM loanstatus where form_id=? order by date";
          mysqlConnection.query(s2, fid, function (err, result2) {
            if (err) {
              console.log(err);
              console.log("In s2");
              res.json({
                exist: "error",
              });
            } else {
              console.log(result2);

              res.send(result2);
            }
          });
        }
      });
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

app.post("/emp/updatestatus", (req, res) => {
  const { formid, empid, status } = req.body;
  var sql =
    "INSERT INTO loanstatus (form_id, emp_id, date, status) VALUES (?, ?, curdate(), ?)";
  //var sql = `CALL InsertionCheck(?,?,?)`;
  mysqlConnection.query(sql, [formid, empid, status], function (
    err,
    result,
    fields
  ) {
    if (err) {
      console.log(err);
      res.json({ ok: false });
    } else {
      console.log("inserted successfully/updation prevented");
      res.json({ ok: true });
    }
  });
});

app.get("/emp/geteducationforms", (req, res) => {
  var sql =
    "SELECT l.form_id,l.cust_id,l.loan_id,l.g_id,lo.loan_name,c.fname,c.mname,c.lname,g.g_name,elf.college,elf.percentage from loanform l,customer c,gurantor g,loans lo,eduloanform elf where l.cust_id=c.customerId and l.g_id=g.g_id and l.loan_id=lo.loan_id and l.form_id=elf.form_id and l.loan_id like 'e%' and l.form_id not in (SELECT form_id from loanmg.loanstatus where status='ACCEPTED' or status='REJECTED');";

  mysqlConnection.query(sql, function (err, result, fields) {
    if (err) {
      console.log("errorororor");
    } else {
      res.send(result);
      //console.log(result);
    }
  });
});

app.get("/emp/getbusinessforms", (req, res) => {
  var sql =
    "SELECT l.form_id,l.cust_id,l.loan_id,l.g_id,lo.loan_name,c.fname,c.mname,c.lname,g.g_name,blf.type_of_business,blf.investment_amt from loanmg.loanform l,loanmg.customer c,loanmg.gurantor g,loanmg.loans lo,loanmg.businessloanform blf where l.cust_id=c.customerId and l.g_id=g.g_id and l.loan_id=lo.loan_id and l.form_id=blf.form_id and l.loan_id like 'b%'and l.form_id not in (SELECT form_id from loanmg.loanstatus where status='ACCEPTED' or status='REJECTED');";

  mysqlConnection.query(sql, function (err, result, fields) {
    if (err) {
      console.log("errorororor");
    } else {
      res.send(result);
      //console.log(result);
    }
  });
});

app.get("/emp/getmortgageforms", (req, res) => {
  var sql =
    "SELECT l.form_id,l.cust_id,l.loan_id,l.g_id,lo.loan_name,c.fname,c.mname,c.lname,g.g_name,mlf.location,mlf.emp_status from loanmg.loanform l,loanmg.customer c,loanmg.gurantor g,loanmg.loans lo,loanmg.mortgageloanform mlf where l.cust_id=c.customerId and l.g_id=g.g_id and l.loan_id=lo.loan_id and l.form_id=mlf.form_id and l.loan_id like 'm%'and l.form_id not in (SELECT form_id from loanmg.loanstatus where status='ACCEPTED' or status='REJECTED');";

  mysqlConnection.query(sql, function (err, result, fields) {
    if (err) {
      console.log("errorororor");
    } else {
      res.send(result);
      //console.log(result);
    }
  });
});

app.post("/pay/details", (req, res) => {
  const { formid } = req.body;
  console.log(req.body.formid);
  var q = "select form_id from loanform where form_id=?";
  mysqlConnection.query(q, [formid], function (err, result, fields){
    if(err){
      console.log(err);
    }else if(result.length){
      var q1 = "select form_id from payments where form_id=?"
      mysqlConnection.query(q1, [formid], function (err, result1, fields){
        if(err){
          console.log(err);
        }else if(result1.length){
          var sql = "select * from payments where form_id=?";

          mysqlConnection.query(sql, [formid], function (err, result2, fields) {
            if (err) {
              console.log(err);
            } else {
              res.send(result2);
              console.log(result2);
            }
        });
    }else{
      console.log("application not yet acceted");
      res.json({ do: "view" });
    }
  });


}else{
  console.log("Invalid id");
  res.json({ do: "invalid" });
}
});
});

app.post("/makepayment",(req,res) => {
  const { formid ,amount } = req.body;
  console.log(req.body.formid);
  console.log(req.body.amount);
  var q = "select final_amount,amount_paid from payments where form_id=?";
  mysqlConnection.query(q, [formid],function(err, result1,fields){
    if(err){
      console.log(err);
    } if(result1[0].final_amount-result1[0].amount_paid>=amount){
      console.log(result1[0].final_amount);
      console.log(result1[0].amount_paid);
      var q1 = "update loanmg.payments set amount_paid=amount_paid+? where form_id=?;"

      mysqlConnection.query(q1, [amount,formid], function(err, result2, fields){
        if(err){
          console.log(err);
        } else{
          res.json({ done: true });
        }
      });

    } else{
      console.log("entered amount is not in range");
        res.json({ ok: false });
    }
  })

})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
