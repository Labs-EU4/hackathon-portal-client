import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Card } from "../atoms/Card";
import { H4 } from "../atoms/Heading";
import { IconLetter } from "../atoms/IconLetter";
import { Paragraph } from "../atoms/Paragraph";
import CardFooter from "./CardFooter";

const EventCard = ({ event }) => {
  const { id, event_id, event_title, event_description, start_date } = event;
  const letter = event_title && event_title[0];
  const excerpt = event_description.substr(0, 100) + "...";

  // Date formatting
  const formattedDate = new Date(start_date).toLocaleDateString();
  return (
    <StyledCardLink to={`/dashboard/event/${event_id || id}`}>
      <Card>
        <IconLetter>{letter}</IconLetter>
        <H4>{event_title}</H4>
        <Paragraph>{excerpt}</Paragraph>
        <CardFooter date={formattedDate} />
      </Card>
    </StyledCardLink>
  );
};

export default EventCard;

const StyledCardLink = styled(Link)`
  text-decoration: none;

  &:hover > div {
    ${props => props.theme.shadow.box};
    transition: all 0.2s ease;
  }
`;
