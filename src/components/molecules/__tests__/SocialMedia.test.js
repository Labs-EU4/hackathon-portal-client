import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import SocialMedia from "../../molecules/SocialMedia";
import { initialState } from "../../../utils/mockData";

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
        <SocialMedia />
      </Provider>
    </Router>
  );
});

describe("Component SocialMedia.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
  it("the text node on <StrikedSpan/> is rendering properly", () => {
    expect(jestFeatures.getByText("OR LOGIN WITH")).toBeInTheDocument();
  });
});
