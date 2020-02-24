import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { theme } from './assets/styles/Theme';
import SignupPage from "./components/views/SignupPage";
import LoginPage from "./components/views/LoginPage";
import Dashboard from "./components/views/Dashboard";
import HackathonFormPage from "./components/views/HackathonFormPage";
import HackathonSinglePage from "./components/views/HackathonSinglePage";
import HackathonProjectsPage from "./components/views/HackathonProjectsPage";
import HackathonProjectPage from "./components/views/HackathonProjectPage";
import PrivateRoute from "./components/organisms/PrivateRoute";
import EditHackathon from "./components/templates/EditHackathon";
import AddTeammates from "./components/templates/AddTeammates";
import ParticipantSubmissionPage from "./components/views/ParticipantSubmissionPage";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./components/views/PageNotFound";
import UserProfileFormPage from "./components/views/UserProfileFormPage";
import UserProfilePage from "./components/views/UserProfilePage";
import CreateTeam from "./components/templates/CreateTeam";
import AddParticipantTeam from "./components/templates/AddParticipantTeams";
import ResetPassword from './components/views/resetPassword/ResetPassword';
import ResetPasswordConfirmation from './components/views/resetPassword/ResetPasswordConfirmation';
import NewPassword from './components/views/resetPassword/NewPassword';

function App() {
 const renderRoutesHandler = () => {
   return (
     <>
       
      </>
   );
 };

  return (
    <>
      
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Navigation/> */}
        <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/not-found" component={PageNotFound} />
            <Route path="/register" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            { renderRoutesHandler() }
            <PrivateRoute exact path="/" component={Dashboard} />
            
          <Redirect to="/not-found" />
        </Switch>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
