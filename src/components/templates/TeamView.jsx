import React, { useEffect } from "react";
import Button from "../atoms/Button";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTeammates } from "../../hooks";
import { user_icon } from "../../assets/images/user_icon.svg";
import { TeamsCont, FancyBoldSpan, StyledLetterIcon, NormalSpan, TeamMateDiv, Img, ImgWithBorder } from "../../assets/styles/templates/TeamViewStyling"

const TeamView = ({ team }) => {
  const { id } = useParams();

  const { event_title } = useSelector(state =>
    state.events.data.find(event => event.id === Number(id))
  );

  const [teammates, fetchTeammates] = useTeammates(team ?.id);
  const initial = team ?.team_name[0] || "U";

  let memberProfile;

  useEffect(() => {
    fetchTeammates();
  }, [fetchTeammates]);


  return (
    <TeamsCont>
      <StyledLetterIcon>{initial}</StyledLetterIcon>
      <FancyBoldSpan>Your Team</FancyBoldSpan>
      <FancyBoldSpan>
        Team Name:
        <NormalSpan>{team.team_name}</NormalSpan>
      </FancyBoldSpan>
      <FancyBoldSpan style={{ borderBottom: "none" }}>
        Team Members:
      </FancyBoldSpan>
      {teammates.length !== 0 ? (
        <TeamMateDiv>
          {teammates.map((member, i) =>
            member.team_member_avatar === null ? (
              <Img
                key={i}
                alt="team member profile pic"
                src={user_icon}
              />
            ) : (
                member.team_member_avatar.map((mem, index) => {
                  memberProfile = JSON.parse(mem);
                  return (
                    <ImgWithBorder
                      key={index}
                      alt="team member profile pic"
                      src={memberProfile.avatar}
                    />
                  );
                })
              )
          )}
        </TeamMateDiv>
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
    </TeamsCont>
  );
};

export default TeamView;
