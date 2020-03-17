import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import HackathonSingle from "../HackathonSingle";
import { initialState } from "../../../utils/mockData";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

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
        <ThemeProvider theme={theme}>
          <HackathonSingle />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on HackathonSingle.js that are contained on the making an event form", () => {
  it("asserts the text copyright text node is rendering", () => {
    expect(
      jestFeatures.getByText("International Crafters © 2020")
    ).toBeInTheDocument();
  });
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
  // it("The text node for the first character of the current user mail, renders properly on the menu", () => {
  //   expect(jestFeatures.queryByText(/8/i)).toBeInTheDocument();
  // });
});
