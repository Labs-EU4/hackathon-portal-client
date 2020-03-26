import React from "react";

import {
  SpanContent,
  TagsCardWide,
  TagCard,
  UserContainer,
  Image,
  PHosted,
  ButtonsDashGroup,
  OrgImg
} from "../../assets/styles/templates/HackathonSingleStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";
import { NormalSpan } from "../../assets/styles/atoms/SpanStyling";
import Button from "../atoms/Button";
import userImg from "../../assets/images/user_icon.svg";

const HSTagsCard = ({
  isSideBarOpen,
  start_date,
  end_date,
  team,
  participants,
  organizer_profile_pic,
  participation_type,
  location,
  creator_id,
  isTeamLead,
  isRegistered,
  organizer_name,
  userId,
  id,
  setIsAddJudgeOpen,
  setRegisterTeam,
  setIsSubmitProjectOpen,
  setIsSubmissionsPageOpen,
  handleRegistration,
  handleTeamRegistration,
  userCallback,
  emailUser
}) => {
  // Date formatting
  const startDate = String(new Date(start_date)).split(" ");
  const startDay = startDate[2];
  const startMonth = startDate[1];
  const startYear = startDate[3];
  const endDate = String(new Date(end_date)).split(" ");
  const endDay = endDate[2];
  const endMonth = endDate[1];

  // Event is open or closed for registration
  const today = new Date().getTime();
  const startTime = new Date(start_date).getTime();
  const endTime = new Date(end_date).getTime();
  const isOpen = today <= startTime;
  const isEventCreator = creator_id === userId;
  const isTeamMember = team.find(userCallback) || isEventCreator;
  const isEnded = today > endTime;
  const individualParticipation = participation_type === "individual";

  // Number of participants registered
  const registeredParticipants = participants.length;

  return (
    <TagsCardWide menuOpen={isSideBarOpen}>
      <TagCard>
        <NormalSpan>Hosted by:</NormalSpan>
        <UserContainer>
          {organizer_profile_pic === null ? (
            <OrgImg icon="user-circle"/>
          ) : (
            organizer_profile_pic.map((mem, index) => {
              let memberProfile;
              memberProfile = JSON.parse(mem);
              return (
                <Image key={index} src={memberProfile.avatar} alt="user_icon" />
              );
            })
          )}
          <PHosted>{organizer_name || emailUser}</PHosted>
        </UserContainer>
      </TagCard>
      <TagCard>
        <NormalSpan>
          Location:
          <SpanContent>&nbsp;{location}</SpanContent>
        </NormalSpan>
        <NormalSpan>
          Status:
          <SpanContent>{isOpen ? " Open" : " Closed"}</SpanContent>
        </NormalSpan>
        <NormalSpan>
          Participation type: <SpanContent>{participation_type}</SpanContent>
        </NormalSpan>
        <NormalSpan style={{ marginBottom: "15px" }}>
          Participants: <SpanContent>{registeredParticipants}</SpanContent>
        </NormalSpan>
        {!isTeamMember && isOpen ? (
          <Button
            color={isRegistered ? "grey" : "green"}
            {...{
              onClick: individualParticipation
                ? handleRegistration
                : handleTeamRegistration
            }}
          >
            {isRegistered ? `Unregister` : `Register`}
          </Button>
        ) : (
          !isOpen && <Button disabled>Registration Closed</Button>
        )}
      </TagCard>
      <TagCard>
        <NormalSpan>Event dates:</NormalSpan>
        {startMonth !== endMonth ? (
          <Paragraph center bold size="large">
            {startMonth} {startDay} - {endMonth} {endDay}, {startYear}
          </Paragraph>
        ) : startDay === endDay ? (
          <Paragraph center bold size="large">
            {startMonth} {startDay}, {startYear}
          </Paragraph>
        ) : (
          <Paragraph center bold size="large">
            {startMonth} {startDay} - {endDay}, {startYear}
          </Paragraph>
        )}
        {/* Implement this feature using google calendar or other similar services */}
        {isOpen ? (
          <Button size="wide" disabled>
            Add to calendar
          </Button>
        ) : (
          <Button size="wide" disabled>
            Add to calendar
          </Button>
        )}
      </TagCard>
      <ButtonsDashGroup>
        {isEventCreator && !isEnded && (
          <Button link color="blue" uppercase to={`/event/${id}/edit`}>
            Edit event
          </Button>
        )}
        {isEventCreator && !isEnded && (
          <Button
            size="wide"
            color="green"
            uppercase
            onClick={() => setIsAddJudgeOpen(true)}
          >
            Add Judges
          </Button>
        )}
        {isTeamLead && !isEnded && (
          <Button
            size="wide"
            color="green"
            uppercase
            onClick={() => setRegisterTeam(true)}
          >
            Add teamate
          </Button>
        )}
        {isRegistered && !isEnded && (
          <Button
            size="wide"
            color="green"
            uppercase
            onClick={() => setIsSubmitProjectOpen(true)}
          >
            Submit Project
          </Button>
        )}
        <Button
          size="wide"
          color="blue"
          uppercase
          onClick={() => setIsSubmissionsPageOpen(true)}
        >
          View submissions
        </Button>
      </ButtonsDashGroup>
    </TagsCardWide>
  );
};

export default HSTagsCard;
