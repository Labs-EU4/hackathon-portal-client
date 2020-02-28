import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";

import PageNotFound from "../PageNotFound";

const history = createMemoryHistory();

afterEach(cleanup);

let jestFeatures;
let mockStore;
let store;

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <PageNotFound />
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on PageNotFound.js", () => {
  // it("Should display the h3 title", () => {
  //   expect(jestFeatures.getByText("My hackathons")).not.toBeDisabled();
  // });
  //   it("should be displaying the button text node,to create a new event ", () => {
  //     let form = () => jestFeatures.getByText("Create New");

  //     expect(form()).toBeInTheDocument();
  //   });

  it("displays the img element shown for the 404 error ", () => {
    expect(jestFeatures.getByAltText("404 icon")).toBeInTheDocument();
  });

  it("displays a part of the description from an already created event", () => {
    expect(jestFeatures.getByText("Error code: 404")).toBeInTheDocument();
  });
  //   it("should not be displaying the 'you have not created events phrase,since two events are already listed' ", () => {
  //     let sentence = () =>
  //       jestFeatures.queryByText(/You have not created any events yet/);

  //     expect(sentence()).toBeNull();
  //   });
  it("renders without crashing ", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
