import React, { useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  SpanContent,
  PTags,
  TitleContainer,
  ButtonsDashGroup,
  TagsGroup,
  ModalBody,
  StyledEventCard,
  EventCardLeftColumn,
  EventImageContainer,
  EventImg,
  JudgesContainer,
  JudgeCard,
  JudgeImg,
  JudgeInfo,
  TagsCardWide,
  TagCard,
  UserContainer,
  Image,
  PHosted
} from "../../assets/styles/templates/HackathonSingleStyling";
import { NormalSpan } from "../../assets/styles/atoms/SpanStyling";
import { H2, H3 } from "../../assets/styles/atoms/HeadingStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";
import { ExitButton } from "../../assets/styles/atoms/ExitButtonStyling";
// import AddTeammates from '../templates/AddTeammates';
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import ContentTitle from "../molecules/ContentTitle";
// import HackathonProjectsPage from '../views/HackathonProjectsPage';
// import ParticipantSubmissionPage from '../views/ParticipantSubmissionPage';
import HackathonProjectsPage from "../views/HackathonProjectsPage";
import ParticipantSubmissionPage from "../views/ParticipantSubmissionPage";
import AddTeammates from "../templates/AddTeammates";
import CreateTeam from "../templates/CreateTeam";
import userImg from "../../assets/images/user_icon.svg";
import eventImg from "../../assets/images/event-img.jpg";
import Spinner from "../molecules/Spinner";
import {
  registerEvent,
  unregisterEvent
} from "../../store/eventParticipants/actions";
import { useParticipants, useEventTeam, useTeams, useEvent } from "../../hooks";

