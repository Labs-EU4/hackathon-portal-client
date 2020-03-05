import React from "react";
import { useSelector } from "react-redux";
// import { useRouteMatch, Switch, Route } from "react-router-dom";
import {
  BodyContainer,
  StyledRowBody,
  HeaderContent,
  MapContainer,
  MapFormContainer
} from '../../assets/styles/templates/EventOnboarding';
import { 
  StyledRowHead, 
  StyledButton 
} from '../../assets/styles/templates/UserEventsDashboard';
import EventCard from "../molecules/EventCard";

const EventOnboarding = ({ eventModalHandler }) => {
  const [ isOpenEventClicked, setIsOpenEventClicked ] = React.useState(false);
  // let { path, url } = useRouteMatch();
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);
  const today = new Date().getTime();

  return (
    <BodyContainer>
      <HeaderContent>
        <MapContainer>
          <MapFormContainer/>
        </MapContainer>
      </HeaderContent>
      <StyledRowHead>
        <StyledButton 
          gap
          onClick={() => setIsOpenEventClicked(false)}
        >Global Hackathons</StyledButton>
        <StyledButton
          onClick={() => setIsOpenEventClicked(true)}
        >Open Hackathons</StyledButton>
      </StyledRowHead>
      <StyledRowBody spacing="start">
      {!isOpenEventClicked ? (
          <>
            {globalEvents.map(event => (
              <EventCard key={event.id} event={event} {...{eventModalHandler}} />
            ))}
          </>
        ) : (
          <>
            {globalEvents.map(event => {
              const startTime = new Date(event.start_date).getTime();
              if(today <= startTime) {
                return <EventCard key={event.id} event={event} {...{eventModalHandler}} />
              } 
            })}
          </>
      )}
      </StyledRowBody> 
    </BodyContainer> 
  );
};

export default EventOnboarding;