import React, { useState, useRef } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { theme } from './assets/styles/Theme';
import { media } from './assets/styles/variables/media';

import UserHeader from './components/organisms/UserHeader';
import { Footer } from './components/organisms/index';
import Nav from './components/molecules/Nav';
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
import ResetPassword from './components/views/resetPassword/ResetPassword';
import ResetPasswordConfirmation from './components/views/resetPassword/ResetPasswordConfirmation';
import NewPassword from './components/views/resetPassword/NewPassword';
import HomePage from './components/views/HomePage';

function App() {
  const { token } = useSelector(state => state.currentUser);
  const [ isProfileOpen, setIsProfileOpen ] = useState(false);
  const [ isEventModalOpen, setIsEventModalOpen ] = useState(false);
  const [ isSideBarOpen, setIsSideBarOpen ] = useState(false);
  const [ eventId, setEventId ] = useState(null);

  const eventModalHandler = (id) => {
    setEventId(id);
    setIsEventModalOpen(true);
  }

  const renderPrivateRoutes = () => {
   return (
     <>
        {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
        <PrivateRoute 
          exact 
          path="/dashboard" 
          render={() => <Dashboard {...{eventModalHandler}} />}  
        />
        <PrivateRoute
          path="/dashboard/new"
          render={() => <HackathonFormPage />}
        />
        <PrivateRoute
          exact
          path="/dashboard/event/:id/edit"
          component={EditHackathon}
        />
        {/* This last one make it into a none route component */}
        <PrivateRoute
          exact
          path="/dashboard/event/:id/organizers"
          component={AddTeammates}
        />
        <PrivateRoute
          path="/dashboard/event/:eventId/participant-teams/:teamId"
          component={AddParticipantTeam}
        />
        <PrivateRoute
          exact
          path="/dashboard/event/:id/participant-teams"
          component={CreateTeam}
        />
        {/* <PrivateRoute
          path="/dashboard/registered"
          render={() => <Dashboard {...{eventModalHandler}} />}
        /> */}
        {/* <PrivateRoute
          exact
          path="/dashboard/event/:id/participant_submission"
          component={ParticipantSubmissionPage}
        /> */}
        {/* <PrivateRoute
          exact
          path="/dashboard/event/:id/judges"
          component={AddTeammates}
        /> */}
        {/* 
        CHANGED TO SEPARATE ROUTES FOR JUDGES & ORGANIZERS
        <PrivateRoute
          exact
          path="/dashboard/event/:id/team"
          component={AddTeammates}
        /> */}
        {/* <PrivateRoute
          exact
          path="/dashboard/profile"
          component={UserProfilePage}
        /> */}
        {/* <PrivateRoute
          path="/dashboard/event/:id/projects"
          component={HackathonProjectsPage}
        /> */}
        {/* <PrivateRoute
          exact
          path="/dashboard/event/:id/project/:projectId"
          component={HackathonProjectPage}
        /> */}
      </>
   );
 };

  return (
    <>  
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppContainer>
          <MainContent active={isSideBarOpen}>
            <UserHeader />
            <RoutesContainer>
              <Switch>
                <Route  
                  exact
                  path="/" 
                  render={() => <HomePage {...{eventModalHandler}} />} 
                />
                <Route path="/about" component={AboutPage} />
                <Route path="/not-found" component={PageNotFound} />
                <Route path="/register" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/forgotpassword" component={ResetPassword} />
                <Route path="/resetPasswordConfirmation" component={ResetPasswordConfirmation} />
                <Route path="/resetpassword" component={NewPassword} />
                { renderPrivateRoutes() }
                <Redirect to="/not-found" />
              </Switch>
              {
                token && !isEventModalOpen && (
                  <UserProfileFormPage 
                    {...{isProfileOpen}}
                    {...{setIsProfileOpen}}
                  />
                )
              }
            </RoutesContainer>
            <Footer />
          </MainContent>
          {
            token && (
              <HackathonSinglePage
                {...{eventId}}
                {...{setEventId}}
                {...{isEventModalOpen}}
                {...{setIsEventModalOpen}}
                {...{isSideBarOpen}}
              />
            )
          }
          <Nav 
            {...{isProfileOpen}}
            {...{setIsProfileOpen}} 
            {...{isSideBarOpen}}
            {...{setIsSideBarOpen}}
          />
        </AppContainer>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;

const AppContainer = styled.main`
  display: flex;
  width: 100vw; height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.div`
  ${props => props.theme.flex.column};
  width: ${({ active }) => active ? 'calc(100vw - 60px)' : 'calc(100vw - 250px)'};

  @media ${media.tablet} {
    width: calc(100vw - 60px);
  }
`;

const RoutesContainer = styled.div`
  ${props => props.theme.shadow.box};
  position: relative;
  width: calc(100% - 20px); height: 100%;
  background-color: ${props => props.theme.color.white.bg};
  margin-left: 20px; 
  border-radius: 5px;
  overflow: hidden;

  &::-webkit-scrollbar {
    width: 0px; height: 0;
  }
`;