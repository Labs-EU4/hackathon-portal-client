import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Card } from "../atoms/Card";
import { H4 } from "../atoms/Heading";
import { IconLetter } from "../atoms/IconLetter";
import { Paragraph } from "../atoms/Paragraph";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
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
          <LocationParagraph>{location}</LocationParagraph>
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

const StyledEventCard = styled.div`
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

const OrgImg = styled.img`
  position: absolute; top: 130px; left: 10px;
  width: 30px; height: 30px;
  border: 1px solid ${props => props.theme.color.primary.regular}; border-radius: 50%;
  object-fit: cover;
`;

const StyledIconLetter = styled(IconLetter)`
  ${props => props.theme.flex.center};
  position: absolute; top: 130px; left: 10px;
  width: 30px; height: 30px;
  background-color: ${props => props.theme.color.black.regular};
  border: 1px solid ${props => props.theme.color.primary.regular}; border-radius: 50%;
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

// const StyledBtn = styled(Button)`
//   width: 47%;
//   border: 3px solid ${props => props.theme.color.primary.light};
//   border-radius: 3px;
//   padding: 8px 12px;
//   font-weight: 600;
//   text-transform: uppercase;

//   &:hover {
//     border: 3px solid ${props => props.theme.color.primary.regular};
//     transform: translateY(-2px);
//   }

//   &:last-child {
//     background-color: ${props => props.theme.color.primary.light};
  
//     &:hover {
//     }
//   }
// `;

const DateParagraph = styled(Paragraph)`
  margin-bottom: 0;
  color: ${props => props.theme.color.grey.regular};
`;

const LocationParagraph = styled(Paragraph)`
  margin: -5px 0 8px;
  color: ${props => props.theme.color.grey.regular};
`;

const CardCountDown = styled.div`
  position: absolute; top: 20px; left: 70%;
  background-color: ${props => props.theme.color.white.regular};
  border: 2px solid ${props => props.theme.color.black.regular};
  border-radius: 3px;
  padding: 5px 10px;
`;

const StyledBookmarkIcon = styled(Icon)`
  position: absolute; top: -5px; left: 10px;
  font-size: 3rem;
  color: ${props => props.theme.color.primary.regular};
  cursor: pointer;
`;

const StyledStarIcon = styled(Icon)`
  position: absolute; top: 0; left: 11px;
  font-size: 1.8rem;
  color: ${props => props.theme.color.white.regular};
  cursor: pointer;
`;
