
import React from "react";
import { useDispatch } from "react-redux";

import PrivateRoute from "../organisms/PrivateRoute";
import UserEventsDashboard from "../templates/UserEventsDashboard";
import HackathonSinglePage from "./HackathonSinglePage";
import { fetchAllEvents } from "../../store/events/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return <UserEventsDashboard />;
};

export default Dashboard;
