
import React from "react";
import { useLocation } from "react-router-dom";

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
} from "../../assets/styles/molecules/EventCardStyling";
import { Card } from "../../assets/styles/atoms/CardStyling";
import { H4 } from "../../assets/styles/atoms/HeadingStyling";
import { Paragraph } from "../../assets/styles/atoms/ParagraphStyling";
import Button from "../atoms/Button";
import eventImg from "../../assets/images/event-img.jpg";
const StyledCardLink = styled(Link)`
  text-decoration: none;
  transition: all 0.5s;
  overflow-wrap: break-word;
  &:hover > div {
    transition: all 0.5s;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
  }
`;

const EventCard = ({ event }) => {
  const { id, event_id, event_title, event_description, start_date } = event;
  const letter = event_title && event_title[0];
  const excerpt = event_description.substr(0, 100) + "...";

  // Date formatting
  const formattedDate = new Date(start_date).toLocaleDateString();
  return (
    <StyledCardLink to={`/dashboard/event/${event_id || id}`}>
      <Card>
        <LetterIcon>{letter}</LetterIcon>
        <H4>{event_title}</H4>
        <Paragraph>{excerpt}</Paragraph>
        <CardFooter event_title={event_title} date={formattedDate} />
      </Card>
    </StyledCardLink>
  );
};

export default EventCard;
