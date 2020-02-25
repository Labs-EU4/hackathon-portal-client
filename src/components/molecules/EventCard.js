import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Card } from "../atoms/Card";
import { H4 } from "../atoms/Heading";
import { IconLetter } from "../atoms/IconLetter";
import { Paragraph } from "../atoms/Paragraph";
import Button from "../atoms/Button";
// import CardFooter from "./CardFooter";
import eventImg from '../../assets/images/event-img.jpg'

const EventCard = ({ event }) => {
  const { id, event_id, event_title, event_description, start_date } = event;
  const letter = event_title && event_title[0];
  const excerpt = event_description.substr(0, 100) + "...";

  // Date formatting
  const formattedDate = new Date(start_date).toLocaleDateString();
  return (
    <StyledCardLink to={`/dashboard/event/${event_id || id}`}>
      <Card>
        <EventImage>
          <img src={eventImg} alt={event_title} />
        </EventImage>
        <EventCardContent>
          <StyledIconLetter>{letter.toUpperCase()}</StyledIconLetter>
          <H4>{event_title}</H4>
          <Paragraph>{excerpt}</Paragraph>
          <CardCountDown>{formattedDate}</CardCountDown>
          <EventCTA>
            <StyledBtn 
              anchor 
              to={`/dashboard/event/${event_id || id}`}
            >More Info</StyledBtn>
            <StyledBtn 
              anchor 
              to={`/`}
            >Join Event</StyledBtn>
          </EventCTA>
        </EventCardContent>
      </Card>
    </StyledCardLink>
  );
};

export default EventCard;

const StyledCardLink = styled(Link)`
  text-decoration: none;

  &:hover > div {
    ${props => props.theme.shadow.box};
    transform: translateY(5px);
    transition: box-shadow 0.2s ease, transform .4s ease;
  }
`;

const EventImage = styled.figure`
  width: 100%; height: 170px;

  & > img {
    width: 100%; height: 100%;
  }
`;

const StyledIconLetter = styled(IconLetter)`
  ${props => props.theme.flex.center};
  position: absolute; top: 130px; left: 10px;
  width: 30px; height: 30px;
  background-color: ${props => props.theme.color.black.regular};
  border: 2px solid white; border-radius: 50%;
  object-fit: cover;
  color: ${props => props.theme.color.primary.regular};
`;

const EventCardContent = styled.div`
  width: 100%; height: 220px;
  padding: 10px;
  overflow: hidden;
`;

const EventCTA = styled.div`
  ${props => props.theme.flex.custom('space-between', 'center')};
  position: absolute; top: calc(100% - 50px); left: 0;
  width: 100%;
  padding: 0 10px 5px;
`;

const StyledBtn = styled(Button)`
  border: 3px solid ${props => props.theme.color.grey.border};

  &:hover {
    border: 3px solid ${props => props.theme.color.primary.regular};
  }
`;

const CardCountDown = styled.div`
  position: absolute; top: 20px; left: 70%;
  background-color: ${props => props.theme.color.white.regular};
  border: 2px solid ${props => props.theme.color.black.regular};
  border-radius: 3px;
  padding: 5px 10px;
`;
