/* Global Variables */
let dataReturnedFromOpenWeather;
let serverGetResponse;
let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=6c7f0a92a3509b090ce23203bd21c2de&units=imperial";

// Create a new date (in UK format!) instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + "." + d.getMonth() + 1 + "." + d.getFullYear();

// Add an event listener to the Generate Button
document.getElementById("generate").addEventListener("click", performAction);

// Button function to ensure a zip code's been added, and if so start the chain of events to capture info and update the DOM.
function performAction() {
  const zipCodeRequested = document.getElementById("zip").value;
  if (zipCodeRequested == "") {
    alert("Please type in a zipcode!");
    return;
  }
  getWeather(baseURL, zipCodeRequested, apiKey);
}

// Method to call OpenWeather's API
const getWeather = async (baseURL, zipCodeRequested, apiKey) => {
  console.log("Requesting weather from " + baseURL + zipCodeRequested + apiKey);
  const res = await fetch(baseURL + zipCodeRequested + apiKey);
  try {
    dataReturnedFromOpenWeather = await res.json();
    console.log("Object returned from OpenWeather: ");
    console.dir(dataReturnedFromOpenWeather);
    const dataToSendToServer = {
      date: newDate,
      location: dataReturnedFromOpenWeather.name,
      temp: dataReturnedFromOpenWeather.main.temp,
      content: document.getElementById("feelings").value,
    };
    sendNewEntryToServer("/addentry", dataToSendToServer);
  } catch (error) {
    console.log("Error fetching weather from OpenWeather: ", error);
  }
};

// Method to send some of the API returned information, as well as what the user's input, to the POST endpoint.
let sendNewEntryToServer = async (url = "", data = {}) => {
  console.log("Attempting to POST this object:");
  console.dir(data);
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const serverRes = await res.json();
    console.log("POST sent to server. Response is: " + serverRes.message);
    getEntriesFromServer();
  } catch (error) {
    console.log("Error when making the POST call: ", error);
  }
};

// Method to call the GET endpoint to obtain the stored data.
let getEntriesFromServer = async () => {
  const response = await fetch("/getweather");
  try {
    serverGetResponse = await response.json();
    console.log("GET sent to server. This is the object returned: ");
    console.dir(serverGetResponse);
    updateUI(serverGetResponse);
  } catch {
    console.log("Error with GET request: ", error);
  }
};

// Method to update the DOM with the information returned from the GET call.
const updateUI = async (data) => {
  try {
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("location").innerHTML = data.location;
    document.getElementById("temp").innerHTML = data.temp;
    document.getElementById("content").innerHTML = data.content;
    console.log("DOM has been updated with data.");
  } catch (error) {
    console.log("Error updating UI: ", error);
  }
};

// On page load, make a GET request so that if a previous entry exists, it's displayed.
getEntriesFromServer();
