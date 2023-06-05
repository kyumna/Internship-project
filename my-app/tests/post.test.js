import React from "react";
import { render } from "react-dom";
import Post from '../src/app/Post/page'
import { act } from "react-dom/test-utils";
 const MOCK_DATA = [
  {
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
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
        render(<Post />, container);
      });
  
      expect(container).toMatchSnapshot();
    });
  });