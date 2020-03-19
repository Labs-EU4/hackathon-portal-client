import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from "react-rating";

import {
  StyledWideBodyN,
  StyledCardWideN,
  StyledParagraphN,
  StyledRowBodyN,
  TeamN,
  SubmissionEntryN,
  SubmissionContentN,
  StrongN,
  DescriptionN,
  RatingGroupN,
  JudgeCountN
} from "../../assets/styles/templates/HackathonProjectsStyling";
import emptyStar from "../../assets/images/star-hollow.png";
import fullStar from "../../assets/images/star-full.png";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHead";
import { Paragraph } from "../../assets/styles/atoms/Paragraph";
import Button from "../atoms/Button";
import Spinner from "../molecules/Spinner";
import HackathonProjectPage from "../views/HackathonProjectPage";
import { useSubmissions } from "../../hooks";

const HackathonProjects = ({ setIsSubmissionsPageOpen }) => {
  const { id } = useParams();
  const [isProjectPageOpen, setIsProjectPageOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);
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
      <SubmissionEntryN key={s.id}>
        <TeamN>{s.participant_or_team_name || s.project_title}</TeamN>
        <SubmissionContentN>
          <DescriptionN>{s.project_writeups}</DescriptionN>
          {s.average_rating > 0 ? (
            <RatingGroupN>
              <Rating
                initialRating={s.average_rating}
                readonly
                emptySymbol={<img alt="Rubric star" src={emptyStar} />}
                fullSymbol={<img alt="Rubric star" src={fullStar} />}
              />
              <JudgeCountN>
                {`${s.acted_judges}/${s.number_of_judges} voted`}
              </JudgeCountN>
            </RatingGroupN>
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
        </SubmissionContentN>
      </SubmissionEntryN>
    );
  };

  return (
    <StyledWideBodyN>
      <StyledCardWideN>
        <RowHead>
          <H3>
            Submitted projects for <StrongN>"{event_title}"</StrongN>
          </H3>
        </RowHead>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <StyledRowBodyN>
              {submissions.length === 0 && (
                <StyledParagraphN strong>
                  No projects were submitted for this hackathon
                </StyledParagraphN>
              )}
              {submissions.map(s => renderSubmission(s))}
            </StyledRowBodyN>
            <Button onClick={() => setIsSubmissionsPageOpen(false)} color="grey">
              Back to event
            </Button>
          </>
        )}
      </StyledCardWideN>
      {isProjectPageOpen && (
        <HackathonProjectPage
          {...{ id }}
          {...{ projectId }}
          {...{ setIsProjectPageOpen }}
        />
      )}
    </StyledWideBodyN>
  );
};
export default HackathonProjects;
