import React from "react";

import {
  StyledEventCard,
  EventImage,
  OrgImg,
  StyledIconLetter,
  EventCardContent,
  EventCTA,
  DateParagraph,
  LocationParagraph,
  CardCountDown,
  StyledBookmarkIcon,
  StyledStarIcon
} from '../../assets/styles/molecules/EventCard';
import { Card } from "../../assets/styles/atoms/Card";
import { H4 } from "../../assets/styles/atoms/Heading";
import { Paragraph } from "../../assets/styles/atoms/Paragraph";
import Button from "../atoms/Button";
import eventImg from '../../assets/images/event-img.jpg';

const EventCard = ({ event, eventModalHandler }) => {
  const { id, event_id, event_title, event_description, organizer_name, organizer_profile_pic, location } = event;
  const letter = organizer_name && organizer_name.split("")[0];
  const organizerImg = organizer_profile_pic && JSON.parse(organizer_profile_pic[0]);
  const excerpt = event_description.substr(0, 100) + "...";

  // Date formatting
  const formattedDate = new Date(event.start_date).toLocaleDateString();
  const startDate = String(new Date(event.start_date)).split(" ");
  const startDay = startDate[2];
  const startMonth = startDate[1];
  const startYear = startDate[3];
  const endDate = String(new Date(event.end_date)).split(" ");
  const endDay = endDate[2];
  const endMonth = endDate[1];
  
  return (
    <StyledEventCard>
      <Card>
        <EventImage>
          <img src={eventImg} alt={event_title} />
        </EventImage>
        <EventCardContent>
          { 
            organizer_profile_pic ? (
              <OrgImg src={organizerImg.avatar} alt={organizer_name} />
            ) : letter && <StyledIconLetter>{letter}</StyledIconLetter>
          }
          <DateParagraph bold>
            {
              startMonth !== endMonth ? (
                <>{startMonth} {startDay} - {endMonth} {endDay}, {startYear}</>
              ) : startDay === endDay ? (
                <>{startMonth} {startDay}, {startYear}</>
              ) : (
                <>{startMonth} {startDay} - {endDay}, {startYear}</>
              )
            }
          </DateParagraph>
          <H4>{event_title}</H4>
          <LocationParagraph bold>{location}</LocationParagraph>
          <Paragraph>{excerpt}</Paragraph>
          <CardCountDown>{formattedDate}</CardCountDown>
          <EventCTA>
            <Button
              color="primary-reverse"
              onClick={() => eventModalHandler(event_id || id)}
            >More Info</Button>
            <Button 
              link
              color="primary"
              to={`/`}
            >Join Event</Button>
          </EventCTA>
        </EventCardContent>
        <StyledBookmarkIcon icon="bookmark" />
        <StyledStarIcon icon="star" />
      </Card>
    </StyledEventCard>
  );
};

export default EventCard;