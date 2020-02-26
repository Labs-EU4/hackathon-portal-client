import React from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { EventOnboarding } from "../templates";
import { UserEventsDashboard } from "../templates";
import { fetchAllEvents } from "../../store/events/actions";

const Dashboard = ({ eventModalHandler }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  if (pathname === '/') {
    return <EventOnboarding {...{eventModalHandler}} />;
  }
  return <UserEventsDashboard {...{eventModalHandler}} />;
};

export default Dashboard;
