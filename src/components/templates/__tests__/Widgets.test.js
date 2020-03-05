import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import { ParticipantInviteWidget } from "../widgets";

const history = createMemoryHistory();

afterEach(cleanup);

let jestFeatures;
let mockStore;
let store;

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <ParticipantInviteWidget />
      </Provider>
    </Router>
  );
});

describe("Component widgets.js renders the button text correctly", () => {
  it("the h6 tag within the component is rendering properly", () => {
    expect(jestFeatures.queryByText(/This user/i)).toBeInTheDocument();
  });
});
