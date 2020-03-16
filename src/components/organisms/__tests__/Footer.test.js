import React from "react";
import { Router } from "react-router";
import Footer from "../Footer";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const history = createMemoryHistory();

afterEach(cleanup);

let component;
let mockStore;
let store;

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);
  component = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("It should render <Footer/> template correctly", () => {
  it("renders the Footer template correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("renders a linkedIn icon", () => {
    expect(component.queryByAltText(/LinkedIn/i)).toBeInTheDocument();
  });

  it("renders a Twitter icon", () => {
    expect(component.queryByAltText(/Twitter/i)).toBeInTheDocument();
  });

  it("renders a Facebook icon", () => {
    expect(component.queryByAltText(/Facebook/i)).toBeInTheDocument();
  });

  it("renders the Privacy link", () => {
    expect(component.queryByText(/Privacy/i)).toBeInTheDocument();
  });
});
