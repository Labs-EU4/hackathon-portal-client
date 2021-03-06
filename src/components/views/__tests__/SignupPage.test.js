import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import SignupPage from "../SignupPage";
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
  store = mockStore(initialState);
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SignupPage />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Component UserProfile.js text nodes renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
  it("the component image with alt tag", () => {
    expect(jestFeatures.queryByAltText(/Sign Up now/i)).toBeInTheDocument();
  });
  it("asserts that the button with data-testid does not render", () => {
    expect(jestFeatures.queryByTestId("label")).toBeNull();
  });

  it("asserts that the logo with alt text is not in the component", () => {
    expect(
      jestFeatures.queryByAltText("Hackton - Organise hackathons")
    ).toBeNull();
  });
});
