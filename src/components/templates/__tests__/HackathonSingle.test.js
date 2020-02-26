import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import HackathonSingle from "../HackathonSingle";
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
        <HackathonSingle />
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on HackathonSingle.js that are contained on the making an event form", () => {
  //   it("should be displaying the <H3>", () => {
  //     let mainHeader = () => jestFeatures.getByText("Add Teammates");
  //     expect(mainHeader()).toBeInTheDocument();
  //   });
  it("asserts the text copyright text node is rendering", () => {
    expect(
      jestFeatures.getByText("International Crafters © 2020")
    ).toBeInTheDocument();
  });
  it("asserts the text alt for img is rendering", () => {
    expect(jestFeatures.getByAltText("LinkedIn")).toBeInTheDocument();
  });
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
