import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import ResetPassword from "../ResetPassword";
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
        <ResetPassword />
      </Provider>
    </Router>
  );
});

describe("Asserts that text nodes on ResetPassword.js,render properly", () => {
  it("ResetPassword.js component renders properly", () => {
    expect(component).toMatchSnapshot();
  });
  it("The text node for the <H1> Reset the password, renders properly ", () => {
    expect(component.queryByText(/Reset the password/i)).toBeInTheDocument();
  });
  it("The text node for the <paragraph> enter email address, renders properly ", () => {
    expect(
      component.queryByText(
        /Enter your email address so we can reset your password and send a link to your inbox./i
      )
    ).toBeInTheDocument();
  });
  //   it("The text node for the <h3> Participant Teams text node, renders properly", () => {
  //     expect(component.queryByText(/Participant Teams/i)).toBeInTheDocument();
  //   });
  //   it("The text node for the <h4> You are creating a team for text node, renders properly", () => {
  //     expect(
  //       component.queryByText(/You are creating a team for/i)
  //     ).toBeInTheDocument();
  //   });
  //   it("The text node for the team being created for the selected event 'EuroHack' <span>, renders properly", () => {
  //     expect(component.queryByText(/EuroHack/i)).toBeInTheDocument();
  //   });
  //   it("The text node for the Team Name <label> input, renders properly", () => {
  //     expect(component.queryByText(/Team Name/i)).toBeInTheDocument();
  //   });
  //   it("The role for the button used to submit the form to create a team renders properly", () => {
  //     expect(component.getByRole(/button/i)).toBeInTheDocument();
  //   });
  //   it("The text node for the submit button <button>, renders properly", () => {
  //     expect(component.getByText(/submit/i)).toBeInTheDocument();
  //   });
});
