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

//Done There should be a GET route setup on the server side with the first argument as a string naming the route,
// and the second argument a callback function to return the JS object created at the top of server code.

//TODO You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed
// on the client side as an asynchronous function.

//TODO The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the
//data received from the client side POST.

// TIP: The POST route in the server side should setup which will map the data sent via the API from the client side and save it
// in the projectData variable.


// Get route
app.get('/getweather', (req, res) => {
    console.log(req)
    res.send(projectData);
});

// Post route
app.post('/addentry', (req, res) => {
    projectData = req.body;
    res.send({ message: 'Added new entry'})
    console.log(req)
});

