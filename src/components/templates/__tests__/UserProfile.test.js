import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import UserProfile from "../UserProfile";
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
        <UserProfile initialState={initialState} />
      </Provider>
    </Router>
  );
});

describe("Component UserProfile.js text nodes renders properly", () => {
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
  it("asserts that the text node on <H3> renders properly", () => {
    expect(jestFeatures.getByText("Your Profile")).toBeInTheDocument();
  });
  it("asserts that the text node on <Button> renders properly", () => {
    expect(jestFeatures.getByText("Edit profile")).toBeInTheDocument();
  });
  it("asserts that the text node on <H3> child of <HackathonCard> renders properly", () => {
    expect(
      jestFeatures.getByText("Hackathon(s) you registered for")
    ).toBeInTheDocument();
  });
});
