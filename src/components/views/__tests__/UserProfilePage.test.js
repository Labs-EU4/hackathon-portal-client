import React from "react";
import { Router, Route } from "react-router";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import UserProfilePage from "../UserProfilePage";
const history = createMemoryHistory();
import { theme } from "../../../assets/styles/ThemeStyling";

const renderWithRouter = Component =>
  render(
    <Router history={history}>
      <Route component={Component} theme={theme} />
    </Router>
  );

describe("It should render UserProfilePage page correctly", () => {
  it("renders the UserProfilePage component correctly", () => {
    const render = () => renderWithRouter(UserProfilePage);
    expect(render).toMatchSnapshot();
  });
});
