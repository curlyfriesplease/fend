// Import the file to test
import { handleSubmit } from "../src/client/js/formHandler";

describe("HandleSubmit Tests", () => {
    document.body.innerHTML =
      '<form id="form">' +
      '    <input id="textinput" type="text" name="input" value="testvalue"  placeholder="Input text here">' +
      '    <input type="submit" name="" value="submit">' +
      '<div id="loading" style="visibility:hidden"><img src="https://images2.imgbox.com/f2/72/8BuUMrUN_o.gif" /></div>';
      "</form>";
  test("handleSubmit() function definiton test", () => {
    expect(handleSubmit).toBeDefined();
  });
});

