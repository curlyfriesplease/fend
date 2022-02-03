
import { testCallToServer } from "./js/calls";
import { callToServer } from "./js/calls";
import { handleSubmit } from "./js/formHandler";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

// const regenerator = require("regenerator-runtime/runtime");


// Method to update the DOM with the information returned from the GET call.
/*
const updateUI = async (data) => {
  try {
    document.getElementById("results").innerHTML = data;
    console.log("DOM has been updated with data.");
  } catch (error) {
    console.log("Error updating UI: ", error);
  }
};
*/

document
  .getElementById("submissionButton2")
  .addEventListener("click", callToServer);

document
  .getElementById("submissionTestButton")
  .addEventListener("click", testCallToServer);

export { testCallToServer, callToServer, handleSubmit }
