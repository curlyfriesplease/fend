import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const regenerator = require("regenerator-runtime/runtime");

const serverLocalAddressTest = 'http://localhost:8080/test';


console.log("Index JS!!");

const sendTextToServer = async () => {
  alert("button clicked");
  const textToBeSent = document.getElementById("name").value;
  if (textToBeSent == "") {
    alert("Please type in some text to send!");
    return;
  }
  makeRequest(textToBeSent);
};

const makeRequest = async (data) => {
  const response = await fetch("/test");
  try {
    console.log("Attempting to send to server");
    serverGetResponse = await response.json();
    console.log("GET sent to server. This is the object returned: ");
    console.dir(serverGetResponse);
    updateUI(serverGetResponse);
  } catch (error) {
    console.log("Error sending to server: ", error);
  }
};

// Method to update the DOM with the information returned from the GET call.
const updateUI = async (data) => {
  try {
    document.getElementById("results").innerHTML = data;
    console.log("DOM has been updated with data.");
  } catch (error) {
    console.log("Error updating UI: ", error);
  }
};

// async function GET data from server.js
async function testCallToServer(serverLocalAddressTest) {
	try {
		const fetchData = await fetch(serverLocalAddressTest);
		const res = await fetchData.json();
		return res;
	} catch (error) {
		alert(error);
    console.log(error)
	}
}

document
  .getElementById("submissionButton")
  .addEventListener("click", testCallToServer);



     
// async function POST data to server 
async function postDataToServer(data, localServer) {
	try {
		await fetch(localServer, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify(data),
		});

		return localServer;
	} catch (error) {
		alert(error);
	}
}
