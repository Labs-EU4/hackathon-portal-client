import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import EventOnboarding from "../EventOnboarding";

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
        <ThemeProvider theme={theme} >
          <EventOnboarding />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on EventOnboarding.js", () => {
  it("Should display the Global Hackathons", () => {
    expect(jestFeatures.getByText(/Global Hackathons/i)).not.toBeDisabled();
  });
  it("should be displaying the string 'There are no hackathons yet available' in text node", () => {
    let form = () => jestFeatures.getByText(/There are no hackathons yet available/i);

    expect(form()).toBeInTheDocument();
  });

  it("should be displaying the string 'There are no hackathons yet available' text node", () => {
    expect(jestFeatures.getByText(/There are no hackathons yet available/i)).toBeInTheDocument();
  });

  it("displays a part of the description from an already created event", () => {
    expect(jestFeatures.getByText(/macbook/)).toBeInTheDocument();
  });
  it("should not be displaying the 'you have not created events phrase,since two events are already listed' ", () => {
    let sentence = () =>
      jestFeatures.queryByText(/You have not created any events yet/);

    expect(sentence()).toBeNull();
  });
  it("renders without crashing ", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
