import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import EventCard from "../molecules/EventCard";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";
import Button from '../atoms/Button';

import { useRegisteredEvents } from "../../hooks";

const UserEventsDashboard = ({ eventModalHandler }) => {
  const [ isRegisteredEvents, setIsRegisteredEvents ] = useState(false);
  const events = useSelector(state => state.events.data);
  const [data, loading] = useRegisteredEvents();
  const registeredEvents = data?.body || [];
  const { userId } = useSelector(state => state.currentUser);
  const userEvents = events.filter(event => event.creator_id === userId);

  return (
    <BodyContainer>
      <StyledRowHead>
        <StyledButton
          onClick={() => setIsRegisteredEvents(false)}
        >My hackathons</StyledButton>
        <StyledButton
          onClick={() => setIsRegisteredEvents(true)}
        >Hackathon(s) you registered for</StyledButton>
      </StyledRowHead>
      {
        !isRegisteredEvents ? (
          <RowBody spacing="start">
            {userEvents.length !== 0 ? (
              userEvents.map(event => (
                <EventCard 
                  key={event.event_title} 
                  event={event} 
                  {...{eventModalHandler}} 
                />
              ))
            ) : (
              <H4>You haven't created any events yet. Why wait?</H4>
            )}
          </RowBody>
        ) : (
          <RowBody spacing="start">
            {registeredEvents.length !== 0 ? (
                registeredEvents.map(event => (
                  <EventCard 
                    key={event.event_title} 
                    event={event} 
                    {...{eventModalHandler}}
                  />
                ))
              ) : (
                <H4>You haven't registered to any events yet. Why wait?</H4>
            )}
          </RowBody>
        )
      }
    </BodyContainer> 
  );
};

export default UserEventsDashboard;

const BodyContainer = styled.div`
  display: flex; flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.white};
  padding: 60px 45px;
  overflow: scroll;
`;

const StyledRowHead = styled(RowHead)`
  justify-content: flex-start;
  border-bottom: 2px solid red;
  padding-bottom: 0; margin-bottom: 0;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  border: 2px solid red;
  border-bottom: none;
`;

const HackathonCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;