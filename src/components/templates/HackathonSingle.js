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
import IconN from "../atoms/Icon";
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

const HackathonSingle = ({ isSideBarOpen }) => {
  const { id } = useParams();
  const [isAddJudgeOpen, setIsAddJudgeOpen] = useState(false);
  const [isSubmissionsPageOpen, setIsSubmissionsPageOpen] = useState(false);
  const [isSubmitProjectOpen, setIsSubmitProjectOpen] = useState(false);
  const [registerTeam, setRegisterTeam] = useState(false);
  //!!REMOVE THIS BIT AND ALL CORRELATED STYLES
  const [isSlideForm, setIsSlideForm] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
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
  const startDate = String(new Date(start_date)).split(" ");
  const startDay = startDate[2];
  const startMonth = startDate[1];
  const startYear = startDate[3];
  const endDate = String(new Date(end_date)).split(" ");
  const endDay = endDate[2];
  const endMonth = endDate[1];

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

  const handleRegistration = e => {
    e.preventDefault();
    if (isRegistered) {
      dispatch(unregisterEvent(id, history));
    } else {
      dispatch(registerEvent(id, history));
    }
    return fetchParticipants();
  };

  const handleTeamRegistration = () => {
    setRegisterTeam(true);
  }

  const toTittleCase = item => {
    return item
      .split("_")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleExit = () => {
    history.push(`/${currentPath}`);
  };

  const renderSingleEvent = () => {
    return (
      <ModalBody>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <StyledEventCard active={isSlideForm} menuOpen={isSideBarOpen}>
              <EventCardLeftColumn>
                <TitleContainer>
                  <Icon icon={["fab", "connectdevelop"]} />
                  <H2>{event_title}</H2>
                </TitleContainer>
                <EventImageContainer>
                  {/* Here it will go image of the event */}
                  <EventImg src={eventImg} alt="event-image" />
                </EventImageContainer>
                <ContentTitle text="Judges" {...{ isSlideForm }} />
                <JudgesContainer>
                  {team.length === 0 ? (
                    <Paragraph>
                      No Judges have been selected for this event
                    </Paragraph>
                  ) : (
                    team.map(member => (
                      <JudgeCard key={member.user_id}>
                        {member.image_url === null ? (
                          <JudgeImg
                            alt="team member profile pic"
                            src={userImg}
                          />
                        ) : (
                          member.image_url.map((mem, index) => {
                            let memberProfile;
                            memberProfile = JSON.parse(mem);
                            return (
                              <JudgeImg
                                key={index}
                                alt="team member profile pic"
                                src={memberProfile.avatar}
                              />
                            );
                          })
                        )}
                        <JudgeInfo>
                          <p>{member.fullname}</p>
                        </JudgeInfo>
                      </JudgeCard>
                    ))
                  )}
                </JudgesContainer>
                <ContentTitle text="About this event" {...{ isSlideForm }} />
                <Paragraph>{description}</Paragraph>
                <ContentTitle text="Guidelines" {...{ isSlideForm }} />
                <Paragraph>{guidelines}</Paragraph>
                <ContentTitle text="Rubrics" {...{ isSlideForm }} />
                <TagsGroup>
                  {rubrics.map(rubric => {
                    return <PTags key={rubric}>{toTittleCase(rubric)}</PTags>;
                  })}
                </TagsGroup>
                <ContentTitle text="Event Tags" {...{ isSlideForm }} />
                <TagsGroup>
                  {tag_name && tag_name.length !== 0 ? (
                    tag_name.map((tagged, index) => {
                      return <PTags key={index}>{tagged}</PTags>;
                    })
                  ) : (
                    <Paragraph>No tags provided for this event</Paragraph>
                  )}
                </TagsGroup>
              </EventCardLeftColumn>
              <TagsCardWide active={isSlideForm} menuOpen={isSideBarOpen}>
                <TagCard>
                  <NormalSpan>Hosted by:</NormalSpan>
                  <UserContainer>
                    {organizer_profile_pic === null ? (
                      <Image src={userImg} alt="user_icon" />
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
                    Participation type:{" "}
                    <SpanContent>{participation_type}</SpanContent>
                  </NormalSpan>
                  <NormalSpan style={{ marginBottom: "15px" }}>
                    Participants:{" "}
                    <SpanContent>{registeredPartcipants}</SpanContent>
                  </NormalSpan>
                  {!isTeamMember && isOpen ? (
                    <Button
                      color={isRegistered ? "grey" : "green"}
                      {...{
                        onClick: individualParticipation 
                        ? handleRegistration 
                        : handleTeamRegistration
                      }}
                    >{isRegistered ? `Unregister` : `Register`}</Button>
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
                    <Button size="wide" color="primary-reverse">
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
                    <Button
                      link
                      color="blue"
                      uppercase
                      to={`/event/${id}/edit`}
                    >
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
            </StyledEventCard>
          </>
        )}
        <ExitButton onClick={handleExit} color="primary">
          <Icon icon="times" />
        </ExitButton>
      </ModalBody>
    );
  };

  if (registerTeam) {
    return (
      <>
        {renderSingleEvent()}
        <CreateTeam 
          {...{ id }}
        />
      </>
    )
  }

  if (isAddJudgeOpen) {
    return (
      <>
        {renderSingleEvent()}
        <AddTeammates
          {...{ id }}
          {...{ setIsAddJudgeOpen }}
        />
      </>
    );
  }

  if (isSubmissionsPageOpen) {
    return (
      <>
        {renderSingleEvent()}
        <HackathonProjectsPage {...{ id }} {...{ setIsSubmissionsPageOpen }} />
      </>
    );
  }

  if (isSubmitProjectOpen) {
    return (
      <>
        {renderSingleEvent()}
        <ParticipantSubmissionPage
          {...{ id }}
          {...{ setIsSubmitProjectOpen }}
        />
      </>
    );
  }

  return renderSingleEvent();
};

export default HackathonSingle;