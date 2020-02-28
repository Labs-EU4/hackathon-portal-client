import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from '@testing-library/react'
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import HackathonProjects from "../HackathonProjects";

const history = createMemoryHistory();

let mockStore;
let store;
let component

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);

  const url = '/1'
  component = render(
    <Router history={history}>
      <Route>
        <Provider store={store}>
          <HackathonProjects url={url} />
        </Provider>
      </Route>
    </Router>
  )
});

describe("Component HackathonProjects.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("the h3 title within the component is rendering properly", () => {
    expect(component.queryByText(/Submitted projects/i)).toBeInTheDocument();
  });

  it("the component renders the correct event title", () => {
    expect(component.queryByText(/EuroHack/i)).toBeInTheDocument();
  });

  it("the component doesnt render the wrong conditional - ratings area", () => {
    expect(component.queryByText(/View/i)).not.toBeInTheDocument();
  });

  it("the component doesnt render the wrong conditional - submissions area", () => {
    expect(component.queryByText(/No projects were submitted/i)).not.toBeInTheDocument();
  });
});
