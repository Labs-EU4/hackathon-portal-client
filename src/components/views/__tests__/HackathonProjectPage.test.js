import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import HackathonProjectPage from "../HackathonProjectPage";
import { initialState } from "../../../utils/mockData";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

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
  useRouteMatch: () => ({ url: "/dashboard/event/:1" })
}));
beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HackathonProjectPage id={1} projectId={1} setIsProjectPageOpen />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Asserts that the text nodes on HackathonProjectPage.js render properly ", () => {
  it("asserts the title of the event text node renders properly", () => {
    expect(jestFeatures.getByText(/EuroHack/i)).toBeInTheDocument();
  });
  it("asserts the <h3> text node for a project submission renders properly", () => {
    expect(
      jestFeatures.getByText(/Submitted project for/i)
    ).toBeInTheDocument();
  });

  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
