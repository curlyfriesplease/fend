// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
const res = require("express/lib/response");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server, start on port 8000
const port = 8000;
const listening = () => {
  console.log(`server running on localhost: ${port}`);
};
const server = app.listen(port, listening());

// Get route
app.get("/getweather", (req, res) => {
  console.log(req);
  res.send(projectData);
});

// Post route
app.post("/addentry", (req, res) => {
  projectData = req.body;
  res.send({ message: "Added new entry" });
  console.log(req);
});
