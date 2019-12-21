const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");
const { Client } = require("pg");
const db = require("./queries");
const dir = __dirname + "/content/";
const path = require("path");
const port = 80;

router.use(function(req, res, next) {
  console.log("/" + req.method);
  next();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.static(dir));
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "images")));
app.use("/", router);

//Homepage
router.get("/", function(req, res) {
  res.sendFile(dir + "index.html");
});

//About page
router.get("/about", function(req, res) {
  res.sendFile(dir + "about.html");
});

router.get("/la", function(req, res) {
  res.sendFile(dir + "la.html");
});

router.get("/la/breakfast", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//General Queries
app.get("/cuisine", db.getCuisine);
app.get("/cuisine/:id", db.getCuisineById);
app.get("/laneigh", db.getLaNeigh);
app.get("/pdxneigh", db.getPdxNeigh);

//LA Breakfast Queries
app.get("/labreak", db.getLaBreak);
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
app.get("/lalunch", db.getLaLunch);
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
app.get("/ladinner", db.getLaDinner);

//LA Coffee Queries
app.get("/lacoffee", db.getLaCoffee);

//LA Bar Queries
app.get("/labars", db.getLaBars);

app.listen(port, function() {
  console.log("App listening on port 80!");
});
