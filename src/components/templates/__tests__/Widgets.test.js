import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import { ParticipantInviteWidget, TeamRoleWidget } from "../widgets";
import { theme } from "../../../assets/styles/ThemeStyling";
import { ThemeProvider } from "styled-components";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

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
        <ThemeProvider theme={theme}>
          <ParticipantInviteWidget />
          <TeamRoleWidget />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Component participantinvitewidget renders the text correctly", () => {
  it("the h6 tag within the component is rendering properly", () => {
    expect(jestFeatures.queryByText(/This user/i)).toBeInTheDocument();
  });
  it("renders without crashing ", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});

describe("Component TeamRoleWidget renders the text correctly", () => {
  it("the button within the component is rendering properly", () => {
    expect(jestFeatures.queryByText(/Back/i)).toBeInTheDocument();
  });
});
