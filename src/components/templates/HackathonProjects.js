import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
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
} from '../../assets/styles/templates/HackathonProjects';
import emptyStar from "../../assets/images/star-hollow.png";
import fullStar from "../../assets/images/star-full.png";
import { H3 } from "../../assets/styles/atoms/HeadingStyling";
import { RowHead } from "../../assets/styles/atoms/RowHeadStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";
import Button from "../atoms/Button";
import Spinner from "../molecules/Spinner";
import HackathonProjectPage from '../views/HackathonProjectPage';
import { useSubmissions } from "../../hooks";

const HackathonProjects = (
  // { id, setIsSubmissionsPageOpen }
) => {
  // const [ isProjectPageOpen, setIsProjectPageOpen ] = useState(false);
  // const [ projectId, setProjectId ] = useState(null);
  const { id } = useParams();
  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );
  const [submissions, fetchSubmissions, loading] = useSubmissions(id);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  // const viewProjectHandler = (submissionId) => {
  //   setProjectId(submissionId);
  //   setIsProjectPageOpen(true);
  // }

  const renderSubmission = (s) => {
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
          {/* <Button
            color="blue"
            onClick={() => viewProjectHandler(s.id)}
          > */}
          <Button
            link
            color="blue"
            to={`/dashboard/event/${id}/project/${s.id}`}
          >View Project</Button>
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
                <StyledParagraph strong>No projects were submitted for this hackathon</StyledParagraph>
              )}
              {submissions.map(s => renderSubmission(s))}
            </StyledRowBody>
            {/* <Button onClick={() => setIsSubmissionsPageOpen(false)} color="grey">
              Back to event
            </Button> */}
            <Button link to={`/dashboard/event/${id}`} color="grey">
                Back to event
            </Button>
          </>
        )}
      </StyledCardWide>
      {/* {
        isProjectPageOpen && <HackathonProjectPage {...{id}} {...{projectId}} {...{setIsProjectPageOpen}}/>
      } */}
    </StyledWideBody>
  );
};

export default HackathonProjects;









// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   BodyContainerColumn,
//   Card,
//   Team,
//   Strong,
//   Description,
//   RatingGroup,
//   JudgeCount,
//   SubmissionEntry
// } from "../styles/templates/HackathonProjectsStyling";
// import UserHeader from "../organisms/UserHeader";
// import { Footer } from "../organisms/index";
// import WideBody from "../atoms/WideBody";
// import Nav from "../molecules/Nav";
// import { H3 } from "../atoms/Heading";
// import { RowHead } from "../atoms/RowHead";
// import { RowBody } from "../atoms/RowBody";
// import { Column } from "../atoms/Column";
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
//         <Nav />
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
//                   <>
//                     <RowBody>
//                       {submissions.length === 0 &&
//                         "No projects were submitted for this hackathon."}
//                       {submissions.map((s, i) => {
//                         return (
//                           <SubmissionEntry key={s.id}>
//                             <Team>
//                               <H3>
//                                 {s.participant_or_team_name || s.project_title}
//                               </H3>
//                             </Team>
//                             <Description>{s.project_writeups}</Description>
//                             {s.average_rating > 0 ? (
//                               <RatingGroup>
//                                 <Rating
//                                   initialRating={s.average_rating}
//                                   readonly
//                                   emptySymbol={
//                                     <img alt="Rubric star" src={emptyStar} />
//                                   }
//                                   fullSymbol={
//                                     <img alt="Rubric star" src={fullStar} />
//                                   }
//                                 />
//                                 <JudgeCount>
//                                   {`${s.acted_judges}/${s.number_of_judges +
//                                     1} voted`}
//                                 </JudgeCount>
//                               </RatingGroup>
//                             ) : (
//                                 "Not rated."
//                               )}
//                             <Button
//                               anchor
//                               color="blue"
//                               to={`/dashboard/event/${id}/project/${s.id}`}
//                             >
//                               View
//                           </Button>
//                           </SubmissionEntry>
//                         );
//                       })}
//                     </RowBody>
//                     <Button anchor to={`/dashboard/event/${id}`} color="grey">
//                       Back to event
//                   </Button>
//                   </>
//                 )}
//             </Card>
//           </Column>
//         </BodyContainerColumn>
//       </WideBody>
//       <Footer />
//     </div>
//   );
// };

// export default HackathonProjects;
