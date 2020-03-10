import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from "react-rating";

import {
  StyledWideBody,
  StyledCardWide,
  StyledParagraph,
  StyledRowBody,
  Team,
  SubmissionEntry,
  SubmissionContent,
  Strong,
  Description,
  RatingGroup,
  JudgeCount
} from "../../assets/styles/templates/HackathonProjectsStyling";
import emptyStar from "../../assets/images/star-hollow.png";
import fullStar from "../../assets/images/star-full.png";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";
import Button from "../atoms/Button";
import Spinner from "../molecules/Spinner";
import HackathonProjectPage from "../views/HackathonProjectPage";
import { useSubmissions } from "../../hooks";

const HackathonProjects = ({ setIsSubmissionsPageOpen }) => {
  const { id } = useParams();
  const [isProjectPageOpen, setIsProjectPageOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const [submissions, fetchSubmissions, loading] = useSubmissions(id);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  const viewProjectHandler = submissionId => {
    setProjectId(submissionId);
    setIsProjectPageOpen(true);
  };

  const renderSubmission = s => {
    return (
      <SubmissionEntry key={s.id}>
        <Team>{s.participant_or_team_name || s.project_title}</Team>
        <SubmissionContent>
          <Description>{s.project_writeups}</Description>
          {s.average_rating > 0 ? (
            <RatingGroup>
              <Rating
                initialRating={s.average_rating}
                readonly
                emptySymbol={<img alt="Rubric star" src={emptyStar} />}
                fullSymbol={<img alt="Rubric star" src={fullStar} />}
              />
              <JudgeCount>
                {`${s.acted_judges}/${s.number_of_judges + 1} voted`}
              </JudgeCount>
            </RatingGroup>
          ) : (
            <Paragraph strong>Not rated</Paragraph>
          )}
          <Button
            // link
            color="blue"
            // to={`/${currentPath}/event/${id}/project/${s.id}`}
            onClick={() => viewProjectHandler(s.id)}
          >
            View Project
          </Button>
        </SubmissionContent>
      </SubmissionEntry>
    );
  };

  return (
    <StyledWideBody>
      <StyledCardWide>
        <RowHead>
          <H3>
            Submitted projects for <Strong>"{event_title}"</Strong>
          </H3>
        </RowHead>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <StyledRowBody>
              {submissions.length === 0 && (
                <StyledParagraph strong>
                  No projects were submitted for this hackathon
                </StyledParagraph>
              )}
              {submissions.map(s => renderSubmission(s))}
            </StyledRowBody>
            <Button link to={`/${currentPath}/event/${id}`} color="grey">
              Back to event
            </Button>
          </>
        )}
      </StyledCardWide>
      {isProjectPageOpen && (
        <HackathonProjectPage
          {...{ id }}
          {...{ projectId }}
          {...{ setIsProjectPageOpen }}
        />
      )}
    </StyledWideBody>
  );
};

export default HackathonProjects;
