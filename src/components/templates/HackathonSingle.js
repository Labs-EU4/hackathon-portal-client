import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AddTeammates from '../templates/AddTeammates';
import { media } from "../../assets/styles/variables/media";
import { H2, H3 } from "../atoms/Heading";
import { BoldSpan } from "../atoms/Span";
import { CardWide } from "../atoms/Card";
import { IconLetter } from "../atoms/IconLetter";
import { Paragraph } from "../atoms/Paragraph";
import Button from "../atoms/Button";
import userImg from "../../assets/images/user_icon.svg";
import eventImg from "../../assets/images/event-img.jpg";
// import { useEventTeam } from "../../hooks";

import {
  registerEvent,
  unregisterEvent
} from "../../store/eventParticipants/actions";

import { useParticipants, useEventTeam, useTeams, useEvent } from "../../hooks";
import Spinner from "../molecules/Spinner";

export const NormalSpan = styled(BoldSpan)`
  font-weight: normal;
  text-transform: capitalize;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
`;

export const PTags = styled(Paragraph)`
  display: inline-block;
  text-align: center;
  border: 1px solid #e9b75f;
  border-radius: 6px;
  color: #212121;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin: 5px 5px 5px 0;
  padding: 7px 8px;
`;

export const PHosted = styled(Paragraph)`
  font-size: 14px;
  color: darkgray;
  margin: 3px 0 20px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const ButtonsDashGroup = styled.div`
  a,
  button {
    display: block;
    margin: 0 0 10px 0;
  }
`;

const TagsGroup = styled.div`
  margin-bottom: 20px;
`;

const HackathonSingle = ({ eventId, setEventId, isEventModalOpen, setIsEventModalOpen }) => {
  // const { id } = useParams();
  const id = eventId;
  const [ isAddJudgeOpen, setIsAddJudgeOpen ] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.currentUser);
  const [participants, fetchParticipants] = useParticipants(id);
  const [team] = useEventTeam(id);
  const [teams] = useTeams(id);
  const createdTeam = teams.find(t => t.team_lead === userId);

  const [data, loading] = useEvent(id, isAddJudgeOpen);

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

  const renderSingleEvent = () => {
    return (
      <ModalBody>
            {loading ? (
              <Spinner />
            ) : (
              <>
                  <StyledEventCard>
                    <EventCardLeftColumn>
                      <TitleContainer>
                        <IconLetter>{initial}</IconLetter>
                        <H2>{event_title}</H2>
                      </TitleContainer>
                      <EventImageContainer>
                        {/* Here it will go image of the event */}
                        <EventImg src={eventImg} alt="event-image" /> 
                      </EventImageContainer>
                      <ContentTitle text="Judges" />
                      <JudgesContainer>
                        {team.length === 0 ? (
                            <Paragraph>
                              No Judges have been selected for this event
                            </Paragraph>
                          ) : (
                            team.map(member =>
                              <JudgeCard>
                                {
                                  member.image_url === null ? (
                                    <JudgeImg
                                      key={member.user_id}
                                      style={{
                                        width: "80px",
                                        objectFit: "cover",
                                        display: "inline-block"
                                      }}
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
                                          style={{
                                            width: "80px",
                                            objectFit: "cover",
                                            borderRadius: "50%"
                                          }}
                                          alt="team member profile pic"
                                          src={memberProfile.avatar}
                                        />
                                      );
                                    })
                                  )
                                }
                                <JudgeInfo>
                                  <p>{member.fullname}</p>
                                </JudgeInfo>
                              </JudgeCard> 
                            )
                          )
                        }
                      </JudgesContainer>
                      <ContentTitle text="About this event" />
                      <Paragraph>
                        {description}
                      </Paragraph>
                      <ContentTitle text="Guidelines" />
                      <Paragraph>
                        {guidelines}
                      </Paragraph>
                      <ContentTitle text="Rubrics" />
                      <TagsGroup>
                        {rubrics.map(rubric => {
                          return <PTags key={rubric}>{toTittleCase(rubric)}</PTags>;
                        })}
                      </TagsGroup>
                      <ContentTitle text="Event Tags" />
                      <TagsGroup>
                        {tag_name && tag_name.length !== 0 ? (
                          tag_name.map((tagged, index) => {
                            return <PTags key={index}>{tagged}</PTags>;
                          })
                        ) : (
                          <Paragraph>No tags provided for this event</Paragraph>
                        )}
                      </TagsGroup>
                      <ButtonsDashGroup>
                        <div>
                          <Button onClick={() => setIsEventModalOpen(false)} color="grey">
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
                    </EventCardLeftColumn>
                    <TagsCardWide>
                      <div className="tags-header">
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
    
                        <div>
                          <BoldSpan>Hosted by:</BoldSpan>
                          <PHosted>{organizer_name || emailUser}</PHosted>
                        </div>
                      </div>
                      {/* <Details>
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
                      </Details> */}
                      <div className="status">
                        <BoldSpan>
                          Location: 
                          <NormalSpan>{location}</NormalSpan>
                        </BoldSpan>
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
                            // anchor
                            // to={`/dashboard/event/${id}/judges`}
                            onClick={() => setIsAddJudgeOpen(true)}
                            color="green"
                          >
                            Add Judges
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
                            <Button
                              style={{
                                border: "2px solid lightgray",
                                color: "lightgray"
                              }}
                              disabled
                            >
                              Registration Closed
                            </Button>
                          )
                        )}
                        {isTeamLead && !isEnded && (
                          <Button
                            anchor
                            color="green"
                            to={`/dashboard/event/${id}/participant-teams`}
                          >
                            Add teamate
                          </Button>
                        )}
                        {isRegistered && !isEnded && (
                          <Button
                            anchor
                            color="green"
                            to={`/dashboard/event/${id}/participant_submission`}
                          >
                            Submit Project
                          </Button>
                        )}
                        <Button
                          anchor
                          color="blue"
                          to={`/dashboard/event/${id}/projects`}
                        >
                          View submissions
                        </Button>
                      </ButtonsDashGroup>
                    </TagsCardWide>
                  </StyledEventCard>
              </>
            )}
      </ModalBody>
    );
  }

  if (isAddJudgeOpen) {
    return <AddTeammates 
      {...{id}}
      {...{setEventId}}
      {...{setIsEventModalOpen}} 
      {...{setIsAddJudgeOpen}}
    />
  }

  if (isEventModalOpen) {
    return renderSingleEvent();
  }
  return null
};

export default HackathonSingle;

const ModalBody = styled.div`
  position: absolute; top: 0; left: 0;
  background-color: rgba(0, 0, 0, .4);
  width: 100%; height: 100%;
  padding: 60px 20px;
  z-index: 100;
