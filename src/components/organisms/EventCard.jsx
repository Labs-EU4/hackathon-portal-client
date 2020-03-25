import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  StyledEventCard,
  EventImage,
  OrgImg,
  StyledIconLetter,
  EventCardContent,
  EventCTA,
  DateParagraph,
  LocationParagraphN,
  CardCountDown,
  StyledBookmarkIcon,
  StyledStarIcon
} from "../../assets/styles/organisms/EventCardStyling";
import { Card } from "../../assets/styles/atoms/CardStyling";
import { H4 } from "../../assets/styles/atoms/HeadingStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";
import Button from "../atoms/Button";
import eventImg from "../../assets/images/event-img.jpg";
import {
  registerEvent,
  unregisterEvent
} from "../../store/eventParticipants/actions";

const EventCard = ({ event, eventModalHandler }) => {
  const {
    id,
    event_id,
    event_title,
    event_description,
    organizer_name,
    organizer_profile_pic,
    location,
    join,
    registered
  } = event;
  const { pathname } = useLocation();
  const letter = organizer_name && organizer_name.split("")[0];
  const organizerImg =
    organizer_profile_pic && JSON.parse(organizer_profile_pic[0]);
  const excerpt = event_description.substr(0, 100) + "...";
  const dispatch = useDispatch();
  const history = useHistory();
  // Date formatting
  const formattedDate = new Date(event.start_date).toLocaleDateString();
  const startDate = String(new Date(event.start_date)).split(" ");
  const startDay = startDate[2];
  const startMonth = startDate[1];
  const startYear = startDate[3];
  const endDate = String(new Date(event.end_date)).split(" ");
  const endDay = endDate[2];
  const endMonth = endDate[1];

  const joinEvent = e => {
    e.preventDefault();
    dispatch(registerEvent(id));
    history.push("/dashboard");
  };

  const unregister = e => {
    e.preventDefault();
    dispatch(unregisterEvent(event_id));
    history.push("/dashboard");
  };

  return (
    <StyledEventCard>
      <Card>
        <EventImage>
          <img src={eventImg} alt={event_title} />
        </EventImage>
        <EventCardContent>
          {organizer_profile_pic ? (
            <OrgImg src={organizerImg.avatar} alt={organizer_name} />
          ) : (
            letter && <StyledIconLetter>{letter}</StyledIconLetter>
          )}
          <DateParagraph bold>
            {startMonth !== endMonth ? (
              <>
                {startMonth} {startDay} - {endMonth} {endDay}, {startYear}
              </>
            ) : startDay === endDay ? (
              <>
                {startMonth} {startDay}, {startYear}
              </>
            ) : (
              <>
                {startMonth} {startDay} - {endDay}, {startYear}
              </>
            )}
          </DateParagraph>
          <H4>{event_title}</H4>
          <LocationParagraphN bold>{location}</LocationParagraphN>
          <Paragraph>{excerpt}</Paragraph>
          <CardCountDown>{formattedDate}</CardCountDown>
          <EventCTA>
            <Button
              link
              color="primary-reverse"
              to={`${pathname}/event/${event_id || id}`}
            >
              More Info
            </Button>
            {join === false ? null : registered === true ? (
              <Button link color="grey" onClick={unregister} to={"#"}>
                Unregister
              </Button>
            ) : (
              <Button link color="primary" onClick={joinEvent} to={"#"}>
                Join Event
              </Button>
            )}
          </EventCTA>
        </EventCardContent>
        <StyledBookmarkIcon icon="bookmark" />
        <StyledStarIcon icon="star" />
      </Card>
    </StyledEventCard>
  );
};

export default EventCard;
