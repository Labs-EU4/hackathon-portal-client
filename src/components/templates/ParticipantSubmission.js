import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { StyledWideBody } from "../../assets/styles/templates/ParticipantSubmissionStyling";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { RowBody } from "../../assets/styles/atoms/RowBodyStyling";
import { CardForm } from "../../assets/styles/atoms/CardStyling";
import { ErrorSpanN } from "../../assets/styles/atoms/Span";
import { Label } from "../../assets/styles/atoms/LabelStyling";
import Input from "../atoms/Input";
import {
  fetchAllSubmissions,
  submitProject
} from "../../store/projectSubmission/actions";
import ProjectTitle from "../organisms/PSProjectTitle";
import ProjectWriteUp from "../organisms/PSProjectWriteUp";

const defaultState = {
  project_title: "",
  participant_or_team_name: "",
  git_url: "",
  video_url: "",
  project_writeups: ""
};

const ParticipantSubmission = ({
  initialState = defaultState,
  // id,
  // setIsSubmitProjectOpen
}) => {
  const { id } = useParams();
  const event_id = Number(id);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentEvent = useSelector(state =>
    state.events.data.find(e => e.id === event_id)
  );

  useEffect(() => {
    dispatch(fetchAllSubmissions(event_id));
  }, [dispatch, event_id]);

  const handleSubmit = values => {
    dispatch(submitProject({ ...values, event_id }, history));
  };

  const requireGithubUrl = currentEvent.requirements.includes("github_url");
  const requireVideoUrl = currentEvent.requirements.includes("video_url");

  const schema = Yup.object().shape({
    project_title: Yup.string()
      .min(3, "Project title must be at least 3 characters long.")
      .required("Project title is required."),
    participant_or_team_name: Yup.string()
      .min(2, "Team/participants name must be at least 2 characters long.")
      .required("Team/participants name is required."),
    git_url: requireGithubUrl
      ? Yup.string()
          .min(8, "GitHub URL must be at least 8 characters long.")
          .required("GitHub URL is required.")
      : Yup.string(),
    video_url: requireVideoUrl
      ? Yup.string()
          .min(8, "Video URL must be at least 8 characters long.")
          .required("Video URL is required.")
      : Yup.string(),
    project_writeups: Yup.string()
      .min(8, "Project writeup must be at least 8 characters long.")
      .required("Project writeup is required.")
  });

  return (
    <StyledWideBody>
      <CardForm>
        <RowHeadN>
          <H3>Submit Project</H3>
        </RowHeadN>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialState}
          validationSchema={schema}
          enableReinitialize
        >
          {() => (
            <Form>
              <ProjectTitle currentEvent={currentEvent} />
              {requireGithubUrl && (
                <RowBodyN justify="start">
                  <Label htmlFor="git_url">GitHub URL</Label>
                  <Input
                    type="text"
                    name="git_url"
                    id="git_url"
                    display="wide"
                  />
                  <ErrorSpanN>
                    <ErrorMessage name="git_url" component="div" />
                  </ErrorSpanN>
                </RowBodyN>
              )}

              {requireVideoUrl && (
                <RowBodyN justify="start">
                  <Label htmlFor="video_url">Video URL</Label>
                  <Input
                    type="text"
                    name="video_url"
                    id="video_url"
                    style={{ width: "100%" }}
                  />
                  <ErrorSpanN>
                    <ErrorMessage name="video_url" component="div" />
                  </ErrorSpanN>
                </RowBodyN>
              )}
              <ProjectWriteUp />
            </Form>
          )}
        </Formik>
      </CardForm>
    </StyledWideBody>
  );
};

export default ParticipantSubmission;

