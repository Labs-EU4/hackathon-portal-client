import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, cleanup } from "@testing-library/react";
import LoginPage from "../LoginPage";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
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
          <LoginPage />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("LoginPage.js", () => {
  it("renders the LoginPage component correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("the component renders an a tag to login", () => {
    expect(
      component.queryByAltText(/Hackton - Organise hackathons/i)
    ).toBeInTheDocument();
  });

  it("the component image with alt tag", () => {
    expect(component.queryByAltText(/Log In now/i)).toBeInTheDocument();
  });

  it("the component renders an a tag to signup", () => {
    expect(component.getByTestId("label")).toBeInTheDocument();
    component.debug();
  });
});
