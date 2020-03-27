import React, { useState } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { theme } from "./assets/styles/ThemeStyling";

import { AppContainer, RoutesContainer } from "./assets/AppStyles";
import UserHeader from "./components/organisms/UserHeader";
import { Footer } from "./components/organisms/index";
import Nav from "./components/organisms/Nav";
import SignupPage from "./components/views/SignupPage";
import LoginPage from "./components/views/LoginPage";
import Dashboard from "./components/views/Dashboard";
import HackathonFormPage from "./components/views/HackathonFormPage";
import HackathonSinglePage from "./components/views/HackathonSinglePage";
import PrivateRoute from "./components/organisms/PrivateRoute";
import EditHackathon from "./components/templates/EditHackathon";
import AboutPage from "./components/views/AboutPage";
import PageNotFound from "./components/views/PageNotFound";
import UserProfileFormPage from "./components/views/UserProfileFormPage";
import ResetPassword from "./components/views/resetPassword/ResetPassword";
import ResetPasswordConfirmation from "./components/views/resetPassword/ResetPasswordConfirmation";
import NewPassword from "./components/views/resetPassword/NewPassword";
import HomePage from "./components/views/HomePage";

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const { token } = useSelector(state => state.currentUser);

  const renderPrivateRoutes = () => {
    return (
      <>
        {/* //!! ALL PRIVATE ROUTES SHOULD USE RENDER (NOT COMPONENT) */}
        <PrivateRoute path="/dashboard" render={() => <Dashboard />} />
        <PrivateRoute path="/" render={() => <HomePage />} />
        <PrivateRoute
          exact
          path="/event/new"
          render={() => <HackathonFormPage />}
        />
        <PrivateRoute
          path={`/${currentPath}/event/:id`}
          render={() => <HackathonSinglePage {...{ isSideBarOpen }} />}
        />
        <PrivateRoute
          exact
          path="/event/:id/edit"
          render={() => <EditHackathon />}
        />
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
              <Route exact path="/about" component={AboutPage} />
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
