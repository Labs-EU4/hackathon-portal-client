import React from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { EventOnboarding } from "../templates";
import { UserEventsDashboard } from "../templates";
import { fetchAllEvents } from "../../store/events/actions";

const Dashboard = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  if(pathname === '/') {
    return <EventOnboarding />;
  }
  return <UserEventsDashboard />
};

export default Dashboard;
