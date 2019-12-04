const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const { Client } = require('pg')
const db = require('./queries')
const path = __dirname + '/content/';
const port = 80;

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
app.get('/cuisine', db.getCuisine)
app.get('/cuisine/:id', db.getCuisineById)
app.get('/labreak', db.getLaBreak)
app.get('/labreak/:id', db.getLaBreakById)
app.get('/labreak/neigh/:neigh', db.getLaBreakByNeigh)

app.listen(port, function () {
  console.log('App listening on port 80!')
})
