import React from "react";

import { 
  StyledParagraph,
  StyledLabel
} from "../../assets/styles/templates/ParticipantSubmissionStyling";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { ErrorSpan } from "../../assets/styles/atoms/SpanStyling";
import { ErrorMessage } from "formik";
import Input from "../atoms/Input";
import { Column } from "../../assets/styles/atoms/ColumnStyling";

const ProjectTitle = props => {
  const currentEvent = props.currentEvent;

  return (
    <>
      <RowBody>
        <StyledParagraph>
          You are making a submission for the{" "}
          <span>{currentEvent.event_title}</span>. Please ensure you have
          read the event guidelines and have gone through the grading rubrics
          for this event before you make your submission.
        </StyledParagraph>
      </RowBody>
      <RowBody>
        <Column>
          <StyledLabel htmlFor="project_title">Project Title</StyledLabel>
          <Input
            type="text"
            id="project_title"
            name="project_title"
            display="wide"
          />
          <ErrorSpan>
            <ErrorMessage name="project_title" component="div" />
          </ErrorSpan>
        </Column>
        <Column>
          <StyledLabel htmlFor="participant_or_team_nam">Team/Participant name</StyledLabel>
          <Input
            type="text"
            name="participant_or_team_name"
            id="participant_or_team_name"
            display="wide"
          />
          <ErrorSpan>
            <ErrorMessage name="participant_or_team_name" component="div" />
          </ErrorSpan>
        </Column>
      </RowBody>
    </>
  );
};

export default ProjectTitle;
