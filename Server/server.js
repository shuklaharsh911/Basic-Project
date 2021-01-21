var express = require('express');
var app = express();
var cors = require('cors');
var sql = require('mysql');
var bodyParser = require('body-parser')

var config = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'iamgreat',
  database: 'Project'
});
  app.use(cors());
  var jsonParser = bodyParser.json()

   app.get("/", function(req, res) {
      let s = "SELECT * FROM live_records";
      config.query(s, function(err, data, fields) {
      if (err) throw err;
      res.json({
      data
      })
      console.log(res);
     })
     });
    app.post('/login', jsonParser , function(req,res){
      let data = {address: req.body.Addr, name: req.body.Name};
      let s = "INSERT INTO Id SET ?";
      config.query(s, data, function(err, data, fields){
        if (err) throw err;
        res.json({
          data
        })
      })
    });
    var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
  });