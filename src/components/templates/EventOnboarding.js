import React from "react";
import styled from "styled-components";

import EventCard from "../molecules/EventCard";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import { useSelector } from "react-redux";

const EventOnboarding = () => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);

  return (
    <BodyContainer>
      <RowHead>
        <H3>Global hackathons</H3>
      </RowHead>
      <StyledRowBody spacing="start">
        {globalEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </StyledRowBody>
    </BodyContainer> 
  );
};

export default EventOnboarding;

const BodyContainer = styled.div`
  display: flex; flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.white};
  padding: 60px 0;
`;

const StyledRowBody = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0; height: 0;
  }
`;