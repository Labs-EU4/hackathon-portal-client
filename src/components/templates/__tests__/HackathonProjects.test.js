import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import HackathonProjects from "../HackathonProjects";

const history = createMemoryHistory();

let mockStore;
let store;
let component;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: 1
  }),
  useRouteMatch: () => ({ url: "/dashboard/event/:id" })
}));

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);

  component = render(
    <Router history={history}>
      <Provider store={store}>
        <HackathonProjects />
      </Provider>
    </Router>
  );
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

  it("the component render the right conditional - ratings area", () => {
    expect(component.queryByText(/View/i)).not.toBeInTheDocument();
  });

  it("the component render the right conditional - submissions area", () => {
    expect(
      component.queryByText(/No projects were submitted/i)
    ).not.toBeInTheDocument();
  });
});
