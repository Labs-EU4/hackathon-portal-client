import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { initialState } from "../../../utils/mockData";
import * as actions from "../actions";
import * as types from "../actions";

afterEach(cleanup);

describe("Ensures that the action creators functions are working properly", () => {
  it("should create an action to Login", () => {
    const expectedAction = {
      payload: {
        email: "testing@testing.com",
        password: "testingtesting"
      },
      type: types.UserTypes.LOGIN
    };

    expect(actions.login("testing@testing.com", "testingtesting")).toEqual(
      expectedAction
    );
  });

  it("should create an action to register", () => {
    const expectedAction = {
      payload: {
        email: "testing@testing.com",
        password: "testingtesting",
        role: "judge",
        team: "best"
      },
      type: types.UserTypes.REGISTER
    };

    expect(
      actions.register("testing@testing.com", "testingtesting", "judge", "best")
    ).toEqual(expectedAction);
  });

  it("should create an action for the social auth", () => {
    const expectedAction = {
      type: types.UserTypes.SOCIAL_AUTH
    };

    expect(actions.socialAuthLoad()).toEqual(expectedAction);
  });
});
