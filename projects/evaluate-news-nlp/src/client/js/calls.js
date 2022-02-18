import 'regenerator-runtime/runtime'

// For sending text to the server, to make an API call
export const callToServer = async () => {
  let inputText = document.getElementById("textinput").value;
  console.log(
    "::: 📞 Call to server function called. sending this text: " + inputText
  );
  const response = await fetch("http://localhost:8080/text", {
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
  console.log("::: 📥 Response from the server is:");
  console.dir(response);
  try {
    const dataReturned = await response.json();
    console.dir(dataReturned);
    return dataReturned;
  } catch (error) {
    alert(error);
    console.log("::: ❌ Error when trying to fetch Meaningcloud data: ");
    console.log(error);
    return;
  }
};

export const testCall = async () => {
  const response = await fetch("http://localhost:8080/test");
  try {
    const data = await response.json();
    console.log("Test endpoint has returned: ");
    console.dir(data);
    return data;
  } catch (err) {
    console.log("Error calling test endpoint: " + err);
  }
};
