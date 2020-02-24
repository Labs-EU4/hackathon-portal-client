import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import EventCard from "../molecules/EventCard";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import Button from "../atoms/Button";
import { useSelector } from "react-redux";

const EventOnboarding = () => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const userEvents = events.filter(event => event.creator_id === userId);
  const globalEvents = events.filter(event => event.creator_id !== userId);

  return (
    <BodyContainer>
      <RowHead>
        <H3>My hackathons</H3>
      </RowHead>

      <RowBody spacing="start">
        {userEvents.length !== 0 ? (
          userEvents.map(event => (
            <EventCard key={event.event_title} event={event} />
          ))
        ) : (
          <H4>You haven't created any events yet. Why wait?</H4>
        )}
      </RowBody>

      <RowHead>
        <H3>Global hackathons</H3>
      </RowHead>

      <RowBody spacing="start">
        {globalEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </RowBody>
    </BodyContainer> 
  );
};

export default EventOnboarding;

const BodyContainer = styled.div`
  display: flex; flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.white};
  padding: 60px 45px;
`;