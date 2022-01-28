import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import { text } from "body-parser";

console.log("Index JS!!");

document
  .getElementById("submissionButton")
  .addEventListener("click", sendTextToServer);

const sendTextToServer = async () => {
  const textToBeSent = document.getElementById("name").value;
  if (textToBeSent == "") {
    alert("Please type in some text to send!");
    return;
  }
  makeRequest(textToBeSent);
};

const makeRequest = async (data) => {
  const response = await fetch("/text");
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
