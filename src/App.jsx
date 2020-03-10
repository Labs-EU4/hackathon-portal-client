import React, { useState, useRef } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./assets/styles/GlobalStylesStyling";
import { theme } from "./assets/styles/ThemeStyling";

import UserHeader from "./components/organisms/UserHeader";
import { Footer } from "./components/organisms/index";
import Nav from "./components/molecules/Nav";
import SignupPage from "./components/views/SignupPage";
import LoginPage from "./components/views/LoginPage";
import Dashboard from "./components/views/Dashboard";
import HackathonFormPage from "./components/views/HackathonFormPage";
import HackathonSinglePage from "./components/views/HackathonSinglePage";
import PrivateRoute from "./components/organisms/PrivateRoute";
import EditHackathon from "./components/templates/EditHackathon";
import AddTeammates from "./components/templates/AddTeammates";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./components/views/AboutPage";
import PageNotFound from "./components/views/PageNotFound";
import UserProfileFormPage from "./components/views/UserProfileFormPage";
import CreateTeam from "./components/templates/CreateTeam";
import AddParticipantTeam from "./components/templates/AddParticipantTeams";
import ResetPassword from "./components/views/resetPassword/ResetPassword";
import ResetPasswordConfirmation from "./components/views/resetPassword/ResetPasswordConfirmation";
import NewPassword from "./components/views/resetPassword/NewPassword";
import HomePage from "./components/views/HomePage";
import HackathonProjectsPage from "./components/views/HackathonProjectsPage";
import HackathonProjectPage from "./components/views/HackathonProjectPage";
import ParticipantSubmissionPage from "./components/views/ParticipantSubmissionPage";
import ResultPage from "./components/views/ResultsPage";


function App() {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const { token } = useSelector(state => state.currentUser);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const renderPrivateRoutes = () => {
    return (
      <>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute exact path="/event/new" component={HackathonFormPage} />
        <PrivateRoute
          exact
          path="/event/:id/participant_submission"
          component={ParticipantSubmissionPage}
        />
        <PrivateRoute
          path={`/${currentPath}/event/:id`}
          component={HackathonSinglePage}
        />
        <PrivateRoute exact path="/event/:id/edit" component={EditHackathon} />
        <PrivateRoute
          exact
          path="dashboard/event/:id/team"
          component={AddTeammates}
        />
        <PrivateRoute
          exact
          path={`/${currentPath}/event/:id/projects`}
          component={HackathonProjectsPage}
        />
        {/* <PrivateRoute
          exact
          path={`/${currentPath}/event/:id/project/:projectId`}
          component={HackathonProjectPage}
        /> */}
        <PrivateRoute
          exact
          path={`/${currentPath}/event/:eventId/participant-teams/:teamId`}
          component={AddParticipantTeam}
        />
        <PrivateRoute
          exact
          path={`/${currentPath}/event/:id/participant-teams`}
          component={CreateTeam}
        />

        <PrivateRoute exact path={`/results`} component={ResultPage} />
      </>
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppContainer active={isSideBarOpen}>
          <UserHeader />
          <RoutesContainer>
            <Switch>
              <Route path="/about" component={AboutPage} />
              <Route path="/not-found" component={PageNotFound} />
              <Route path="/register" component={SignupPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/forgotpassword" component={ResetPassword} />
              <Route
                path="/resetPasswordConfirmation"
                component={ResetPasswordConfirmation}
              />
              <Route path="/resetpassword" component={NewPassword} />
              {renderPrivateRoutes()}
              <Redirect to="/not-found" />
            </Switch>
            {token ? (
              <UserProfileFormPage
                {...{ isProfileOpen }}
                {...{ setIsProfileOpen }}
              />
            ) : null}
          </RoutesContainer>
          <Footer />
          <Nav
            {...{ isProfileOpen }}
            {...{ setIsProfileOpen }}
            {...{ isSideBarOpen }}
            {...{ setIsSideBarOpen }}
          />
        </AppContainer>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;

const AppContainer = styled.main`
  display: grid;
  grid-template-columns: ${({ active }) =>
    active ? "20px auto auto 60px" : "20px auto auto 250px"};
  grid-template-rows: 60px auto auto 25px;
  grid-template-areas:
    " header header header aside"
    "  gap    main   main  aside"
    "  gap    main   main  aside"
    " footer footer footer aside";
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const RoutesContainer = styled.div`
  ${props => props.theme.shadow.box};
  position: relative;
  grid-area: main;
  background-color: ${props => props.theme.color.white.bg};
  border-radius: 5px;
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0;
  }
`;
