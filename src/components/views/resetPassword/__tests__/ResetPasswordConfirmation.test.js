import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import ResetPasswordConfirmation from "../ResetPasswordConfirmation";
import { initialState } from "../../../../utils/mockData";
import { theme } from "../../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const history = createMemoryHistory();

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
          <ResetPasswordConfirmation />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Asserts that text nodes on ResetPasswordConfirmation.js,render properly", () => {
  it("ResetPassword.js component renders properly", () => {
    expect(component).toMatchSnapshot();
  });
  it("The text node for the <H1> Check your inbox, renders properly ", () => {
    expect(component.queryByText(/Check your inbox/i)).toBeInTheDocument();
  });
  it("The text node for the  email confirmation, renders properly ", () => {
    expect(
      component.queryByText(
        "Please check your email inbox for directions on how to reset your password."
      )
    ).toBeInTheDocument();
  });
});