`;

const StyledEventCard = styled(CardWide)`
  position: relative;
  min-width: calc(100% - 250px); height: calc(100vh - 110px);
  background-color: ${props => props.theme.color.grey.bg};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0; height: 0;
  }
`;

const EventCardLeftColumn = styled.div`
  width: calc(100% - 350px);

  @media ${media.tablet} {
    width: 100%;
  }
`;

const EventImageContainer = styled.figure`
  width: 100%; height: 350px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const EventImg = styled.img`
  width: 100%; height: 100%;
`;

const JudgesContainer = styled.div`
  width: 100%;
  display: flex; flex-wrap: wrap;
`;

const JudgeCard = styled.div`
  display: flex;
  width: 33%; height: 80px;
  margin: 10px 0;
`;

const JudgeImg = styled.img`
  width: 80px;
  object-fit: cover;
  border-radius: 50%;
`;

const JudgeInfo = styled.div`
  ${props => props.theme.flex.column};
  padding: 10px;
`;

export const TagsCardWide = styled(CardWide)`
  position: fixed; left: calc(100% - 625px); top: 70px;
  width: 350px; max-height: calc(100vh - 130px);
  border: 3px solid ${props => props.theme.color.primary.regular};
  overflow-y: scroll;

  @media ${media.tablet} {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .tags-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid lightgray;
  }

  .status {
    padding: 30px 0;
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
`;


//NEW COMPONENT
const ContentTitle = ({text}) => {
  return (
    <StyledContentTitle>
      <p>{text}</p>
    </StyledContentTitle>
  );
}; 

// export default TitleContent;

const StyledContentTitle = styled.div`
  position: relative;
  width: 100%; height: 20px;
  border-bottom: 2px solid ${props => props.theme.color.grey.border};
  margin-bottom: 20px;

  p {
    display: flex; align-items: baseline;
    position: absolute; top: 100%;
    background-color: ${props => props.theme.color.grey.bg};
    padding: 5px 10px 5px 0;
    font-size: 2rem; font-weight: bold;
    text-transform: uppercase;
    transform: translateY(-45%);
  }
`;