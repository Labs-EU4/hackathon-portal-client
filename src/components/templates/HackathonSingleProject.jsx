import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  StyledWideBody,
  ProjectCard,
  Team,
  Strong,
  Description,
  SubmissionEntry,
  CenterItems,
  Rubrics,
  RubricRow,
  Feedback,
  JudgeView,
  StyledParagraph,
  ButtonGroup,
  StyledButton
} from "../../assets/styles/templates/HackthonSingleProjectStyling";
import { H3, H4 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";
import Button from "../atoms/Button";
import { Label } from "../../assets/styles/atoms/LabelStyling";
import Icon from "../atoms/Icon";
import emptyStar from "../../assets/images/star-hollow.png";
import fullStar from "../../assets/images/star-full.png";
import { gradeSubmission } from "../../store/projectSubmission/actions";
import { useJudges, useGrades, useSubmissions } from "../../hooks";

const HackathonSingleProject = ({ id, projectId, setIsProjectPageOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { event_title, rubrics } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const judges = useJudges(id);
  const [grades, fetchGrades] = useGrades(projectId);
  const { userId } = useSelector(state => state.currentUser);
  const [averages, setAverages] = useState({});
  const [submissions, fetchSubmissions] = useSubmissions(id);
  const submission = submissions.find(p => p.id === Number(projectId));
  const isJudge = judges.find(j => j.user_id === userId);
  const hasGraded = grades.find(g => g.judge_id === userId);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  useEffect(() => {
    fetchGrades();
  }, [fetchGrades]);

  useEffect(() => {
    const features = {
      comments: []
    };

    rubrics.forEach(r => {
      features[r] = 0;
    });

    if (grades.length > 0) {
      // setAverages(averages);
      const averageGrades = grades.reduce((accum, c) => {
        const newObj = { ...accum };
        if (c["judge_comments"]) newObj.comments.push(c["judge_comments"]);
        rubrics.forEach(key => {
          const value = c[key];
          newObj[key] += value;
        });
        return newObj;
      }, features);

      const averages = {};
      Object.keys(averageGrades).forEach(key => {
        const value = averageGrades[key];
        if (key === "comments") {
          averages[key] = value;
        } else averages[key] = value / grades.length;
      });
      setAverages(averages);
    } else setAverages(features);
  }, [hasGraded, grades, rubrics]);

  // Convert rubrics names to Title Case
  const toTittleCase = item => {
    return item
      .split("_")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [grade, setGrade] = useState({
    product_design: null,
    functionality: null,
    innovation: null,
    product_fit: null,
    extensibility: null,
    presentation: null,
    project_event_id: id,
    judge_comments: ""
  });

  const changeHandler = ([rubric, rating]) => {
    setGrade(grade => ({ ...grade, [rubric]: rating }));
  };

  const handleSubmit = () => {
    dispatch(gradeSubmission(projectId, grade, history));
  };

  return (
    <StyledWideBody>
      <ProjectCard>
        <RowHead>
          <H3>
            Submitted project for <Strong>"{event_title}"</Strong>
          </H3>
        </RowHead>
        <SubmissionEntry>
          <Team>
            <H3>
              {submission?.participant_or_team_name ||
                submission?.project_title}
            </H3>
          </Team>
          <Description id="project_writeup">
            <StyledParagraph>{submission?.project_writeups}</StyledParagraph>
            <CenterItems>
              {submission?.git_url && (
                <StyledButton
                  anchor
                  color="green"
                  href={submission?.git_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon={["fab", "github"]} />
                  <span>GitHub URL</span>
                </StyledButton>
              )}
              {submission?.video_url && (
                <StyledButton
                  anchor
                  color="green"
                  href={submission?.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="play-circle" />
                  <span>Video URL</span>
                </StyledButton>
              )}
            </CenterItems>
          </Description>
          {isJudge && !hasGraded ? (
            <JudgeView>
              <H4>Grading Form</H4>
              <Paragraph>
                Please rate this project submission using the rubrics provided
                below and leave a feedback explaining your grading.
              </Paragraph>
              <Rubrics id="rubrics">
                {rubrics.map(rubric => {
                  return (
                    <RubricRow key={rubric}>
                      {toTittleCase(rubric)}
                      <Rating
                        id={rubric}
                        onChange={rate => changeHandler([rubric, rate])}
                        emptySymbol={
                          <img alt={toTittleCase(rubric)} src={emptyStar} />
                        }
                        fullSymbol={
                          <img alt={toTittleCase(rubric)} src={fullStar} />
                        }
                        initialRating={grade[rubric]}
                      />
                    </RubricRow>
                  );
                })}
              </Rubrics>
              <Label htmlFor="feedback">Feedback</Label>
              <Feedback
                wide
                id="judge_comments"
                onChange={e => {
                  const { id, value } = e.target;
                  changeHandler([id, value]);
                }}
                value={grade.judge_comments}
              />
            </JudgeView>
          ) : (
            <JudgeView>
              <Rubrics id="rubrics">
                {Object.keys(averages).map(rubric => {
                  return rubric !== "comments" ? (
                    <RubricRow key={rubric}>
                      {toTittleCase(rubric)}
                      <Rating
                        emptySymbol={
                          <img alt={toTittleCase(rubric)} src={emptyStar} />
                        }
                        fullSymbol={
                          <img alt={toTittleCase(rubric)} src={fullStar} />
                        }
                        initialRating={averages[rubric]}
                        readonly
                      />
                    </RubricRow>
                  ) : null;
                })}
              </Rubrics>
              <Label htmlFor="feedback">Feedback</Label>
              {averages.comments?.length > 0 ? (
                averages.comments.map(comment => (
                  <StyledParagraph key={comment}>{comment}</StyledParagraph>
                ))
              ) : (
                <StyledParagraph>No comments on this project</StyledParagraph>
              )}
            </JudgeView>
          )}
        </SubmissionEntry>
        <ButtonGroup>
          <Button color="grey" onClick={() => setIsProjectPageOpen(false)}>
            Back to projects
          </Button>
          {isJudge && !hasGraded && (
            <Button color="green" onClick={handleSubmit}>
              Submit Grading
            </Button>
          )}
        </ButtonGroup>
      </ProjectCard>
    </StyledWideBody>
  );
};

export default HackathonSingleProject;
