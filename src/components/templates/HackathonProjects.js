// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   BodyContainerColumnN,
//   CardN,
//   TeamN,
//   StrongN,
//   DescriptionN,
//   RatingGroupN,
//   JudgeCountN,
//   SubmissionEntryN
// } from "../../assets/styles/templates/HackathonProjectsStyling";
// import UserHeader from "../organisms/UserHeader";
// import { Footer } from "../organisms/index";
// import { WideBody } from "../../assets/styles/atoms/WideBodyStyling";
// import Nav from "../organisms/Nav";
// import { H3 } from "../../assets/styles/atoms/Heading";
// import { RowHead } from "../../assets/styles/atoms/RowHead";
// import { RowBody } from "../../assets/styles/atoms/RowBody";
// import { Column } from "../../assets/styles/atoms/Column";
// import Button from "../atoms/Button";
// import Rating from "react-rating";
// import emptyStar from "../../assets/images/star-hollow.png";
// import fullStar from "../../assets/images/star-full.png";
// import { useSubmissions } from "../../hooks";
// import Spinner from "../molecules/Spinner";

// const HackathonProjects = () => {
//   const { id } = useParams();

//   const { event_title } = useSelector(state =>
//     state.events.data.find(event => event.id === Number(id))
//   );
//   const [submissions, fetchSubmissions, loading] = useSubmissions(id);

//   useEffect(() => {
//     fetchSubmissions();
//   }, [fetchSubmissions]);

//   return (
//     <div>
//       <UserHeader />
//       <WideBody>
//         {/* <Nav /> */}
//         <BodyContainerColumn>
//           <RowHead>
//             <H3>
//               Submitted projects for <Strong>&quot;{event_title}&quot;</Strong>
//             </H3>
//           </RowHead>

//           <Column>
//             <Card>
//               {loading ? (
//                 <Spinner />
//               ) : (
//                 <>
//                   <RowBody>
//                     {submissions.length === 0 &&
//                       "No projects were submitted for this hackathon."}
//                     {submissions.map((s, i) => {
//                       return (
//                         <SubmissionEntry key={s.id}>
//                           <Team>
//                             <H3>
//                               {s.participant_or_team_name || s.project_title}
//                             </H3>
//                           </Team>
//                           <Description>{s.project_writeups}</Description>
//                           {s.average_rating > 0 ? (
//                             <RatingGroup>
//                               <Rating
//                                 initialRating={s.average_rating}
//                                 readonly
//                                 emptySymbol={
//                                   <img alt="Rubric star" src={emptyStar} />
//                                 }
//                                 fullSymbol={
//                                   <img alt="Rubric star" src={fullStar} />
//                                 }
//                               />
//                               <JudgeCount>
//                                 {`${s.acted_judges}/${s.number_of_judges +
//                                   1} voted`}
//                               </JudgeCount>
//                             </RatingGroup>
//                           ) : (
//                             "Not rated."
//                           )}
//                           <Button
//                             anchor
//                             color="blue"
//                             to={`/dashboard/event/${id}/project/${s.id}`}
//                           >
//                             View
//                           </Button>
//                         </SubmissionEntry>
//                       );
//                     })}
//                   </RowBody>
//                   <Button anchor to={`/dashboard/event/${id}`} color="grey">
//                     Back to event
//                   </Button>
//                 </>
//               )}
//             </Card>
//           </Column>
//         </BodyContainerColumn>
//       </WideBody>
//       <Footer />
//     </div>
//   );
// };

// export default HackathonProjects;

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
