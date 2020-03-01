import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as actions from "../actions";
import * as types from "../actions";
import events from "../../../utils/mockData";

afterEach(cleanup);

describe("Ensures that the action creators functions are working properly", () => {
  it("should create an action to fetch all events", () => {
    const expectedAction = {
      type: types.EventsTypes.FETCH_ALL_EVENTS
    };

    expect(actions.fetchAllEvents()).toEqual(expectedAction);
  });
});
