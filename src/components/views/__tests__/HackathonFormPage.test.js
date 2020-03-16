import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import HackathonFormPage from "../HackathonFormPage";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";

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
          <HackathonFormPage />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Component HackathonFormPage.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(component).toMatchSnapshot();
  });
  it("asserts that the first character of the user's email shows up on the menu", () => {
    expect(component.getByText("8")).toBeInTheDocument();
  });
  it("asserts that the Create New Hackathon text node renders properly on the form component", () => {
    expect(component.getByText("Create New Hackathon")).toBeInTheDocument();
  });
});
