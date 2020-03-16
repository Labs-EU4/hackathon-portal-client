import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import ParticipantSubmission from "../ParticipantSubmission";
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
  useRouteMatch: () => ({ url: "/dashboard/event/:id/participant_submission" })
}));

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);
  component = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ParticipantSubmission />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on ParticipantSubmission.js that are contained on the making an event form", () => {
  it("the h3 title within the component is rendering properly", () => {
    expect(component.queryByText(/Submit Project/i)).toBeInTheDocument();
  });
});
