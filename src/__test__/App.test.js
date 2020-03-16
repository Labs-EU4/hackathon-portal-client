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

const history = createMemoryHistory();

let component;
let mockStore;
let store;

beforeEach(() => {
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

  it("The text node <h4> for the EuroHack hackathon card, renders properly", () => {
    expect(component.queryByText(/EuroHack/i)).toBeInTheDocument();
  });
  it("The text node <h4> for the World hackathon event card, renders properly", () => {
    expect(component.queryByText("World")).toBeInTheDocument();
  });
  it("The text node <p> for the EuroHack hackathon event card description , renders properly", () => {
    expect(
      component.queryByText("the best event hack hack hack macbook...")
    ).toBeInTheDocument();
  });
  it("The text node <p> for the World hackathon event card description , renders properly", () => {
    expect(
      component.queryByText("number one hacker event in the world...")
    ).toBeInTheDocument();
  });
  it("The text node <p> for the Eurohack hackathon event card date, renders properly", () => {
    // expect(component.debug())
    expect(component.queryByTestId("date-EuroHack")).toBeInTheDocument();
  });
  it("The text node <p> for the World hackathon event card date, renders properly", () => {
    expect(component.queryByTestId("date-EuroHack")).toBeInTheDocument();
  });
});
