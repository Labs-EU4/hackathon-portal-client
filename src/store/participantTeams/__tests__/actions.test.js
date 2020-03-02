import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as actions from "../actions";
import * as types from "../actions";
import { initialState } from "../../../utils/mockData";

afterEach(cleanup);

describe("Ensures that the action creators functions are working properly", () => {
  it("should create an action to setTeams", () => {
    let teams = initialState.teams;
    const expectedAction = {
      payload: teams,
      type: types.ParticiPantTeamTypes.SET_TEAMS
    };

    expect(actions.setTeams(teams)).toEqual(expectedAction);
  });

    it("should create an action for setTeamMates", () => {
      let submissions = initialState.submissions;

      const expectedAction = {
        payload: submissions,

        type: types.ParticiPantTeamTypes.SET_SUBMISSIONS
      };

      expect(actions.setSubmissions(submissions)).toEqual(expectedAction);
    });

  //   it("should create an action for gradeSubmission", () => {
  //     let submissionGrade = initialState.submissions[0].grade;
  //     let submissionId = initialState.submissions[0].id;
  //     let history = "/dashboard/events/2/grade";
  //     const expectedAction = {
  //       payload: submissionGrade,
  //       id: submissionId,
  //       history: history,
  //       type: types.ParticiPantTeamTypes.GRADE_SUBMISSION
  //     };
  //     expect(
  //       actions.gradeSubmission(submissionId, submissionGrade, history)
  //     ).toEqual(expectedAction);
  //   });
  //   it("should create an action for submitProject", () => {
  //     let projectData = initialState.submissions[0];
  //     let history = "dashboard/event/1/participant_submission";
  //     const expectedAction = {
  //       payload: projectData,
  //       history,
  //       type: types.ParticiPantTeamTypes.SUBMIT_PROJECT
  //     };
  //     expect(actions.submitProject(projectData, history)).toEqual(expectedAction);
  //   });
});
