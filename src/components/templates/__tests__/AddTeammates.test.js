import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import AddTeammates from "../AddTeammates";
import { initialState } from "../../../utils/mockData";

const history = createMemoryHistory();

afterEach(cleanup);

let jestFeatures;
let mockStore;
let store;

beforeEach(() => {
  mockStore = configureStore();
  // let wrapper;
  store = mockStore(initialState);
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <AddTeammates />
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on AddTeammates.js that are contained on the making an event form", () => {
  it("should be displaying the <H3>", () => {
    let mainHeader = () => jestFeatures.getByText("Add Teammates");
    expect(mainHeader()).toBeInTheDocument();
  });
  it("asserts the text node under the search bar is rendering", () => {
    expect(jestFeatures.getByText("Back to dashboard")).toBeInTheDocument();
  });
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
