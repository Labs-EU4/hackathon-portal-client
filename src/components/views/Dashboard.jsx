import React from "react";
import { useDispatch } from "react-redux";

// import EventOnboarding from "../templates/EventOnboarding";

import UserEventsDashboard from "../templates/UserEventsDashboard";

import { fetchAllEvents } from "../../store/events/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return <UserEventsDashboard />;
};

export default Dashboard;
