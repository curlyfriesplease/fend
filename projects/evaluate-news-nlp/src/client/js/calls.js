  // For sending text to the server, to make an API call
  export const callToServer = async () => {
    let inputText = document.getElementById("textinput").value;
    console.log("::: 📞 Call to server function called. sending this text: " + inputText);
    const response = await fetch("http://localhost:8080/text2", {
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
    console.log("::: 📥 Response from the server is:")
    console.dir(response);
    try {
      const dataReturned = await response.json();
      console.dir(dataReturned);
      return dataReturned;
    } catch (error) {
      alert(error);
      console.log("::: ❌ Error when trying to fetch Meaningcloud data: ")
      console.log(error);
      return;
    }
  };