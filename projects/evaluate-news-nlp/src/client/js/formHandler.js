import { callToServer } from "./calls";

export function handleSubmit(event) {
    event.preventDefault()

    // check text was put into the form field
    const textToBeSent = document.getElementById("textinput").value;
    if (textToBeSent == "") {
      alert("Please type in some text to send!");
      return;
    }

    //Make POST request, then update the UI
    console.log("::: Form Submitted :::")
    callToServer()
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.agreement
    })
}


