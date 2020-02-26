import React from "react";

import HackathonSingle from "../templates/HackathonSingle";

const HackathonSinglePage = ({ isEventModalOpen, setIsEventModalOpen, eventId }) => (
    <HackathonSingle 
        {...{eventId}}
        {...{isEventModalOpen}}
        {...{setIsEventModalOpen}}
    />
);

export default HackathonSinglePage;
