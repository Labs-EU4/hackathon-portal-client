import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import HackathonFormPage from "../HackathonFormPage";

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
        <HackathonFormPage />
      </Provider>
    </Router>
  );
});

describe("Component HackathonProjectsPage.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(component).toMatchSnapshot();
  });

  // it("asserts that the Title of the event text node renders properly ", () => {
  //   expect(component.queryByText(/World/i)).toBeInTheDocument();
  // });
  // it("asserts that the <img> logo for the FB icon renders properly ", () => {
  //   expect(component.queryByAltText(/facebook/i)).toBeInTheDocument();
  // });
});
