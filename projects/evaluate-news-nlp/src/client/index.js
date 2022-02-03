import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

const regenerator = require("regenerator-runtime/runtime");

const sendTextToServer = async () => {
  alert("button clicked");
  const textToBeSent = document.getElementById("name").value;
  if (textToBeSent == "") {
    alert("Please type in some text to send!");
    return;
  }
  makeRequest(textToBeSent);
};

// For testing the server's running
const testCallToServer = async () => {
  const response = await fetch("/test");
  try {
    const data = await response.json();
    console.dir(data);
    document.getElementById("results").innerHTML = data.message;
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
  }
};


const callToServer2 = async () => {
  let inputText = document.getElementById("textinput").value;
  console.log("sending this text: " + inputText);
  const response = await fetch("/text2", {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({inputText})
  });
  console.dir(response);
  try {
    const dataReturned = await response.json();
    console.dir(dataReturned);
    return dataReturned;
  } catch (error) {
    alert(error);
    console.log(error);
    return;
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

document
  .getElementById("submissionButton2")
  .addEventListener("click", callToServer2);

document
  .getElementById("submissionTestButton")
  .addEventListener("click", testCallToServer);

//TODO: Button onSubmit, prevent default, chain POST and updateUI
