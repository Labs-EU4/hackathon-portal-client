import React from "react";
import { useDispatch } from "react-redux";

import { EventOnboarding } from "../templates";
import { fetchAllEvents } from "../../store/events/actions";

const HomePage = ({ eventModalHandler }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchAllEvents());
    }, [dispatch]);

    return <EventOnboarding {...{eventModalHandler}} />;
};

export default HomePage;