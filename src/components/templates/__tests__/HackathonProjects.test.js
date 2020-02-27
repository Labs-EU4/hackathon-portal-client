import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import HackathonProjects from "../HackathonProjects";

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
      <Route
        match={{
          path: `/dashboard/event/:id/projects`,
          url: "/dashboard/event/1/projects",
          isExact: true,
          params: { id: 1 }
        }}
      >
        <Provider store={store}>
          <HackathonProjects />
        </Provider>
      </Route>
    </Router>
  );
});

describe("Component HackathonProjects.js renders properly", () => {
  it("asserts that the component renders properly", () => {
    console.log("THE COMPONENT IS NOT BEING LOGGED", jestFeatures);

    expect(jestFeatures.debug()).toMatchSnapshot();
  });
  //   it("the Image within the component is rendering properly", () => {
  //     expect(
  //       jestFeatures.getByAltText("Hackton - Organise hackathons")
  //     ).toBeInTheDocument();
  //   });
  //   it("the text node Log In is rendering properly", () => {
  //     expect(jestFeatures.queryByText(/Log In/i)).toBeInTheDocument();
  //   });
  //   it("the text node Sign Up is rendering properly", () => {
  //     expect(jestFeatures.queryByText(/Sign Up/i)).toBeInTheDocument();
  //   });
});
