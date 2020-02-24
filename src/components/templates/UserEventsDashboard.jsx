import React from "react";
import styled from "styled-components";

import EventCard from "../molecules/EventCard";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { useSelector } from "react-redux";

const UserEventsDashboard = () => {
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
    </BodyContainer> 
  );
};

export default UserEventsDashboard;

const BodyContainer = styled.div`
  display: flex; flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.white};
  padding: 60px 45px;
`;