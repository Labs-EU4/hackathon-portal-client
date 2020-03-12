import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import CreateTeam from "../CreateTeam";
import { initialState } from "../../../utils/mockData";

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
        <CreateTeam />
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on CreateTeam.js that are contained on the making an event form", () => {
  it("CreateTeam.js component renders properly", () => {
    expect(component).toMatchSnapshot();
  });
  it("The text node for the first character of the current user mail, renders properly on the menu", () => {
    expect(component.queryByText(/8/i)).toBeInTheDocument();
  });
  it("The text node for the <h3> Participant Teams text node, renders properly", () => {
    expect(component.queryByText(/Participant Teams/i)).toBeInTheDocument();
  });
  it("The text node for the <h4> You are creating a team for text node, renders properly", () => {
    expect(
      component.queryByText(/You are creating a team for/i)
    ).toBeInTheDocument();
  });
  it("The text node for the team being created for the selected event 'EuroHack' <span>, renders properly", () => {
    expect(component.queryByText(/EuroHack/i)).toBeInTheDocument();
  });
  it("The text node for the Team Name <label> input, renders properly", () => {
    expect(component.queryByText(/Team Name/i)).toBeInTheDocument();
  });
  it("The role for the button used to submit the form to create a team renders properly", () => {
    expect(component.getByRole(/button/i)).toBeInTheDocument();
  });
  // it("The text node for the submit button <button>, renders properly", () => {
  //   expect(component.getByText(/submit/i)).toBeInTheDocument();
  // });
});
