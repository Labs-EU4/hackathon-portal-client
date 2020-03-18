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
    expect(component.queryByText(/Jake22/i)).toBeInTheDocument();
  });
  it("The text node <h4> for the World hackathon event card, renders properly", () => {
    expect(component.queryByText("I like coding")).toBeInTheDocument();
  });
  it("The text node <p> for the EuroHack hackathon event card description , renders properly", () => {
    expect(
      component.queryByText("Let's make your next hackathon a success!")
    ).toBeInTheDocument();
  });
  it("The text node <p> for the World hackathon event card description , renders properly", () => {
    expect(component.queryByText("8omemail@google.com")).toBeInTheDocument();
  });
  it("The text node <p> for the Eurohack hackathon event card date, renders properly", () => {
    expect(component.queryByText(/Create Event/i)).toBeInTheDocument();
  });
  it("The text node <p> for the World hackathon event card date, renders properly", () => {
    expect(
      component.getByText(/Meet our team of superstars/i)
    ).toBeInTheDocument();
  });
});
