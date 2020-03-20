import React from "react";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { ErrorSpan } from "../../assets/styles/atoms/SpanStyling";
import { ErrorMessage } from "formik";
import Input from "../atoms/Input";
import { Label } from "../../assets/styles/atoms/LabelStyling";
import { Column } from "../../assets/styles/atoms/ColumnStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";

const ProjectTitle = props => {
  const currentEvent = props.currentEvent;

  return (
    <>
      <RowBody>
        <Paragraph>
          You are making a submission for the{" "}
          <strong>{currentEvent.event_title}</strong>. Please ensure you have
          read the event guidelines and have gone through the grading rubrics
          for this event before you make your submission.
        </Paragraph>
      </RowBody>
      <RowBody>
        <Column>
          <Label htmlFor="project_title">Project Title</Label>
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
          <Label htmlFor="participant_or_team_nam">Team/Participant name</Label>
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
