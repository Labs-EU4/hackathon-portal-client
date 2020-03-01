import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as actions from "../actions";
import * as types from "../actions";
import { initialState } from "../../../utils/mockData";

afterEach(cleanup);

describe("Ensures that the action creators functions are working properly", () => {
  it("should create an action to fetch all events", () => {
    const expectedAction = {
      type: types.EventsTypes.FETCH_ALL_EVENTS
    };

    expect(actions.fetchAllEvents()).toEqual(expectedAction);
  });
  it("should create an action to fetch all events", () => {
    const expectedAction = {
      type: types.EventsTypes.FETCH_ALL_EVENTS
    };

    expect(actions.fetchAllEvents()).toEqual(expectedAction);
  });
  it("should create an action for createEvent", () => {
    const expectedAction = {
      payload: initialState.events.data[1],
      history: "/dashboard/new",
      type: types.EventsTypes.CREATE_EVENT
    };

    expect(
      actions.createEvent(initialState.events.data[1], "/dashboard/new")
    ).toEqual(expectedAction);
  });
  it("should create an action for updateEvent", () => {
    const expectedAction = {
      payload: initialState.events.data[0],
      history: "/dashboard/event/1/edit",
      type: types.EventsTypes.UPDATE_EVENT
    };

    expect(
      actions.updateEvent(
        initialState.events.data[0],
        "/dashboard/event/1/edit"
      )
    ).toEqual(expectedAction);
  });
  it("should create an action for deleteEvent", () => {
    const expectedAction = {
      payload: initialState.events.data[0].id,
      type: types.EventsTypes.DELETE_EVENT
    };
    expect(actions.deleteEvent(initialState.events.data[0].id)).toEqual(
      expectedAction
    );
  });
  it("should create an action for fetchEventCategories", () => {
    const expectedAction = {
      type: types.EventsTypes.FETCH_EVENT_CATEGORIES
    };
    expect(actions.fetchEventCategories()).toEqual(expectedAction);
  });
});
