import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "../../assets/styles/atoms/Card";
import { H4 } from "../../assets/styles/atoms/Heading";
import { Paragraph } from "../../assets/styles/atoms/Paragraph";
import CardFooter from "./CardFooter";

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
  const excerpt = event_description.substr(0, 100) + "...";

  // Date formatting
  const formattedDate = new Date(start_date).toLocaleDateString();
  return (
    <StyledCardLink to={`/dashboard/event/${event_id || id}`}>
      <Card>
        <H4>{event_title}</H4>
        <Paragraph>{excerpt}</Paragraph>
        <CardFooter event_title={event_title} date={formattedDate} />
      </Card>
    </StyledCardLink>
  );
};

export default EventCard;