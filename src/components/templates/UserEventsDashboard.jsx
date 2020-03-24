import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  BodyContainer,
  StyledRowHead,
  DashboardContent,
  StyledButton
} from "../../assets/styles/templates/UserEventsDashboardStyling";
import { H4 } from "../../assets/styles/atoms/HeadingStyling";
import EventCard from "../organisms/EventCard";
import { useRegisteredEvents } from "../../hooks";

const UserEventsDashboard = ({ eventModalHandler }) => {
  const [isRegisteredEvents, setIsRegisteredEvents] = useState(true);
  const events = useSelector(state => state.events.data);
  const [data] = useRegisteredEvents();
  const registeredEvents = data?.body || [];
  const { userId } = useSelector(state => state.currentUser);
  const userEvents = events.filter(event => event.creator_id === userId);

  return (
    <BodyContainer>
      <StyledRowHead>
        <StyledButton start="true" onClick={() => setIsRegisteredEvents(false)}>
          My hackathons
        </StyledButton>
        <StyledButton onClick={() => setIsRegisteredEvents(true)}>
          Hackathon(s) you registered for
        </StyledButton>
      </StyledRowHead>
      <DashboardContent spacing="space-evenly">
        {!isRegisteredEvents ? (
          <>
            {userEvents.length !== 0 ? (
              userEvents.map(event => (
                <EventCard
                  key={event.event_title}
                  event={{ ...event, join: false }}
                  {...{ eventModalHandler }}
                />
              ))
            ) : (
              <H4>You haven't created any events yet. Why wait?</H4>
            )}
          </>
        ) : (
          <>
            {registeredEvents.length !== 0 ? (
              registeredEvents.map(event => (
                <EventCard
                  key={event.event_title}
                  event={{ ...event, registered: true }}
                  {...{ eventModalHandler }}
                />
              ))
            ) : (
              <H4>You haven't registered to any events yet. Why wait?</H4>
            )}
          </>
        )}
      </DashboardContent>
    </BodyContainer>
  );
};

export default UserEventsDashboard;
