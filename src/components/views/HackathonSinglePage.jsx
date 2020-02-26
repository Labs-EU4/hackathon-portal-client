import React from "react";

import HackathonSingle from "../templates/HackathonSingle";

const HackathonSinglePage = ({ eventId, setEventId, isEventModalOpen, setIsEventModalOpen }) => (
    <HackathonSingle 
        {...{eventId}}
        {...{setEventId}}
        {...{isEventModalOpen}}
        {...{setIsEventModalOpen}}
    />
);

export default HackathonSinglePage;
