// Import the file to test
import { handleSubmit } from "../src/client/js/formHandler";

describe("HandleSubmit Tests", () => {
  test("handleSubmit() function definiton test", () => {
    expect(handleSubmit).toBeDefined();
  });
  test("HandleSubmit call test", () => {
    document.body.innerHTML =
      '<form id="form">' +
      '    <input id="textinput" type="text" name="input" value=""  placeholder="Input text here">' +
      '    <input type="submit" name="" value="submit">' +
      "</form>";
    const event = { preventDefault: () => {} };
    const eventSpy = jest.spyOn(event, "preventDefault");
    handleSubmit(event);
    expect(eventSpy).toHaveBeenCalled();
  });
});
