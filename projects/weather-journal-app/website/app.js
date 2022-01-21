/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=6c7f0a92a3509b090ce23203bd21c2de&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

//TODO The API Key variable is passed as a parameter to fetch()

//TODO You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the
//client side as an asynchronous function. The client side function should take two arguments, the URL to make a POST to,
//and an object holding the data to POST.

//TODO TIP: Implement async calling by the use of promise chaining where you will pass the the mix of API and user responses, to POST
//endpoint on server side.

// Function to get project data, copied from the Udacity project rubric
const retrieveData = async () => {
  const request = await fetch("/weather");
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById("temp").innerHTML =
      Math.round(allData.temp) + "degrees";
    document.getElementById("content").innerHTML = allData.feel;
    document.getElementById("date").innerHTML = allData.date;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

//blah blah blah Here is the client side code that would make a GET request to the animal info API:
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// api.openweathermap.org/data/2.5/weather?zip=10001&appid=6c7f0a92a3509b090ce23203bd21c2de&units=imperial

let baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";

document.getElementById("generate").addEventListener("click", performAction);

function performAction() {
  const zipCodeRequested = document.getElementById("zip").value;
  getWeather(baseURL, zipCodeRequested, apiKey)
  /*
    .then(
        sendNewEntryToServer()
        )
    )


*/
}

const getWeather = async (baseURL, zipCodeRequested, apiKey) => {
  console.log("Requesting weather from " + baseURL + zipCodeRequested + apiKey);
  const res = await fetch(baseURL + zipCodeRequested + apiKey);
  try {
    const data = await res.json();
    console.dir(data);
    return data;
  } catch (error) {
    console.log("Error fetching weather: ", error);
  }
  //TODO function to format data, passed 'data' var. At the end of that func, call sendEntryToServer('/addentry',nameOfFormattedObject)
  //TODO function to format both creates an object to pass for saving, AND innnerHTML updates the page
};

let getEntriesFromServer = async (getURL) => {
    const response = await fetch(getURL);
    serverRes = await response.json()
    .then(
        updateUI(serverRes))
}

let sendNewEntryToServer = async (url = "", data = {}) => {
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
    getEntriesFromServer("/getweather");
    return serverRes;
  } catch (error) {
    console.log("error", error);
  }
};

const updateUI = async (data) => {
//const request = await fetch("/getweather");
  try {
    //const allData = await request.json();
    document.getElementById("entryHolder").innerHTML = data[0].body;
  } catch (error) {
    console.log("Update UI error: ", error);
  }
};

// date, temp object[0].main.temp, location object[0].name content