import React from "react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import HackathonForm from "../HackathonForm";
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

beforeEach(() => {
  mockStore = configureStore();
  store = mockStore(initialState);
  const event = initialState.events.data[0];
  jestFeatures = render(
    <Router history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HackathonForm event={event} />
        </ThemeProvider>
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
  it("should be displaying the location text node for the event being created", () => {
    expect(jestFeatures.getByText("Location")).toBeInTheDocument();
  });
  it("should be displaying the category name text node for the event being created", () => {
    expect(jestFeatures.getByText("Summer Hackton")).toBeInTheDocument();
  });
  it("should be displaying the fifth category name text node for the event being created", () => {
    expect(jestFeatures.getByText("Advanced Hackton")).toBeInTheDocument();
  });

  it("should be displaying the 'Create New Hackathon' text node for the event being created", () => {
    expect(jestFeatures.getByText(/Create New Hackathon/i)).toBeInTheDocument();
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

  it("should be displaying 'Judges will be expected' text node for the event being created", () => {
    expect(
      jestFeatures.getByText(/Judges will be expected/i)
    ).toBeInTheDocument();
  });

  it("should be displaying the paragraph project requirements text node for the event being created", () => {
    expect(
      jestFeatures.getByText(
        /Participants will be expected to submit which one of the following/i
      )
    ).toBeInTheDocument();
  });
  it("should be displaying 'Event Starts' text node for the event being created", () => {
    expect(jestFeatures.getByText(/Event Starts/i)).toBeInTheDocument();
  });

  it("renders without crashing ", () => {
    expect(jestFeatures).toMatchSnapshot();
  });
});

describe("Shows that all the rubrics checkbox values are being displayed properly", () => {
  it("should be displaying the first rubric value checkbox for the event being created", () => {
    expect(jestFeatures.getByDisplayValue("presentation")).toBeInTheDocument();
  });
  it("should be displaying the second rubric value checkbox for the event being created", () => {
    expect(jestFeatures.getByDisplayValue("innovation")).toBeInTheDocument();
  });
  it("should be displaying the third rubric value checkbox for the event being created", () => {
    expect(jestFeatures.getByDisplayValue("product_fit")).toBeInTheDocument();
  });
  it("should be displaying the fourth rubric value checkbox for the event being created", () => {
    expect(
      jestFeatures.getByDisplayValue("product_design")
    ).toBeInTheDocument();
  });
  it("should be displaying the fifth rubric value checkbox for the event being created", () => {
    expect(jestFeatures.getByDisplayValue("functionality")).toBeInTheDocument();
  });
  it("should be displaying the sixth rubric value checkbox for the event being created", () => {
    expect(jestFeatures.getByDisplayValue("extensibility")).toBeInTheDocument();
  });
  it("should be displaying the video rubric value checkbox for the event being created", () => {
    expect(jestFeatures.getByDisplayValue("video_url")).toBeInTheDocument();
  });
  it("should be displaying the github rubric value checkbox for the event being created", () => {
    expect(jestFeatures.getByDisplayValue("github_url")).toBeInTheDocument();
  });
});

describe("Checks for the button on the UI", () => {
  it("should be displaying submit button", () => {
    const submit = jestFeatures.queryAllByText(/Submit/i)[0];
    expect(submit).toBeDefined();
  });
});
