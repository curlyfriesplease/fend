
// For testing the server's running
export const testCallToServer = async () => {
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
  
  // For sending text to the server, to make an API call
  export const callToServer = async () => {
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
      body: JSON.stringify({ inputText }),
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