import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  BodyContainer,
  StyledRowHead,
  DashboardContent,
  StyledButton, 
  StyledH4
} from '../../assets/styles/templates/UserEventsdashboard';
import { H4 } from "../../assets/styles/atoms/HeadingStyling";
import EventCard from "../molecules/EventCard";
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
          start
          bottomSpace
          onClick={() => setIsRegisteredEvents(false)}
        >My hackathons</StyledButton>
        <StyledButton
          bottomSpace
          onClick={() => setIsRegisteredEvents(true)}
        >Hackathon(s) you registered for</StyledButton>
      </StyledRowHead>
      <DashboardContent spacing="space-evenly">
        {
          !isRegisteredEvents ? (
            <>
              {userEvents.length !== 0 ? (
                userEvents.map(event => (
                  <EventCard 
                    key={event.event_title} 
                    event={event} 
                    {...{eventModalHandler}} 
                  />
                ))
              ) : (
                <StyledH4>You haven't created any events yet. Why wait?</StyledH4>
              )}
            </>
          ) : (
            <>
              {registeredEvents.length !== 0 ? (
                  registeredEvents.map(event => (
                    <EventCard 
                      key={event.event_title} 
                      event={event} 
                      {...{eventModalHandler}}
                    />
                  ))
                ) : (
                  <StyledH4>You haven't registered to any events yet. Why wait?</StyledH4>
              )}
            </>
          )
        }
      </DashboardContent>
    </BodyContainer> 
  );
};

export default UserEventsDashboard;