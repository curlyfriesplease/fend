// Import the file to test
import { callToServer } from "../src/client/js/calls"
import { testCall } from "../src/client/js/calls"

describe("Call to server Tests", () => {
    test("callToServer() function test", () => {
           expect(callToServer).toBeDefined();
})
test("Call to test endpoint", () => {
  const input = testCall();
  const output =  [{
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}]
try {
    expect(postData(input)).toBe(output);
    done();
  } catch (error) {
    console.log(error);
  }

})


});



