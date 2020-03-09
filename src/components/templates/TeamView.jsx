import React, { useEffect } from "react";
import styled from 'styled-components';

import {
  TeamsContainer,
  FancyBoldSpan,
  StyledLetterIcon,
  NormalSpan
} from '../../assets/styles/templates/TeamView';
import Button from "../atoms/Button";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTeammates } from "../../hooks";
import user_icon from "../../assets/images/user_icon.svg";

const TeamView = ({ team }) => {
  const { id } = useParams();

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );

  const [teammates, fetchTeammates] = useTeammates(team?.id);
  const initial = team?.team_name[0] || "U";

  let memberProfile;

  useEffect(() => {
    fetchTeammates();
  }, [fetchTeammates]);

  return (
    <TeamsContainer>
      <StyledLetterIcon icon="">{initial}</StyledLetterIcon>
      <FancyBoldSpan>Your Team</FancyBoldSpan>
      <FancyBoldSpan>
        Team Name:
        <NormalSpan>{team.team_name}</NormalSpan>
      </FancyBoldSpan>
      <FancyBoldSpan style={{ borderBottom: "none" }}>
        Team Members:
      </FancyBoldSpan>
      {teammates.length !== 0 ? (
        <div
          style={{
            borderBottom: "1px solid lightgray",
            width: "100%",
            paddingBottom: "10px"
          }}
        >
          {" "}
          {teammates.map((member, idx) =>
            member.team_member_avatar === null ? (
              <StyledImg
                key={idx}
                alt="team member profile pic"
                src={user_icon}
              />
            ) : (
              member.team_member_avatar.map((mem, index) => {
                memberProfile = JSON.parse(mem);
                return (
                  <StyledImg
                    radius
                    key={index}
                    alt="team member profile pic"
                    src={memberProfile.avatar}
                  />
                );
              })
            )
          )}
        </div>
      ) : (
        <FancyBoldSpan>This team has no members</FancyBoldSpan>
      )}
      <FancyBoldSpan>
        Hackathon Name:
        <NormalSpan>{event_title}</NormalSpan>
      </FancyBoldSpan>
      <Button color="green">
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to={`/dashboard/event/${id}/participant-teams/${team.id}`}
        >
          Add Teammate
        </NavLink>{" "}
      </Button>
    </TeamsContainer>
  );
};

export default TeamView;

const StyledImg = styled.img`
  width: 7%;
  height: 7%;
  margin-left: 1%;
  object-fit: cover;

  ${({ radius }) => radius && `border-radius: 5px`}
`;







// import React, { useEffect } from "react";
// import Button from "../atoms/Button";
// import { NavLink, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useTeammates } from "../../hooks";
// import user_icon from "../../assets/images/user_icon.svg";
// import { TeamsCont, FancyBoldSpan, StyledLetterIcon, NormalSpan, TeamMateDiv, Img, ImgWithBorder } from "../styles/templates/TeamViewStyling"

// const TeamView = ({ team }) => {
//   const { id } = useParams();

//   const { event_title } = useSelector(state =>
//     state.events.data.find(event => event.id === Number(id))
//   );

//   const [teammates, fetchTeammates] = useTeammates(team ?.id);
//   const initial = team ?.team_name[0] || "U";

//   let memberProfile;

//   useEffect(() => {
//     fetchTeammates();
//   }, [fetchTeammates]);


//   return (
//     <TeamsCont>
//       <StyledLetterIcon>{initial}</StyledLetterIcon>
//       <FancyBoldSpan>Your Team</FancyBoldSpan>
//       <FancyBoldSpan>
//         Team Name:
//         <NormalSpan>{team.team_name}</NormalSpan>
//       </FancyBoldSpan>
//       <FancyBoldSpan style={{ borderBottom: "none" }}>
//         Team Members:
//       </FancyBoldSpan>
//       {teammates.length !== 0 ? (
//         <TeamMateDiv>
//           {teammates.map((member, i) =>
//             member.team_member_avatar === null ? (
//               <Img
//                 key={i}
//                 alt="team member profile pic"
//                 src={user_icon}
//               />
//             ) : (
//                 member.team_member_avatar.map((mem, index) => {
//                   memberProfile = JSON.parse(mem);
//                   return (
//                     <ImgWithBorder
//                       key={index}
//                       alt="team member profile pic"
//                       src={memberProfile.avatar}
//                     />
//                   );
//                 })
//               )
//           )}
//         </TeamMateDiv>
//       ) : (
//           <FancyBoldSpan>This team has no members</FancyBoldSpan>
//         )}
//       <FancyBoldSpan>
//         Hackathon Name:
//         <NormalSpan>{event_title}</NormalSpan>
//       </FancyBoldSpan>
//       <Button color="green">
//         <NavLink
//           style={{ textDecoration: "none", color: "white" }}
//           to={`/dashboard/event/${id}/participant-teams/${team.id}`}
//         >
//           Add Teammate
//         </NavLink>{" "}
//       </Button>
//     </TeamsCont>
//   );
// };

// export default TeamView;
