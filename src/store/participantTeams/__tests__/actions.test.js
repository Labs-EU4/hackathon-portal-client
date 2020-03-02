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
    let teamMates = initialState.participant_team_members[1];

    const expectedAction = {
      payload: teamMates,

      type: types.ParticiPantTeamTypes.SET_TEAMMATES
    };

    expect(actions.setTeamMates(teamMates)).toEqual(expectedAction);
  });

  it("should create an action for fetchTeamMates", () => {
    let data = initialState.participant_team_members;

    const expectedAction = {
      payload: data,
      type: types.ParticiPantTeamTypes.FETCH_TEAMMATES
    };
    expect(actions.fetchTeamMates(data)).toEqual(expectedAction);
  });
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