const HackathonSingle = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.currentUser);
  const [participants, fetchParticipants] = useParticipants(id);
  const [team] = useEventTeam(id);
  const [teams] = useTeams(id);
  const createdTeam = teams.find(t => t.team_lead === userId);

  const [data, loading] = useEvent(id);

  // Filter out event by URL param & grab user ID
  const [
    {
      creator_id,
      event_title,
      event_description: description,
      start_date,
      end_date,
      guidelines,
      participation_type,
      tag_name,
      location,
      organizer_email,
      organizer_name,
      organizer_profile_pic,
      rubrics
    }
  ] = data?.body || [
    {
      creator_id: 0,
      event_title: "",
      event_description: "",
      start_date: null,
      end_date: null,
      guidelines: "",
      participation_type: "",
      tag_name: [],
      location: "",
      organizer_email: "",
      organizer_name: "",
      organizer_profile_pic: [],
      rubrics: []
    }
  ];

  // Date formatting
  const formattedStartDate = new Date(start_date).toLocaleDateString();
  const formattedEndDate = new Date(end_date).toLocaleDateString();

  // Event is open or closed for registration
  const userCallback = p => p.user_id === userId;
  const today = new Date().getTime();
  const startTime = new Date(start_date).getTime();
  const endTime = new Date(end_date).getTime();
  const isOpen = today <= startTime;
  const isTeamLead = createdTeam;
  const isRegistered = participants.find(userCallback) || isTeamLead;
  const isEventCreator = creator_id === userId;
  const isTeamMember = team.find(userCallback) || isEventCreator;
  const isEnded = today > endTime;
  const individualParticipation = participation_type === "individual";

  // Number of participants registered
  const registeredPartcipants = participants.length;

  // Redacting user emails before rendering
  let redactedEmail = organizer_email.split("");
  let atIndex = redactedEmail.indexOf("@");
  let emailUser = redactedEmail.slice(0, atIndex);
  let emailHost = redactedEmail.slice(atIndex, redactedEmail.length);

  emailUser = emailUser
    .map((redact, index) => {
      if (index === 0 || index === emailUser.length - 1) {
        return redact;
      } else {
        redact = "*";
        return redact;
      }
    })
    .concat(emailHost)
    .join("");

  // Grab the first letter of title
  const initial = event_title[0] || "U";

  const handleRegistration = e => {
    e.preventDefault();

    if (isRegistered) {
      dispatch(unregisterEvent(id, history));
    } else {
      dispatch(registerEvent(id, history));
    }
    return fetchParticipants();
  };

  const toTittleCase = item => {
    return item
      .split("_")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <RowHead>
                <H3>{event_title}</H3>
              </RowHead>
              <RowBody>
                <EventCardWide className="single-event">
                  <TitleContainer>
                    <StyledLetterIcon>{initial}</StyledLetterIcon>
                    <H2>{event_title}</H2>
                  </TitleContainer>
                  <Paragraph>
                    <BoldSpan>Description:</BoldSpan>
                    {description}
                  </Paragraph>
                  <Separator />
                  <Details>
                    <div>
                      <Paragraph>
                        <BoldSpan>Event starts:</BoldSpan>
                        {formattedStartDate}
                      </Paragraph>
                    </div>
                    <div>
                      <Paragraph>
                        <BoldSpan>Event ends:</BoldSpan>
                        {formattedEndDate}
                      </Paragraph>
                    </div>
                  </Details>
                  <Separator />
                  <Details>
                    <div>
                      <Paragraph>
                        <BoldSpan>Location:</BoldSpan>
                        {location}
                      </Paragraph>
                    </div>
                  </Details>
                  <Separator />
                  <Paragraph>
                    <BoldSpan>Guidelines:</BoldSpan>
                    {guidelines}
                  </Paragraph>
                  <Separator />
                  <TagsGroup>
                    <BoldSpan>Rubrics:</BoldSpan>
                    {rubrics.map(rubric => {
                      return <PTags key={rubric}>{toTittleCase(rubric)}</PTags>;
                    })}
                  </TagsGroup>
                  <Separator />
                  <TagsGroup>
                    <PBold>Judging Panel:</PBold>
                    {team.length === 0 ? (
                      <Paragraph>
                        No Judges have been selected for this event
                      </Paragraph>
                    ) : (
                      team.map(member =>
                        member.image_url === null ? (
                          <ImgPlaceHolder
                            key={member.user_id}
                            alt="team member profile pic"
                            src={user_icon}
                          />
                        ) : (
                          member.image_url.map((mem, index) => {
                            let memberProfile;
                            memberProfile = JSON.parse(mem);
                            return (
                              <AvatarImg
                                key={index}
                                alt="team member profile pic"
                                src={memberProfile.avatar}
                              />
                            );
                          })
                        )
                      )
                    )}
                  </TagsGroup>
                  <Separator />
                  <TagsGroup>
                    <BoldSpan>Event Tags:</BoldSpan>
                    {tag_name && tag_name.length !== 0 ? (
                      tag_name.map((tagged, index) => {
                        return <PTags key={index}>{tagged}</PTags>;
                      })
                    ) : (
                      <Paragraph>No tags provided for this event</Paragraph>
                    )}
                  </TagsGroup>
                  <Separator />
                  <ButtonsDashGroup>
                    <div>
                      <Button anchor to={"/dashboard"} color="grey">
                        Back to Dashboard
                      </Button>
                      {isEventCreator && !isEnded && (
                        <Button
                          anchor
                          to={`/dashboard/event/${id}/edit`}
                          color="blue"
                        >
                          Edit event
                        </Button>
                      )}
                    </div>
                  </ButtonsDashGroup>
                </EventCardWide>
                <TagsCardWide>
                  <div className="tags-header">
                    {organizer_profile_pic === null ? (
                      <Image src={user_icon} alt="user_icon" />
                    ) : (
                      organizer_profile_pic.map((mem, index) => {
                        let memberProfile;
                        memberProfile = JSON.parse(mem);
                        return (
                          <Image
                            key={index}
                            src={memberProfile.avatar}
                            alt="user_icon"
                          />
                        );
                      })
                    )}

                    <div>
                      <BoldSpan>Hosted by:</BoldSpan>
                      <PHosted>{organizer_name || emailUser}</PHosted>
                    </div>
                  </div>
                  <div className="status">
                    <BoldSpan>
                      Status:
                      <NormalSpan>{isOpen ? " Open" : " Closed"}</NormalSpan>
                    </BoldSpan>
                    <BoldSpan>
                      Participation type:{" "}
                      <NormalSpan>{participation_type}</NormalSpan>
                    </BoldSpan>
                    <BoldSpan>
                      Participants:{" "}
                      <NormalSpan>{registeredPartcipants}</NormalSpan>
                    </BoldSpan>
                  </div>
                  <ButtonsDashGroup>
                    {isEventCreator && !isEnded && (
                      <Button
                        anchor
                        to={`/dashboard/event/${id}/team`}
                        color="green"
                      >
                        Add Teammates
                      </Button>
                    )}
                    {!isTeamMember && isOpen ? (
                      <Button
                        color={isRegistered ? "grey" : "green"}
                        {...{
                          anchor: !individualParticipation,
                          onClick: individualParticipation
                            ? handleRegistration
                            : null,
                          to: !individualParticipation
                            ? `/dashboard/event/${id}/participant-teams`
                            : null
                        }}
                      >
                        {isRegistered ? `Unregister` : `Register`}
                      </Button>
                    ) : (
                      !isOpen && (
                        <RegButton disabled>Registration Closed</RegButton>
                      )
                    )}
                    {isTeamLead && !isEnded && (
                      <Button
                        color="green"
                        anchor
                        to={`/dashboard/event/${id}/participant-teams`}
                      >
                        Add teamate
                      </Button>
                    )}
                    {isRegistered && !isEnded && (
                      <Button
                        color="green"
                        anchor
                        to={`/dashboard/event/${id}/participant_submission`}
                      >
                        Submit Project
                      </Button>
                    )}
                    <Button
                      anchor
                      to={`/dashboard/event/${id}/projects`}
                      color="blue"
                    >
                      View submissions
                    </Button>
                  </ButtonsDashGroup>
                </TagsCardWide>
              </RowBody>
            </>
          )}
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default HackathonSingle;
