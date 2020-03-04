import React from "react";

import HackathonSingleProject from "../templates/HackathonSingleProject";

const HackathonProjectPage = ({ id, projectId, setIsProjectPageOpen }) => (
    <HackathonSingleProject {...{id}} {...{projectId}} {...{setIsProjectPageOpen}}/>
);

export default HackathonProjectPage;