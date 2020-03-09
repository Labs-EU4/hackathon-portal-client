import React from 'react'
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render, cleanup } from "@testing-library/react";
import LoginPage from '../LoginPage';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState } from "../../../utils/mockData";

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
        <LoginPage />
      </Provider>
    </Router>
  );
});

describe("LoginPage.js", () => {
  it("renders the LoginPage component correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("the component renders an a tag to login", () => {
    expect(component.queryByAltText(/Hackton - Organise hackathons/i)).toBeInTheDocument();
  });

  it("the component renders an a tag to login", () => {
    expect(component.queryByText(/Log In/i)).toBeInTheDocument();
  });

  it("the component renders an a tag to signup", () => {
    expect(component.queryByText(/Sign Up/i)).toBeInTheDocument();
  });
});