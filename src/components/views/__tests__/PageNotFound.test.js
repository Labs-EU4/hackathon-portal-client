import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";

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
        <ThemeProvider theme={theme}>
          <PageNotFound />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on PageNotFound.js", () => {
  it("displays the img element shown for the 404 error ", () => {
    expect(jestFeatures.getByAltText("404 icon")).toBeInTheDocument();
  });

  it("displays the message shown on the <h3> element for the 404 error message", () => {
    expect(jestFeatures.getByText("Error code: 404")).toBeInTheDocument();
  });
  it("displays a part of the description for the error", () => {
    expect(
      jestFeatures.getByText(/We can't seem to find the page/i)
    ).toBeInTheDocument();
  });

  it("renders without crashing ", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
