import React from "react";

import HackathonSingle from "../templates/HackathonSingle";

const HackathonSinglePage = ({ eventId, setEventId, isEventModalOpen, setIsEventModalOpen, isSideBarOpen }) => (
    <HackathonSingle 
        {...{eventId}}
        {...{setEventId}}
        {...{isEventModalOpen}}
        {...{setIsEventModalOpen}}
        {...{isSideBarOpen}}
    />
);

export default HackathonSinglePage;
