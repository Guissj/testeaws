var express = require('express');
var router = express.Router();
var mysql =require('mysql');

var app = express();


router.get('/', function(req, res) {

    var data=req.body;


    var connection2 = mysql.createConnection({
        host     : 'reformejaprod.cecbe5hfdmh1.us-west-2.rds.amazonaws.com',
        user     : 'voith',
        password : '#voithapps13#',
        database : 'ReformeJa'
    });

    connection2.connect();


    connection2.query("select * from TipoServicos", function (err, rows, fields) {

        //JSON.stringify(rows)

        console.log(err);
        if(err==null){
            res.send(JSON.stringify(rows));
        }else{
            res.sendStatus(208, "GET");
        }
    });
    connection2.end();






});
module.exports = router;
