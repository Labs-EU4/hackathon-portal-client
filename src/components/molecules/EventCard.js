import React from "react";
import { useLocation } from "react-router-dom";

import {
  StyledEventCardN,
  EventImageN,
  OrgImgN,
  StyledIconLetterN,
  EventCardContentN,
  EventCTAN,
  DateParagraphN,
  LocationParagraphN,
  CardCountDownN,
  StyledBookmarkIconN,
  StyledStarIconN
} from "../../assets/styles/molecules/EventCardStyling";
import { CardN } from "../../assets/styles/atoms/Card";
import { H4N } from "../../assets/styles/atoms/Heading";
import { ParagraphN } from "../../assets/styles/atoms/Paragraph";
import Button from "../atoms/Button";
import eventImg from "../../assets/images/event-img.jpg";

const EventCard = ({ event, eventModalHandler }) => {
  const {
    id,
    event_id,
    event_title,
    event_description,
    organizer_name,
    organizer_profile_pic,
    location
  } = event;
  const { pathname } = useLocation();
  const letter = organizer_name && organizer_name.split("")[0];
  const organizerImg =
    organizer_profile_pic && JSON.parse(organizer_profile_pic[0]);
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
    <StyledEventCardN>
      <CardN>
        <EventImageN>
          <img src={eventImg} alt={event_title} />
        </EventImageN>
        <EventCardContentN>
          {organizer_profile_pic ? (
            <OrgImgN src={organizerImg.avatar} alt={organizer_name} />
          ) : (
              letter && <StyledIconLetterN>{letter}</StyledIconLetterN>
            )}
          <DateParagraphN bold>
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
          </DateParagraphN>
          <H4N>{event_title}</H4N>
          <LocationParagraphN bold>{location}</LocationParagraphN>
          <ParagraphN>{excerpt}</ParagraphN>
          <CardCountDownN>{formattedDate}</CardCountDownN>
          <EventCTAN>
            <Button
              link
              color="primary-reverse"
              to={`${pathname}/event/${event_id || id}`}
            >
              More Info
            </Button>
            <Button link color="primary" to={`/`}>
              Join Event
            </Button>
          </EventCTAN>
        </EventCardContentN>
        <StyledBookmarkIconN icon="bookmark" />
        <StyledStarIconN icon="star" />
      </CardN>
    </StyledEventCardN>
  );
};

export default EventCard;