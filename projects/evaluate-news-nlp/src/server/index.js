const dotenv = require("dotenv");
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Formdata module, so that NodeJS can make use of the FormData() method
var FormData = require("form-data");
var fs = require("fs");

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors");
const app = express();
const fetch = require("node-fetch");
const res = require("express/lib/response");
const apiKey = process.env.API_KEY;
const meaningcloudUrl = "https://api.meaningcloud.com/sentiment-2.1?";

app.use(bodyParser.urlencoded({ extended: false }));
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
  // res.sendFile(path.resolve('src/client/views/index.html'))
  res.sendFile("src/client/views/index.html");
});

app.get("/test", function (req, res) {
  console.log("GET test endpoint");
  res.send(mockAPIResponse);
});

app.post("/test", function (req, res) {
  console.log("POST test endpoint");
  res.send(mockAPIResponse);
});

// Endpoint that mostly uses boilerplate code taken from Meaningcloud. For the first button
app.get("/text", function (req, res) {
  console.log("GET text endpoint called");
  const formdata = new FormData();
  formdata.append("key", process.env.APIKEY);
  formdata.append("txt", "a bunch of testing text oh great isn't that nice");
  formdata.append("lang", "EN"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  )
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch((error) => console.log("error", error));
});

// FOr the second button
app.post("/text2", function (req, res) {
  console.log("POST endpoint 2");
  textToAnalyse = req.body;
  console.log("Text received at endpoint is: ")
  console.dir(textToAnalyse)
  sendToMeaningcloud(textToAnalyse).then((receivedResponse) =>
    res.send(receivedResponse)
  );
});

const sendToMeaningcloud = async (textToAnalyse) => {
  /*
  const formdata = new FormData();
  formdata.append("key", process.env.APIKEY);
  formdata.append("txt", textToAnalyse);
  formdata.append("lang", "EN");
  */
/*
  const formdata = {
    key: apiKey,
    txt: textToAnalyse,
    lang: "en",
  };
console.log(formdata.key)
console.log("key should be: " + apiKey)
console.log(formdata.txt)
console.log("text received by func is: " + textToAnalyse)
  const options = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  */
  console.log(textToAnalyse)
  console.log(JSON.stringify(textToAnalyse))
  const urlToRequest = `${meaningcloudUrl}key=${apiKey}&txt=${textToAnalyse}&lang=en`;
  const responseAnalysed = await fetch(urlToRequest)
    
    //"https://api.meaningcloud.com/sentiment-2.1",
    //options
  //);

  try {
    receivedResponse = await responseAnalysed.json();
    console.log(receivedResponse);
    return receivedResponse;
  } catch (error) {
    console.log("error", error);
  }
};

/*
//junk
const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&${req.body}`;
res.send(responseFromMeaningcloud);
try {
  json = await response.json();
  console.log("printing JSON");
  console.log(json);
  return json;
} catch (error) {
  console.log("error", error);
}

// jimmy func to pick apart then delete
let analyze = async function apiCall() {
  const formdata = new FormData();
  formdata.append("key", creds.application_key);
  formdata.append("txt", text);
  formdata.append("lang", "en"); // 2-letter code, like en es fr ...

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.meaningcloud.com/sentiment-2.1",
    requestOptions
  ); //?key=fc01f7cc1b734751ec308977748b84d3&lang=en&txt=This is a hardcoded message to see if i can get the api to work.")
  try {
    json = await response.json();
    console.log("printing JSON");
    console.log(json);
    return json;
  } catch (error) {
    console.log("error", error);
  }
};
*/
