import { callToServer } from "./calls";
import { updateUI } from "./processResponse";

export const handleSubmit = async (event) => {
  event.preventDefault();
console.log("::: ✔️ Handle Submit function called :::")
  // check text was put into the form field
  const textToBeSent = document.getElementById("textinput").value;
  if (textToBeSent == "") {
    alert("Please type in some text to send!");
    return;
  }

  //Make POST request, then update the UI
  console.log("::: Form Submitted :::");
  callToServer()
    //  .then((dataReturned) => dataReturned.json())
    .then(function (dataReturned) {
      let agreementScore = dataReturned.agreement;
      let polarityScore = dataReturned.score_tag;
      let confidenceScore = dataReturned.confidence;
      let ironyScore = dataReturned.irony;
      let subjectivityScore = dataReturned.subjectivity;
      updateUI(
        agreementScore,
        polarityScore,
        confidenceScore,
        ironyScore,
        subjectivityScore
      );
    });
};
