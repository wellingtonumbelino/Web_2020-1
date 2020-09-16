var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//importando a conexão com o mongo
require('./db/MongoDBCon');

//rotas de acesso
var users = require('./routes/users');
var disciplinas = require('./routes/DisciplinaRoutes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

//permitindo os métodos HTTP pro React
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//definindo as rotas de utilização
app.use('/api/v1/users', users);
app.use('/disciplinas', disciplinas);

module.exports = app;
