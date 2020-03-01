import React from "react";

import ParticipantSubmission from "../templates/ParticipantSubmission";

const ParticipantSubmissionPage = ({ id, setIsSubmitProjectOpen }) => (
    <ParticipantSubmission {...{id}} {...{setIsSubmitProjectOpen}} />
);

export default ParticipantSubmissionPage;