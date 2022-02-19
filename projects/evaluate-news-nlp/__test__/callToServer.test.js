// Import the file to test
import { callToServer } from "../src/client/js/calls";

describe("Call to server Tests", () => {
  test("callToServer() function test", () => {
    document.body.innerHTML =
    '<div id="results"><span style="visibility:hidden">0</span></div>';
    expect(callToServer).toBeDefined();
  });
});

