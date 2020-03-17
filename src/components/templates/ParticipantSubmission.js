import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import { WideBody } from "../../assets/styles/atoms/WideBodyStyling";
// import Nav from "../organisms/Nav";
import { H3 } from "../../assets/styles/atoms/Heading";
import { RowHead } from "../../assets/styles/atoms/RowHead";
import { RowBody } from "../../assets/styles/atoms/RowBody";
import { Column } from "../../assets/styles/atoms/Column";
import { CardForm } from "../../assets/styles/atoms/Card";
import { ErrorSpan } from "../../assets/styles/atoms/Span";
import Input from "../atoms/Input";
import { LabelN } from "../../assets/styles/atoms/Label";
import TextArea from "../molecules/TextArea";
import Button from "../atoms/Button";
import { Paragraph } from "../../assets/styles/atoms/Paragraph";
import {
  fetchAllSubmissions,
  submitProject
} from "../../store/projectSubmission/actions";
import { BodyContainerColumn } from "../../assets/styles/GlobalStyles";

const defaultState = {
  project_title: "",
  participant_or_team_name: "",
  git_url: "",
  video_url: "",
  project_writeups: ""
};

const ParticipantSubmission = ({ initialState = defaultState }) => {
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
    <div>
      <UserHeader />
      <WideBody>
        {/* <Nav /> */}
        <BodyContainerColumn>
          <RowHead>
            <H3>Submit Project</H3>
          </RowHead>

          <Column>
            <CardForm>
              <Formik
                onSubmit={handleSubmit}
                initialValues={initialState}
                validationSchema={schema}
                enableReinitialize
              >
                {() => (
                  <Form>
                    <RowBody>
                      <Paragraph>
                        You are making a submission for the{" "}
                        <strong>{currentEvent.event_title}</strong>. Please
                        ensure you have read the event guidelines and have gone
                        through the grading rubrics for this event before you
                        make your submission.
                      </Paragraph>
                    </RowBody>
                    <RowBody>
                      <Column>
                        <LabelN htmlFor="project_title">Project Title</LabelN>
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
                        <LabelN htmlFor="participant_or_team_nam">
                          Team/Participant name
                        </LabelN>
                        <Input
                          type="text"
                          name="participant_or_team_name"
                          id="participant_or_team_name"
                          display="wide"
                        />
                        <ErrorSpan>
                          <ErrorMessage
                            name="participant_or_team_name"
                            component="div"
                          />
                        </ErrorSpan>
                      </Column>
                    </RowBody>

                    {requireGithubUrl && (
                      <RowBody justify="start">
                        <LabelN htmlFor="git_url">GitHub URL</LabelN>
                        <Input
                          type="text"
                          name="git_url"
                          id="git_url"
                          display="wide"
                        />
                        <ErrorSpan>
                          <ErrorMessage name="git_url" component="div" />
                        </ErrorSpan>
                      </RowBody>
                    )}

                    {requireVideoUrl && (
                      <RowBody justify="start">
                        <LabelN htmlFor="video_url">Video URL</LabelN>
                        <Input
                          type="text"
                          name="video_url"
                          id="video_url"
                          display="wide"
                        />
                        <ErrorSpan>
                          <ErrorMessage name="video_url" component="div" />
                        </ErrorSpan>
                      </RowBody>
                    )}

                    <RowBody justify="start">
                      <LabelN htmlFor="project_writeups">
                        Project Writeup
                      </LabelN>
                      <TextArea
                        wide
                        as="textarea"
                        type="text"
                        name="project_writeups"
                        id="project_writeups"
                      />
                      <ErrorSpan>
                        <ErrorMessage name="project_writeups" />
                      </ErrorSpan>
                    </RowBody>

                    <RowBody>
                      <Button anchor to="/dashboard" color="grey">
                        Cancel
                      </Button>
                      <Button color="green" type="submit">
                        Submit
                      </Button>
                    </RowBody>
                  </Form>
                )}
              </Formik>
            </CardForm>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default ParticipantSubmission;
