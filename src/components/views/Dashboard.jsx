import React from "react";
import { useDispatch } from "react-redux";
import { UserEventsDashboard } from "../templates";
import { fetchAllEvents } from "../../store/events/actions";

const Dashboard = ({ eventModalHandler }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  return <UserEventsDashboard {...{eventModalHandler}} />;
};

export default Dashboard;


