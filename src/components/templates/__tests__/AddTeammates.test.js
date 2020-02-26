import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import AddTeammates from "../AddTeammates";
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
      ],
      categories: [
        { id: 2, category_name: "Summer Hackton" },
        { id: 3, category_name: "World Hackton" },
        { id: 3, category_name: "Asia Hackton" },
        { id: 3, category_name: "Gamer's Hackton" },
        { id: 3, category_name: "Advanced Hackton" }
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
        <AddTeammates />
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on AddTeammates.js that are contained on the making an event form", () => {
  it("should be displaying the <H3>", () => {
    let mainHeader = () => jestFeatures.getByText("Add Teammates");
    expect(mainHeader()).toBeInTheDocument();
  });
  it("asserts the text node under the search bar is rendering", () => {
    expect(jestFeatures.getByText("Back to dashboard")).toBeInTheDocument();
  });
  it("asserts that the component renders properly", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
