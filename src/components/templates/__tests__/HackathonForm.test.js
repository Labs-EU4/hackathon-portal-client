import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import HackathonForm from "../HackathonForm";
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
      categories: [{ id: 2, category_name: "worldwide" }]
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
        <HackathonForm />
      </Provider>
    </Router>
  );
});

describe("Shows all the text nodes on HackathonForm.js that are contained on the making an event form", () => {
  it("should be displaying the label text node for the form ", () => {
    let mainHeader = () => jestFeatures.getByText("Hackathon Title");
    expect(mainHeader()).toBeInTheDocument();
  });
  it("should be displaying the label text node for the start date", () => {
    expect(jestFeatures.getByText("Event Starts")).toBeInTheDocument();
  });
  it("should be displaying the label text node for the end date", () => {
    expect(jestFeatures.getByText("Event Ends")).toBeInTheDocument();
  });
  it("should be displaying the description text node for the event being created", () => {
    expect(jestFeatures.getByText("Description")).toBeInTheDocument();
  });
  it("should be displaying the tags text node for the event being created", () => {
    expect(jestFeatures.getByText("Tags")).toBeInTheDocument();
  });
  it("should be displaying the Participation type text node for the event being created", () => {
    expect(jestFeatures.getByText("Participation Type")).toBeInTheDocument();
  });
  it("should be displaying the option text node for the event being created", () => {
    expect(jestFeatures.getByText("Individual")).toBeInTheDocument();
  });
  it("should be displaying the category text node for the event being created", () => {
    expect(jestFeatures.getByText("Event Category")).toBeInTheDocument();
  });
  it("should be displaying the first category name text node for the event being created", () => {
    expect(jestFeatures.getByText("Summer Hackaton")).toBeInTheDocument();
  });
  it("should be displaying the location text node for the event being created", () => {
    expect(jestFeatures.getByText("Location")).toBeInTheDocument();
  });
  it("should be displaying the rubric's text node for the event being created", () => {
    expect(jestFeatures.getByText("Grading Rubrics")).toBeInTheDocument();
  });
  it("should be displaying the grading rubric's description text node for the event being created", () => {
    expect(
      jestFeatures.getByText(
        /Judges will be expected to grade project submissions on which one of the following/i
      )
    ).toBeInTheDocument();
  });
  it("should be displaying the guidelines text node for the event being created", () => {
    expect(jestFeatures.getByText("Guidelines")).toBeInTheDocument();
  });

  it("renders without crashing ", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});
