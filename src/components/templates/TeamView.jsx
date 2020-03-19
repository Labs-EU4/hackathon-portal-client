import React, { useEffect } from "react";
import {
  TeamsContainer,
  FancyBoldSpan,
  StyledLetterIcon,
  NormalSpan,
  DivWrapper,
  ImgTeammates,
  TeamMemberImg,
  NavLinks
} from "../../assets/styles/templates/TeamViewStyling";
import Button from "../atoms/Button";
import { useParams } from "react-router-dom";
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
        <DivWrapper>
          {teammates.map((member, i) =>
            member.team_member_avatar === null ? (
              <ImgTeammates
                key={i}
                alt="team member profile pic"
                src={user_icon}
              />
            ) : (
              member.team_member_avatar.map((mem, index) => {
                memberProfile = JSON.parse(mem);
                return (
                  <TeamMemberImg
                    alt="team member profile pic"
                    src={memberProfile.avatar}
                  />
                );
              })
            )
          )}
        </DivWrapper>
      ) : (
        <FancyBoldSpan>This team has no members</FancyBoldSpan>
      )}
      <FancyBoldSpan>
        Hackathon Name:
        <NormalSpan>{event_title}</NormalSpan>
      </FancyBoldSpan>
      <Button color="green">
        <NavLinks to={`/dashboard/event/${id}/participant-teams/${team.id}`}>
          Add Teammate
        </NavLinks>
      </Button>
    </TeamsContainer>
  );
};

export default TeamView;
