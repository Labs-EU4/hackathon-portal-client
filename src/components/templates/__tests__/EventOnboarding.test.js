import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import EventOnboarding from "../EventOnboarding";

const history = createMemoryHistory();

afterEach(cleanup);

let jestFeatures;
let mockStore;
let store;

beforeEach(() => {
  const initialState = {
    events: {
      data: [
        {
          id: 1,
          event_title: "EuroHack",
          event_description: "the best event hack hack hack macbook",
          creator_id: 1,
          start_date: "10/09/11",
          end_date: "08/07/13",
          location: "Europe",
          guidelines: "cool hekhkdsjfhsdkjf skdjfhskdjfhkjsdfh skjdfhksjdfh",
          participation_type: "Team",
          category_id: 1
        },
        {
          id: 2,
          event_title: "World",
          event_description: "number one hacker event in the world",
          creator_id: 1,
          start_date: "07/09/11",
          end_date: "08/07/13",
          location: "Asia",
          guidelines: "come well prepared,no cheating,no fighting",
          participation_type: "Team",
          category_id: 2
        }
      ]
    },

    currentUser: {
      token: 347534574536,
      userId: 1,
      fullname: "Jake Tom",
      email: "somemail@google.com",
      username: "Jake22",
      bio: "",
      image: "",
      image_url: {}
    }
  };
  mockStore = configureStore();
  // let wrapper;
  store = mockStore(initialState);
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <EventOnboarding />
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on EventOnboarding.js", () => {
  it("Should display the h3 title", () => {
    expect(jestFeatures.getByText("My hackathons")).not.toBeDisabled();
  });
  it("should be displaying the button text node,to create a new event ", () => {
    let form = () => jestFeatures.getByText("Create New");

    expect(form()).toBeInTheDocument();
  });

  it("displays the h3 element ", () => {
    expect(jestFeatures.getByText("Global hackathons")).toBeInTheDocument();
  });

  it("displays a part of the description from an already created event", () => {
    expect(jestFeatures.getByText(/macbook/)).toBeInTheDocument();
  });
  it("should not be displaying the 'you have not created events phrase,since two events are already listed' ", () => {
    let sentence = () =>
      jestFeatures.queryByText(/You have not created any events yet/);

    expect(sentence()).toBeNull();
  });
  it("renders without crashing ", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
