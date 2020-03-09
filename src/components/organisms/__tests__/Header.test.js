import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import Header from "../../organisms/Header";
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
        <Header />
      </Provider>
    </Router>
  );
});

describe("Component Header.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
  it("the Image within the component is rendering properly", () => {
    expect(
      jestFeatures.getByAltText("Hackton - Organise hackathons")
    ).toBeInTheDocument();
  });
  it("the text node Log In is rendering properly", () => {
    expect(jestFeatures.queryByText(/Log In/i)).toBeInTheDocument();
  });
  it("the text node Sign Up is rendering properly", () => {
    expect(jestFeatures.queryByText(/Sign Up/i)).toBeInTheDocument();
  });
});
