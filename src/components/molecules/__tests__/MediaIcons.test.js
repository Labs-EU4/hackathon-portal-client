import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import MediaIcons from "../../molecules/MediaIcons";
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
        <MediaIcons />
      </Provider>
    </Router>
  );
});

describe("Component MediaIcons.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
