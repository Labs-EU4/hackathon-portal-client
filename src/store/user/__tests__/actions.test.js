import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
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

  it("should create an action for setUser, using JWT", () => {
    const expectedAction = {
      payload: {
        email: "testing@testing.com",
        userId: "test88",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RpbmdAdGVzdGluZy5jb20iLCJ1c2VySWQiOiJ0ZXN0ODgiLCJqdGkiOiI5ODliNjU0MC0zYzYzLTRmYmEtYmQzZi03ZTE4YjllNzk1NWMiLCJpYXQiOjE1ODMwMDU3OTAsImV4cCI6MTU4MzAwOTM5MH0.yA1Q5W_-JJOvOJ_o4A9Jx2HyRyIcO1RVc-0aVWH9t50"
      },
      type: types.UserTypes.SET_USER
    };

    expect(
      actions.setUser(
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RpbmdAdGVzdGluZy5jb20iLCJ1c2VySWQiOiJ0ZXN0ODgiLCJqdGkiOiI5ODliNjU0MC0zYzYzLTRmYmEtYmQzZi03ZTE4YjllNzk1NWMiLCJpYXQiOjE1ODMwMDU3OTAsImV4cCI6MTU4MzAwOTM5MH0.yA1Q5W_-JJOvOJ_o4A9Jx2HyRyIcO1RVc-0aVWH9t50"
      )
    ).toEqual(expectedAction);
  });

  it("should create an action for setUserProfile", () => {
    const expectedAction = {
      payload: "high level coder",
      type: types.UserTypes.SET_USER_PROFILE
    };

    expect(actions.setUserProfile("high level coder")).toEqual(expectedAction);
  });
  it("should create an action for resetUser", () => {
    const expectedAction = {
      type: types.UserTypes.PURGE,
      history: "/api/homepage"
    };

    expect(actions.resetUser("/api/homepage")).toEqual(expectedAction);
  });
  it("should create an action for fetchUserProfile", () => {
    const expectedAction = {
      type: types.UserTypes.FETCH_USER_PROFILE,
      payload: "jake22"
    };

    expect(actions.fetchUserProfile("jake22")).toEqual(expectedAction);
  });
  it("should create an action for updateUserProfile", () => {
    let history = "/api/dashboard";

    const expectedAction = {
      type: types.UserTypes.UPDATE_USER_PROFILE,
      payload: "new details",
      history
    };

    expect(actions.updateUserProfile("new details", "/api/dashboard")).toEqual(
      expectedAction
    );
  });
  it("should create an action for resetPassword", () => {
    let history = "/api/dashboard";

    const expectedAction = {
      type: types.UserTypes.RESET_PASSWORD,
      payload: "safePass",
      history
    };

    expect(actions.resetPassword("safePass", "/api/dashboard")).toEqual(
      expectedAction
    );
  });
  it("should create an action for forgotPassword", () => {
    let history = "/api/dashboard";

    const expectedAction = {
      type: types.UserTypes.FORGOT_PASSWORD,
      payload: "jake22@gmail.com",
      history
    };

    expect(
      actions.forgotPassword("jake22@gmail.com", "/api/dashboard")
    ).toEqual(expectedAction);
  });
  it("should create an action for verifyEmail", () => {
    const expectedAction = {
      type: types.UserTypes.VERIFY_EMAIL
    };

    expect(actions.verifyEmail()).toEqual(expectedAction);
  });
});
