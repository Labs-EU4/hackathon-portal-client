import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import UserProfileFormPage from "../UserProfileFormPage";
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
          <UserProfileFormPage />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Component UserProfileFormPage.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(component).toMatchSnapshot();
  });
  // it("asserts that the first character of the user's email shows up on the menu", () => {
  //   expect(component.getByText("8")).toBeInTheDocument();
  // });
  it("The text node 'Profile Image', renders properly", () => {
    expect(component.queryByText(/Profile Image/i)).toBeInTheDocument();
  });
  it("The text node 'I like coding', renders properly", () => {
    expect(component.queryByText(/I like coding/i)).toBeInTheDocument();
  });

  it("The text node 'Save Changes', renders properly", () => {
    expect(component.queryByText(/Save Changes/i)).toBeInTheDocument();
  });
  it("asserts that the <textarea> placeholder for current User bio text node renders properly on the form component", () => {
    expect(component.queryByPlaceholderText("bio")).toBeInTheDocument();
  });

  it("asserts that the <textarea> text node, 'I like coding' for current User bio text node renders properly on the form component", () => {
    expect(component.queryByText("I like coding")).toBeInTheDocument();
  });
});
