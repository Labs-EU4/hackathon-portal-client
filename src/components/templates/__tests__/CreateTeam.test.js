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
  //   it("the h3 title within the component is rendering properly", () => {
  //     expect(component.queryByText(/Submit Project/i)).toBeInTheDocument();
  //   });
});
