import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import ParticipantSubmissionPage from "../ParticipantSubmissionPage";
import { initialState } from "../../../utils/mockData";

const history = createMemoryHistory();

afterEach(cleanup);

let jestFeatures;
let mockStore;
let store;
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    id: 1
  }),
  useRouteMatch: () => ({ url: "/dashboard/event/1/participant_submission" })
}));
beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <ParticipantSubmissionPage />
      </Provider>
    </Router>
  );
});

describe("Component ParticipantSubmissionPage.js text nodes renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
  it("asserts that the right title text node for the event  renders properly", () => {
    expect(jestFeatures.getByText("EuroHack")).toMatchSnapshot();
  });
});
