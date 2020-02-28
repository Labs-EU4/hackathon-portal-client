import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  BodyContainerColumn,
  Card,
  Team,
  Strong,
  Description,
  RatingGroup,
  JudgeCount,
  SubmissionEntry
} from "../styles/templates/HackathonProjectsStyling";
import UserHeader from "../organisms/UserHeader";
import { Footer } from "../organisms/index";
import WideBody from "../atoms/WideBody";
import Nav from "../molecules/Nav";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { Column } from "../atoms/Column";
import Button from "../atoms/Button";
import Rating from "react-rating";
import emptyStar from "../../assets/star-hollow.png";
import fullStar from "../../assets/star-full.png";
import { useSubmissions } from "../../hooks";
import Spinner from "../molecules/Spinner";

const HackathonProjects = () => {
  const { id } = useParams();

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  ); // This is for testing purposes only
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
