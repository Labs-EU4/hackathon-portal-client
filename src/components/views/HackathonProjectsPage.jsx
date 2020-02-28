import React from "react";

import HackathonProjects from "../templates/HackathonProjects";

const HackathonProjectsPage = ({ id, setIsSubmissionsPageOpen }) => (
    <HackathonProjects {...{id}} {...{setIsSubmissionsPageOpen}} />
);

export default HackathonProjectsPage;
