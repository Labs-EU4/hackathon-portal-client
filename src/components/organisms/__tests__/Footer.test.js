import React from 'react';
import { Router } from "react-router";
import Footer from '../Footer';
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
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
        <Footer />
      </Provider>
    </Router>
  );
});

describe("It should render <Footer/> template correctly", () => {

  it("renders the Footer template correctly", () => {
    expect(component).toMatchSnapshot();
    expect(component.debug())
  });

  it("renders a linkedIn icon", () => {
    expect(component.queryByAltText(/LinkedIn/i)).toBeInTheDocument();
  });

  it("renders a Twitter icon", () => {
    expect(component.queryByAltText(/Twitter/i)).toBeInTheDocument();
  });

  it("renders a Facebook icon", () => {
    expect(component.queryByAltText(/Facebook/i)).toBeInTheDocument();
  });

  it("renders a Facebook icon", () => {
    expect(component.queryByText(/Privacy/i)).toBeInTheDocument();
  });
});