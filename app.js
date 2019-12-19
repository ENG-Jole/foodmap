const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const { Client } = require('pg');
const db = require('./queries');
const path = __dirname + '/content/';
const port = 80;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

//Homepage
router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

//About page
router.get('/about', function(req,res){
  res.sendFile(path + 'about.html');
});

app.use(express.static(path));
app.use('/', router);

//General Queries
app.get('/cuisine', db.getCuisine)
app.get('/cuisine/:id', db.getCuisineById)
app.get('/laneigh', db.getLaNeigh)
app.get('/pdxneigh', db.getPdxNeigh)

//LA Breakfast Queries
app.get('/labreak', db.getLaBreak)
app.get('/labreak/visited', db.getLaBreakVisited)
app.get('/labreak/:id', db.getLaBreakById)
app.get('/labreak/neigh/:neigh', db.getLaBreakByNeigh)
app.get('/labreak/cuisine/:cuisine', db.getLaBreakByCuisine)
app.get('/labreak/nc/:neigh/:cuisine', db.getLaBreakByNeighCuisine)
app.get('/labreak/price/:price', db.getLaBreakByPrice)
app.get('/labreak/np/:neigh/:price', db.getLaBreakByNeighPrice)
app.get('/labreak/cp/:cuisine/:price', db.getLaBreakByCuisinePrice)
app.get('/labreak/ncp/:neigh/:cuisine/:price', db.getLaBreakByNeighCuisinePrice)

//LA Lunch Queries
app.get('/lalunch', db.getLaLunch)
app.get('/lalunch/visited', db.getLaLunchVisited)
app.get('/lalunch/:id', db.getLaLunchById)
app.get('/lalunch/neigh/:neigh', db.getLaLunchByNeigh)
app.get('/lalunch/cuisine/:cuisine', db.getLaLunchByCuisine)
app.get('/lalunch/nc/:neigh/:cuisine', db.getLaLunchByNeighCuisine)
app.get('/lalunch/price/:price', db.getLaLunchByPrice)
app.get('/lalunch/np/:neigh/:price', db.getLaLunchByNeighPrice)
app.get('/lalunch/cp/:cuisine/:price', db.getLaLunchByCuisinePrice)
app.get('/lalunch/ncp/:neigh/:cuisine/:price', db.getLaLunchByNeighCuisinePrice)

app.listen(port, function () {
  console.log('App listening on port 80!')
})
