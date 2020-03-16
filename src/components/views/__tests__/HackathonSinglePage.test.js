import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import HackathonSinglePage from "../HackathonSinglePage";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const history = createMemoryHistory();

let mockStore;
let store;
let component;

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);

  component = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HackathonSinglePage />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Component HackathonSinglePage.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("asserts that the Dashboard text node renders properly ", () => {
    expect(
      component.queryByAltText(/Hackton - Organise hackathons/i)
    ).toBeInTheDocument();
  });
});
