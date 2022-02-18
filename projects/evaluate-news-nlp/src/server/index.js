// Allow for environment vars
const dotenv = require("dotenv");
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Formdata module, so that NodeJS can make use of the FormData() method
var FormData = require("form-data");
var fs = require("fs");


// Import express, middleware, declare variables.
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors");
const app = express();
const fetch = require("node-fetch");
const res = require("express/lib/response");
const apiKey = process.env.API_KEY;
const meaningcloudUrl = 'https://api.meaningcloud.com/sentiment-2.1?';

// not sure if this is needed? app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));
app.use(cors());
console.log(__dirname);

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

// Routing

app.get("/", function (req, res) {
  console.log("GET call to / called");
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('../client/views/index.html'))
  //res.sendFile('dist/index.html')
  //res.sendFile("src/client/views/index.html");
});

app.get("/test", function (req, res) {
  console.log("GET test endpoint");
  res.send(mockAPIResponse);
});

// To receive POST call
app.post("/text", function (req, res) {
  textToAnalyse = req.body.inputText;
  console.log("Text received at POST endpoint is: ")
  console.log(textToAnalyse)
  sendToMeaningcloud(textToAnalyse).then((receivedResponse) =>
    res.send(receivedResponse)
  );
});

const sendToMeaningcloud = async (textToAnalyse) => {
  const urlToRequest = `${meaningcloudUrl}key=${apiKey}&lang=en&txt=${textToAnalyse}`;
  console.log("sending API call to this URL: " + urlToRequest)
  const responseAnalysed = await fetch(urlToRequest)
  try {
    receivedResponse = await responseAnalysed.json();
    console.dir(receivedResponse);
    return receivedResponse;
  } catch (error) {
    console.log("error", error);
  }
};

