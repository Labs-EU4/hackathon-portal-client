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
  it("should create an action for addParticipantTeamMember", () => {
    let data = initialState.participant_team_members[1];
    let history = "dashboard/event/1/participant-teams/2";
    const expectedAction = {
      payload: data,
      history,
      type: types.ParticiPantTeamTypes.ADD_PARTICIPANT_TEAM_MEMBER
    };
    expect(actions.addParticipantTeamMember(data, history)).toEqual(
      expectedAction
    );
  });
  it("should create an action for createTeamName", () => {
    let data = initialState.teams[1].team_name;
    let history = "dashboard/event/2/participant-teams/";
    const expectedAction = {
      payload: data,
      history,
      type: types.ParticiPantTeamTypes.CREATE_TEAM_NAME
    };
    expect(actions.createTeamName(data, history)).toEqual(expectedAction);
  });
  it("should create an action for sendParticipantInvite", () => {
    let data = initialState.teams[1].participant_team_members;
    let history = "/dashboard/event/7/participant-teams/8";
    const expectedAction = {
      payload: data,
      history,
      type: types.ParticiPantTeamTypes.SEND_PARTICIPANT_INVITE
    };
    expect(actions.sendParticipantInvite(data, history)).toEqual(
      expectedAction
    );
  });
});
