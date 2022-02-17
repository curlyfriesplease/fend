// Checking Polarity
export const  updateUI = (agreementScore, polarityScore, confidenceScore, ironyScore, subjectivityScore) => {
checkAgreement(agreementScore);
checkPolarity(polarityScore);
checkConfidence(confidenceScore);
checkIrony(ironyScore);
checkSubjectivity(subjectivityScore);
}

const checkAgreement = (score) => {
    document.getElementById("agreementScore").innerText = score;
}

const checkPolarity = (score) => {
console.log("::: Updating polarity score with this value: " + score)
    switch (score){
        case "P+":
            document.getElementById("polarityScore").innerText = "strong positive";
            break;
        case "P":
            document.getElementById("polarityScore").innerText = "positive";
            break;
        case "NEU":
            document.getElementById("polarityScore").innerText =  "neutral";
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
}

const checkConfidence = (score) => {
    document.getElementById("confidenceScore").innerText = score
}

const checkIrony = (score) => {
    document.getElementById("ironyScore").innerText = score
}

const checkSubjectivity = (score) => {
    document.getElementById("subjectivityScore").innerText = score
}
