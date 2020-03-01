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
    let submissionGrade = initialState.submissions[0].grade;
    let submissionId = initialState.submissions[0].id;
    let history = "/dashboard/events/2/grade";
    const expectedAction = {
      payload: submissionGrade,
      id: submissionId,
      history: history,
      type: types.ProjectSubmissionTypes.GRADE_SUBMISSION
    };
    expect(
      actions.gradeSubmission(submissionId, submissionGrade, history)
    ).toEqual(expectedAction);
  });
});
