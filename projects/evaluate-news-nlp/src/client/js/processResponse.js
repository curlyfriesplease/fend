// Checking Polarity
export const updateUI = (
  agreementScore,
  polarityScore,
  confidenceScore,
  ironyScore,
  subjectivityScore
) => {
  checkAgreement(agreementScore);
  checkPolarity(polarityScore);
  checkConfidence(confidenceScore);
  checkIrony(ironyScore);
  checkSubjectivity(subjectivityScore);
};

const checkAgreement = (score) => {
  //    document.getElementById("agreementScore").innerText = score;
  let agreementColour;
  switch (score) {
    case "AGREEMENT":
      agreementColour = "#0a942f";
    case "DISAGREEMENT":
      agreementColour = "#9c170e";
  }
  document.getElementById(
    "agreementScore"
  ).innerHTML = `<span style="color:${agreementColour}">${score}</span>`;
};

const checkPolarity = (score) => {
  console.log("::: Updating polarity score with this value: " + score);
  switch (score) {
    case "P+":
      document.getElementById("polarityScore").innerText = "strong positive";
      break;
    case "P":
      document.getElementById("polarityScore").innerText = "positive";
      break;
    case "NEU":
      document.getElementById("polarityScore").innerText = "neutral";
      break;
    case "N":
      document.getElementById("polarityScore").innerText = "negative";
      break;
    case "N+":
      document.getElementById("polarityScore").innerText = "strong negative";
      break;
    case "NONE":
      document.getElementById("polarityScore").innerText = "without sentiment";
      break;
  }
};

const checkConfidence = (score) => {
  let confidenceColour;
  if (score > 0 && score < 50) {
    confidenceColour = "#9c170e";
  } else if (score >= 50 && score <= 79) {
    confidenceColour = "##949c0e";
  } else if (score >= 80) {
    confidenceColour = "#0a942f";
  }
  document.getElementById(
    "confidenceScore"
  ).innerHTML = `<span style="color:${confidenceColour}">${score}</span>`;
};

const checkIrony = (score) => {
  let ironyColour;
  switch (score) {
    case "NONIRONIC":
      ironyColour = "#0a942f";
    case "IRONIC":
      ironyColour = "#9c170e";
  }
  document.getElementById(
    "ironyScore"
  ).innerHTML = `<span style="color:${ironyColour}">${score}</span>`;
};

const checkSubjectivity = (score) => {
  document.getElementById("subjectivityScore").innerText = score;
};
