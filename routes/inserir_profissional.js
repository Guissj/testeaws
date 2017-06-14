var express = require('express');
var router = express.Router();
var mysql =require('mysql');

var app = express();


router.put('/', function(req, res) {

    var data=req.body;
    console.log(data.cep);

    var connection2 = mysql.createConnection({
        host     : 'reformejaprod.cecbe5hfdmh1.us-west-2.rds.amazonaws.com',
        user     : 'voith',
        password : '#voithapps13#',
        database : 'ReformeJa'
    });

    connection2.connect();

    connection2.query("insert into logs(log)Values('"+data.cpfCnpj+"')",function (err,rows,fields){
        console.log(err);
    });

    connection2.query("insert into DadosLogin(cpfCnpj,tipoPessoa,tipoAcesso,login,senha,statusConta,dataValidadeAssinatura,dataCadastro)Values('"+data.cpfCnpj+"','"+data.tipoPessoa+"','"+data.tipoAcesso+"','"+data.email+"','"+data.senha+"','"+data.statusConta+"','"+data.dataValidadeAssinatura+"','"+data.dataCadastro+"')",function (err,rows,fieds){
        console.log(err);
    });
    connection2.query("insert into DadosProfissional(cpfCnpj,nome,email,cep,endereco,bairro,uf,profissao,telefoneContato,dataNascimento)Values('"+data.cpfCnpj+"','"+data.nome+"','"+data.email+"','"+data.cep+"','"+data.endereco+"','"+data.bairro+"','"+data.uf+"','"+data.profissao+"','"+data.telefoneContato+"','"+data.dataNascimento+"')",function (err,rows,fieds){
        console.log(err);
        if(err==null){
            res.sendStatus(200, "PUT");
        }else{
            res.sendStatus(208, "PUT");
        }
    });

    connection2.end();

    //res.sendStatus(200,"PUT");
});
module.exports = router;
