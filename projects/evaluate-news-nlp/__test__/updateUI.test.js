// Import the file to test
import { updateUI } from "../src/client/js/processResponse"
import { checkIrony } from "../src/client/js/processResponse"


describe("UpdateUI Tests", () => {
    document.body.innerHTML =
    '<div class="scoreNumber" id="polarityScore"><span style="color:red">0</span></div>'+
    '<div class="scoreNumber" id="confidenceScore"><span style="color:red">0</span></div>'+
    '<div class="scoreNumber" id="agreementScore"><span style="color:red">0</span></div>'+
    '<div class="scoreNumber" id="ironyScore"><span style="color:red">0</span></div>'+
    '<div class="scoreNumber" id="subjectivityScore"><span style="color:red">0</span></div>'+
    '<div id="loading" style="visibility:hidden"><img src="https://images2.imgbox.com/f2/72/8BuUMrUN_o.gif" /></div>';
 
    test("single updateUI() function test", () => {
        checkIrony("IRONIC");
        const ironyScore = document.getElementById("ironyScore");
        expect(ironyScore.textContent).toContain("IRONIC");
    })
 
    test("multiple updateUI() function test", () => {
        updateUI("AGREEMENT","P","50","IRONIC","25");
        const confidenceScore = document.getElementById("confidenceScore");
        const agreementScore = document.getElementById("agreementScore");
        const ironyScore = document.getElementById("ironyScore");

        expect(agreementScore.textContent).toContain("AGREEMENT");
        expect(confidenceScore.textContent).toContain("50");
        expect(ironyScore.textContent).toContain("IRONIC");
})});


