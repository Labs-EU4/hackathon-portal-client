import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import EditHackathon from "../EditHackathon";
import { initialState } from "../../../utils/mockData";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";

const history = createMemoryHistory();

let component;
let mockStore;
let store;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: 1
  }),
  useRouteMatch: () => ({ url: "/dashboard/event/1/edit" })
}));

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);
  component = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <EditHackathon />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on CreateTeam.js that are contained on the making an event form", () => {
  it("CreateTeam.js component renders properly", () => {
    expect(component).toMatchSnapshot();
  });
  it("The text node for <h3> the Edit Hackathon  for the selected Event, renders properly on the menu", () => {
    expect(component.queryByText(/Edit Hackathon/i)).toBeInTheDocument();
  });
  it("The value for the event title of the Hackathon being edited, renders properly", () => {
    expect(component.queryByDisplayValue(/EuroHack/i)).toBeInTheDocument();
  });
  it("The text node for the <a> Cancel button to go back to the dashboard, renders properly", () => {
    expect(component.queryByText(/Cancel/i)).toBeInTheDocument();
  });
  it("The text node for the <button> Submit , renders properly", () => {
    expect(component.queryByText("Submit")).toBeInTheDocument();
  });
});
