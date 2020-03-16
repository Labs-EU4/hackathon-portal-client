import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import HackathonProjectsPage from "../HackathonProjectsPage";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";

const history = createMemoryHistory();

let mockStore;
let store;
let component;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: 2
  }),
  useRouteMatch: () => ({ url: "/dashboard/event/:id" })
}));

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);

  component = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HackathonProjectsPage />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Component HackathonProjectsPage.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(component).toMatchSnapshot();
  });

  it("asserts that the Title of the event text node renders properly ", () => {
    expect(component.queryByText(/World/i)).toBeInTheDocument();
  });
  it("asserts that the <img> logo for the FB icon renders properly ", () => {
    expect(component.queryByAltText(/facebook/i)).toBeInTheDocument();
  });
});
