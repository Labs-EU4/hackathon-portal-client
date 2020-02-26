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

// import React from "react";
// import { useLocation } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { EventOnboarding } from "../templates";
// import { UserEventsDashboard } from "../templates";
// import { fetchAllEvents } from "../../store/events/actions";

// const Dashboard = ({ eventModalHandler }) => {
//   const { pathname } = useLocation();
//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     dispatch(fetchAllEvents());
//   }, [dispatch]);

//   return <UserEventsDashboard {...{eventModalHandler}} />;
// };

// export default Dashboard;
