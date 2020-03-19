// import React from "react";
// import { useDispatch } from "react-redux";
// import { EventOnboarding } from "../templates";
// import { fetchAllEvents } from "../../store/events/actions";

// const Dashboard = () => {
//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     dispatch(fetchAllEvents());
//   }, [dispatch]);

//   return <EventOnboarding />;
// };

// export default Dashboard;

import React from "react";
import { useDispatch } from "react-redux";

import PrivateRoute from "../organisms/PrivateRoute";
import UserEventsDashboard from "../templates/UserEventsDashboard";
// import { EventOnboarding } from "../templates";
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
