require('newrelic');
const express = require("express"); // core web server + API
const app = express(); // sugar
const cors = require("cors"); // required for cross origin resource sharing-- in case the contianer runs on a different domain than the db
const router = express.Router(); // sugar
const db = require("./queries"); // API for the db
const dir = __dirname + "/content/"; // main public facing directory
const path = require("path"); //sugar for the React views
const port = 80; //in production, will change to non-privleged port, and use docker to proxy 80 to that port

//Logging
router.use(function(req, res, next) {
  console.log("/" + req.method);
  next();
});

//Using CORS
app.use(cors()); // enabling cross origin resource sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // allowing API requests from all domains for now.
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Allowing directories
app.use(express.static(dir));

// Only need to allow the web server to serve the production build from React, Docker image will clean up the raw code

app.use(express.static(path.join(__dirname, "content")));
//LA
app.use(express.static(path.join(__dirname, "views", "la", "build")));
app.use(express.static(path.join(__dirname, "views", "labreak", "build")));
app.use(express.static(path.join(__dirname, "views", "lalunch", "build")));
app.use(express.static(path.join(__dirname, "views", "ladinner", "build")));
app.use(express.static(path.join(__dirname, "views", "lacoffee", "build")));
app.use(express.static(path.join(__dirname, "views", "labars", "build")));

//PDX
app.use(express.static(path.join(__dirname, "views", "pdxbreak", "build")));
app.use(express.static(path.join(__dirname, "views", "pdxlunch", "build")));
app.use(express.static(path.join(__dirname, "views", "pdxdinner", "build")));
app.use(express.static(path.join(__dirname, "views", "pdxcoffee", "build")));
app.use(express.static(path.join(__dirname, "views", "pdxbars", "build")));

// Routing requests
app.use("/", router);

// Homepage
// Just html + css
router.get("/", function(req, res) {
  res.sendFile(dir + "index.html");
});

//About page
// Also just html + css
router.get("/about", function(req, res) {
  res.sendFile(dir + "about.html");
});

//Landing pages
// html + css, these then branch off to the different views
//router.get("/la", function(req, res) {
//  res.sendFile(dir + "la.html");
//});
router.get("/pdx", function(req, res) {
  res.sendFile(dir + "pdx.html");
});

//Views
// filterable, reactive UIs written separately in React for each major category
// the create-react-app bootstrap requires index.html + index.js, so we serve the files based on unique paths rather than labreak.html, etc
// this also allows us to separate the API URL for the GET requests React uses from the actual UI
// also, using react for a multi-page app!
//LA Home
router.get("/la", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "la", "build", "index.html"));
});

//LA Breakfast
router.get("/la/breakfast", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "labreak", "build", "index.html"));
});

//LA Lunch
router.get("/la/lunch", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "lalunch", "build", "index.html"));
});

//LA Dinner
router.get("/la/dinner", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "ladinner", "build", "index.html"));
});

//LA Coffee
router.get("/la/coffee", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "lacoffee", "build", "index.html"));
});

//LA Bars
router.get("/la/bars", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "labars", "build", "index.html"));
});

//pdx Breakfast
router.get("/pdx/breakfast", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "pdxbreak", "build", "index.html"));
});

//PDX Lunch
router.get("/pdx/lunch", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "pdxlunch", "build", "index.html"));
});

//PDX Dinner
router.get("/pdx/dinner", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "pdxdinner", "build", "index.html"));
});

//PDX Coffee
router.get("/pdx/coffee", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "pdxcoffee", "build", "index.html"));
});

//PDX Bars
router.get("/pdx/bars", function(req, res) {
  res.sendFile(path.join(__dirname, "views", "pdxbars", "build", "index.html"));
});

//API
// additional documentation in queries.js
//General Queries
app.get("/cuisine", db.getCuisine); //json of all data in tbl_cuisine
app.get("/cuisine/:id", db.getCuisineById);
app.get("/laneigh", db.getLaNeigh); //json of all data in tbl_laneigh
app.get("/pdxneigh", db.getPdxNeigh); //json of all data in tbl_pdxneigh

//LA Breakfast Queries
app.get("/labreak", db.getLaBreak); //json of all data in tbl_labreak
app.get("/labreak/visited", db.getLaBreakVisited);
app.get("/labreak/:id", db.getLaBreakById);
app.get("/labreak/neigh/:neigh", db.getLaBreakByNeigh);
app.get("/labreak/cuisine/:cuisine", db.getLaBreakByCuisine);
app.get("/labreak/nc/:neigh/:cuisine", db.getLaBreakByNeighCuisine);
app.get("/labreak/price/:price", db.getLaBreakByPrice);
app.get("/labreak/np/:neigh/:price", db.getLaBreakByNeighPrice);
app.get("/labreak/cp/:cuisine/:price", db.getLaBreakByCuisinePrice);
app.get(
  "/labreak/ncp/:neigh/:cuisine/:price",
  db.getLaBreakByNeighCuisinePrice
);

//LA Lunch Queries
app.get("/lalunch", db.getLaLunch); //json of all data in tbl_lalunch
app.get("/lalunch/visited", db.getLaLunchVisited);
app.get("/lalunch/:id", db.getLaLunchById);
app.get("/lalunch/neigh/:neigh", db.getLaLunchByNeigh);
app.get("/lalunch/cuisine/:cuisine", db.getLaLunchByCuisine);
app.get("/lalunch/nc/:neigh/:cuisine", db.getLaLunchByNeighCuisine);
app.get("/lalunch/price/:price", db.getLaLunchByPrice);
app.get("/lalunch/np/:neigh/:price", db.getLaLunchByNeighPrice);
app.get("/lalunch/cp/:cuisine/:price", db.getLaLunchByCuisinePrice);
app.get(
  "/lalunch/ncp/:neigh/:cuisine/:price",
  db.getLaLunchByNeighCuisinePrice
);

//LA Dinner Queries
app.get("/ladinner", db.getLaDinner); //json of all data in tbl_ladinner

//LA Coffee Queries
app.get("/lacoffee", db.getLaCoffee); //json of all data in tbl_lacoffee

//LA Bar Queries
app.get("/labars", db.getLaBars); //json of all data in tbl_labars

//PDX Breakfast Queries
app.get("/pdxbreak", db.getPdxBreak); //json of all data in tbl_pdxbreak

//PDX Lunch Queries
app.get("/pdxlunch", db.getPdxLunch); //json of all data in tbl_pdxlunch

//PDX Dinner Queries
app.get("/pdxdinner", db.getPdxDinner); //json of all data in tbl_pdxdinner

//PDX Coffee Queries
app.get("/pdxcoffee", db.getPdxCoffee); //json of all data in tbl_pdxcoffee

//PDX Bar Queries
app.get("/pdxbars", db.getPdxBars); //json of all data in tbl_pdxbars

//Enabling the server
app.listen(port, function() {
  console.log("App listening on port 80!"); //change in prod
});
