const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const { Client } = require('pg')
const db = require('./queries')
const path = __dirname + '/content/';
const port = 8080;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/about', function(req,res){
  res.sendFile(path + 'about.html');
});

app.use(express.static(path));
app.use('/', router);
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})
