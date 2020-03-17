import React from 'react'
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react'
import UserOnboarding from '../UserOnboarding';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);


const history = createMemoryHistory()

const renderWithRouter = Component =>
  render(
    <Router history={history}>
      <Route component={Component} />
    </Router>
  );

describe("It should render <UserOnboarding/> template correctly", () => {

  it("renders the User onboarding template correctly", () => {
    const template = () => renderWithRouter(UserOnboarding)
    expect(template).toMatchSnapshot();
  });
});
