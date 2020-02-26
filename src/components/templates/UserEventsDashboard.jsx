import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import EventCard from "../molecules/EventCard";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";

import { useRegisteredEvents } from "../../hooks";
// import Spinner from "../molecules/Spinner";

const UserEventsDashboard = ({ eventModalHandler }) => {
  const events = useSelector(state => state.events.data);
  const [data, loading] = useRegisteredEvents();
  const registeredEvents = data?.body || [];
  const { userId } = useSelector(state => state.currentUser);
  const userEvents = events.filter(event => event.creator_id === userId);

  return (
    <BodyContainer>
      <RowHead>
        <H3>My hackathons</H3>
      </RowHead>
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
      <HackathonCard>
        <RowHead>
          <H3>Hackathon(s) you registered for</H3>
        </RowHead>
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
      </HackathonCard>
      {/* <HackathonCard>
        <RowHead>
          <H3>Hackathon(s) you registered for</H3>
        </RowHead>
        {loading ? (
          <Spinner />
        ) : (
            <RowBody spacing="start">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </RowBody>)}
      </HackathonCard> */}
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

const HackathonCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;