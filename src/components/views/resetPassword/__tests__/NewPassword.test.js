import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import NewPassword from "../NewPassword";
import { initialState } from "../../../../utils/mockData";

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
        <NewPassword />
      </Provider>
    </Router>
  );
});

describe("Asserts that text nodes on NewPassword.js,render properly", () => {
  it("ResetPassword.js component renders properly", () => {
    expect(component).toMatchSnapshot();
  });
  it("The text node for the <H1> Change the password, renders properly ", () => {
    expect(component.queryByText(/Change the password/i)).toBeInTheDocument();
  });
  //   it("The text node for the  email confirmation, renders properly ", () => {
  //     expect(
  //       component.queryByText(
  //         "Please check your email inbox for directions on how to reset your password."
  //       )
  //     ).toBeInTheDocument();
  //   });
});
