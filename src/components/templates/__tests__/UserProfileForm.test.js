import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import UserProfileForm from "../UserProfileForm";
import { initialState } from "../../../utils/mockData";

const history = createMemoryHistory();

afterEach(cleanup);

let jestFeatures;
let mockStore;
let store;

beforeEach(() => {
  mockStore = configureStore();
  // let wrapper;
  store = mockStore(initialState);
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <UserProfileForm />
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on HackathonForm.js that are contained on the making an event form", () => {
  it("should be displaying the label text node for the Name", () => {
    expect(jestFeatures.getByText("Full Name")).toBeInTheDocument();
  });
});
