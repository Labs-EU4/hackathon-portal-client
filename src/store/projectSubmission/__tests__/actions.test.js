import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as actions from "../actions";
import * as types from "../actions";
import { initialState } from "../../../utils/mockData";

afterEach(cleanup);

describe("Ensures that the action creators functions are working properly", () => {
  it("should create an action to fetchAllSubmissions", () => {
    let eventId = initialState.events.data[0].id;
    const expectedAction = {
      payload: eventId,
      type: types.ProjectSubmissionTypes.FETCH_ALL_SUBMISSIONS
    };

    expect(actions.fetchAllSubmissions(eventId)).toEqual(expectedAction);
  });

  it("should create an action for setSubmissions", () => {
    let submissions = initialState.submissions;

    const expectedAction = {
      payload: submissions,

      type: types.ProjectSubmissionTypes.SET_SUBMISSIONS
    };

    expect(actions.setSubmissions(submissions)).toEqual(expectedAction);
  });

  it("should create an action for gradeSubmission", () => {
    let submissions = initialState.submissions;
    const expectedAction = {
      payload: initialState.events.data[0].id,
      type: types.ProjectSubmissionTypes.DELETE_EVENT
    };
    expect(actions.deleteEvent(initialState.events.data[0].id)).toEqual(
      expectedAction
    );
  });
  //   it("should create an action for fetchEventCategories", () => {
  //     const expectedAction = {
  //       type: types.ProjectSubmissionTypes.FETCH_EVENT_CATEGORIES
  //     };
  //     expect(actions.fetchEventCategories()).toEqual(expectedAction);
  //   });
  //   it("should create an action for setEvents", () => {
  //     let events = initialState.events.data;
  //     const expectedAction = {
  //       payload: events,
  //       type: types.ProjectSubmissionTypes.SET_EVENTS
  //     };
  //     expect(actions.setEvents(events)).toEqual(expectedAction);
  //   });
  //   it("should create an action for setEventCategories", () => {
  //     let categories = initialState.events.categories;
  //     const expectedAction = {
  //       payload: categories,
  //       type: types.ProjectSubmissionTypes.SET_EVENT_CATEGORIES
  //     };
  //     expect(actions.setEventCategories(categories)).toEqual(expectedAction);
  //   });

  //   it("should create an action for fetchEventSubmissions", () => {
  //     let eventId = initialState.events.data[0].id;
  //     let history = "/dashboard/event/1/projects";
  //     const expectedAction = {
  //       payload: eventId,
  //       type: types.ProjectSubmissionTypes.FETCH_EVENT_SUBMISSIONS,
  //       history
  //     };
  //     expect(actions.fetchEventSubmissions(eventId, history)).toEqual(
  //       expectedAction
  //     );
  //   });
});
