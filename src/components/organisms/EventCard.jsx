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
  StyledStarIcon,
  StyledH4
} from "../../assets/styles/organisms/EventCardStyling";
import { Card } from "../../assets/styles/atoms/CardStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";
import Button from "../atoms/Button";
import eventImg from "../../assets/images/event-img.jpg";
import {
  registerEvent,
  unregisterEvent
} from "../../store/eventParticipants/actions";

const EventCard = ({ event }) => {
  const {
    id,
    event_id,
    event_title,
    event_description,
    organizer_name,
    organizer_profile_pic,
    location,
    join,
    registered,
    StyledParagraph
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
    setTimeout(() => {
      history.push("/dashboard");
    }, 4000);
  };

  const unregister = e => {
    e.preventDefault();
    dispatch(unregisterEvent(event_id));
    setTimeout(() => {
      history.push("/home");
    }, 4000);
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
          <StyledH4>{event_title}</StyledH4>
          <LocationParagraphN bold>{location}</LocationParagraphN>
          <Paragraph style={{ color: "white" }}>{excerpt}</Paragraph>
          <CardCountDown className={`countdown-${event_id}`}>
            {formattedDate}
          </CardCountDown>
          {/* <CardCountDown className="countdown">{countDownHandler(event.start_date)}</CardCountDown> */}
          <EventCTA>
            <Button
              link
              color="primary-reverse"
              to={`${pathname}/event/${event_id || id}`}
            >
              More Info
            </Button>
            {join === false ? (
              <Button link color="blue" to={`/event/${id}/edit`}>
                Edit event
              </Button>
            ) : registered === true ? (
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
