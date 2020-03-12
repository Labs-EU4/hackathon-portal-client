
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const HackathonProjects = () => {
  const { id } = useParams();

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const [submissions, fetchSubmissions, loading] = useSubmissions(id);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>
              Submitted projects for <Strong>&quot;{event_title}&quot;</Strong>
            </H3>
          </RowHead>

          <Column>
            <Card>
              {loading ? (
                <Spinner />
              ) : (
                  <>
                    <RowBody>
                      {submissions.length === 0 &&
                        "No projects were submitted for this hackathon."}
                      {submissions.map((s, i) => {
                        return (
                          <SubmissionEntry key={s.id}>
                            <Team>
                              <H3>
                                {s.participant_or_team_name || s.project_title}
                              </H3>
                            </Team>
                            <Description>{s.project_writeups}</Description>
                            {s.average_rating > 0 ? (
                              <RatingGroup>
                                <Rating
                                  initialRating={s.average_rating}
                                  readonly
                                  emptySymbol={
                                    <img alt="Rubric star" src={emptyStar} />
                                  }
                                  fullSymbol={
                                    <img alt="Rubric star" src={fullStar} />
                                  }
                                />
                                <JudgeCount>
                                  {`${s.acted_judges}/${s.number_of_judges +
                                    1} voted`}
                                </JudgeCount>
                              </RatingGroup>
                            ) : (
                                "Not rated."
                              )}
                            <Button
                              anchor
                              color="blue"
                              to={`/dashboard/event/${id}/project/${s.id}`}
                            >
                              View
                          </Button>
                          </SubmissionEntry>
                        );
                      })}
                    </RowBody>
                    <Button anchor to={`/dashboard/event/${id}`} color="grey">
                      Back to event
                  </Button>
                  </>
                )}
            </Card>
          </Column>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default HackathonProjects;
