import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import UserProfileFormPage from "../UserProfileFormPage";

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
        <UserProfileFormPage />
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
  it("asserts that the <p> Username text node renders properly on the form component", () => {
    expect(component.getByText("Jake22")).toBeInTheDocument();
  });
  it("asserts that the <textarea> placeholder for current User bio text node renders properly on the form component", () => {
    expect(component.queryByPlaceholderText("bio")).toBeInTheDocument();
  });
});
