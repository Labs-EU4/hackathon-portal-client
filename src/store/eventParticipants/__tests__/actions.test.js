import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as actions from "../actions";
import * as types from "../actions";
import { initialState } from "../../../utils/mockData";

afterEach(cleanup);

describe("Ensures that the action creators functions are working properly for eventsParticipants ", () => {
  it("should create an action to fetch all participants", () => {
    let eventParticipantsId = initialState.events.data[0].id;
    const expectedAction = {
      payload: eventParticipantsId,
      type: types.EventParticipantTypes.FETCH_ALL_PARTICIPANTS
    };

    expect(actions.fetchAllParticipants(eventParticipantsId)).toEqual(
      expectedAction
    );
  });

  it("should create an action for setEventParticipants", () => {
    let participants = initialState.currentUser;
    const expectedAction = {
      payload: participants,
      type: types.EventParticipantTypes.SET_EVENT_PARTICIPANTS
    };

    expect(actions.setEventParticipants(participants)).toEqual(expectedAction);
  });
  it("should create an action for registerEvent", () => {
    let history = "/dashboard/new";
    let eventId = initialState.events.data[0].id;
    const expectedAction = {
      payload: eventId,
      history: history,
      type: types.EventParticipantTypes.REGISTER_EVENT
    };

    expect(actions.registerEvent(eventId, history)).toEqual(expectedAction);
  });
  it("should create an action for unregisterEvent", () => {
    let history = "/dashboard/events/1/remove";
    let eventId = initialState.events.data[0].id;
    const expectedAction = {
      payload: eventId,
      history: history,
      type: types.EventParticipantTypes.UNREGISTER_EVENT
    };

    expect(actions.unregisterEvent(eventId, history)).toEqual(expectedAction);
  });

  it("should create an action for getUserRegisteredEvent", () => {
    const expectedAction = {
      type: types.EventParticipantTypes.GET_USER_REGISTERED_EVENTS
    };
    expect(actions.getUserRegisteredEvent()).toEqual(expectedAction);
  });
});
