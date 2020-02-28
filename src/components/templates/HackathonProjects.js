import React, { useEffect } from "react";
import styled from "styled-components";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { media } from "../../assets/styles/variables/media";
// import WideBody from "../atoms/WideBody";
// import BodyContainer from "../atoms/BodyContainer";
import { H3 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
// import { Column } from "../atoms/Column";
import { CardWide } from "../atoms/Card";
import { Paragraph } from "../atoms/Paragraph";
import Button from "../atoms/Button";
import Rating from "react-rating";
import emptyStar from "../../assets/images/star-hollow.png";
import fullStar from "../../assets/images/star-full.png";
import { useSubmissions } from "../../hooks";
import Spinner from "../molecules/Spinner";

const HackathonProjects = ({ id, setIsSubmissionsPageOpen }) => {
  // const { id } = useParams();
  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const [submissions, fetchSubmissions, loading] = useSubmissions(id);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

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
                <StyledParagraph strong>No projects were submitted for this hackathon</StyledParagraph>
              )}
              {submissions.map((s, i) => {
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
                        <Paragraph strong>Not rated</Paragraph>
                      )}
                      <Button
                        anchor
                        color="blue"
                        to={`/dashboard/event/${id}/project/${s.id}`}
                      >
                        View Project
                      </Button>
                    </SubmissionContent>
                  </SubmissionEntry>
                );
              })}
            </StyledRowBody>
            {/* <Button anchor to={`/dashboard/event/${id}`} color="grey"> */}
            <Button onClick={() => setIsSubmissionsPageOpen(false)} color="grey">
              Back to event
            </Button>
          </>
        )}
      </StyledCardWide>
    </StyledWideBody>
  );
};

export default HackathonProjects;

const StyledWideBody = styled.div`
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, .4);
  z-index: 100;
`;

const StyledCardWide = styled(CardWide)`
  ${props => props.theme.shadow.box};
  position: absolute; top: 50%; left: 50%;
  width: 70%; max-width: 800px;
  transform: translate(-50%, -50%);
  z-index: 200;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px auto;
  font-size: 2rem;
`;

const StyledRowBody = styled(RowBody)`
  max-height: 550px;
  overflow-y: scroll;
`;

const Team = styled.h3`
  border-bottom: 2px solid ${props => props.theme.color.grey.regular};
  margin: 0 auto; padding: 5px 10px;
  font-size: 1.8rem; font-weight: bold; 
  text-align: center;
`;

const SubmissionEntry = styled.div`
  ${props => props.theme.flex.column};
  ${props => props.theme.shadow.box};
  width: 100%;
  /* border-bottom: 1px solid #c8c8c8; */
  border: 1px solid ${props => props.theme.color.grey.regular};
  padding: 5px 0;
  margin-bottom: 5px;
`;

const SubmissionContent = styled.div`
  ${props => props.theme.flex.custom('center', 'center', 'column')};
  padding: 10px;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Description = styled(Paragraph)`
  width: 100%;
  margin: none; padding-top: 10px;
  overflow: hidden;
  /* Ellipsis not working, fix this feature */
  text-align: center; text-overflow: ellipsis;

  @media ${media.tablet} {
    max-width: 100%;
    margin: 0 0 20px 0;
    padding: 0 20px;
  }

  @media ${media.mobile} {
    padding: 0;
  }
`;

const RatingGroup = styled.div`
  ${props => props.theme.flex.custom('center', 'center', 'column')};
  margin-bottom: 20px;

  /* @media ${media.tablet} {
    margin: 0 0 20px 0;
  } */
`;

const JudgeCount = styled.span`
  font-size: 12px;
  margin: 5px 0 0 0;
`;


