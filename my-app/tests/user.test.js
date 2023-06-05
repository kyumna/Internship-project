import React from "react";
import { render } from "react-dom";
import Users from '../src/app/page'
import { act } from "react-dom/test-utils";
 const MOCK_DATA = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret"
  },
];
let container;

// beforeEach function runs before each 
// of the tests in this file run to setup a testing environment  
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

// afterEach runs after each one of the tests in this file completes 
// to teardown the testing environment
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
describe("Posts", () => {
    it("Renders without crashing", async () => {
    
    // This part fakes fetch and resolves it by return MOCK_DATA
    global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(MOCK_DATA),
        })
      );
      
      // This part renders a component inside of container that we created before
      await act(async () => {
        render(<Users />, container);
      });
  
      expect(container).toMatchSnapshot();
    });
  });