import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../utils/mockData";
import App from "../App";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/ThemeStyling";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const history = createMemoryHistory();

let component;
let mockStore;
let store;

beforeEach(() => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce(success =>
      Promise.resolve(
        success({
          coords: {
            latitude: 51.1,
            longitude: 45.3
          }
        })
      )
    )
  };
  global.navigator.geolocation = mockGeolocation;
  mockStore = configureStore();
  store = mockStore(initialState);
  component = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on CreateTeam.js that are contained on the making an event form", () => {
  it("App.js component renders properly,with all the Private Routes", () => {
    expect(component).toMatchSnapshot();
  });

  it("The text node for the first character of the current user mail, renders properly on the menu", () => {
    expect(component.queryByText(/8/i)).toBeInTheDocument();
  });

  it("The text node 'Log Out', renders properly", () => {
    expect(component.queryByText(/Log Out/i)).toBeInTheDocument();
  });
  it("The text node for the current user's bio , renders properly", () => {
    expect(component.queryByText("I like coding")).toBeInTheDocument();
  });
  it("The text node Global Hackathons , renders properly", () => {
    expect(component.queryByText("Global Hackathons")).toBeInTheDocument();
  });
  it("The text node for the current user's email , renders properly", () => {
    expect(component.queryByText("8omemail@google.com")).toBeInTheDocument();
  });
  it("The text node <p> for the 'Create event' event card date, renders properly", () => {
    expect(component.queryByText(/Create Event/i)).toBeInTheDocument();
  });
  it("The hackathons should not be available yet", () => {
    expect(
      component.getByText(/There are no hackathons yet available/i)
    ).toBeInTheDocument();
  });
});
