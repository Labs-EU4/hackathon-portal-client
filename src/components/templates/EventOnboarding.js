import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import EventCard from "../molecules/EventCard";

import { StyledRowHead, StyledButton } from '../templates/UserEventsDashboard';

const EventOnboarding = ({ eventModalHandler }) => {
  const [ isOpenEventClicked, setIsOpenEventClicked ] = React.useState(false);
  let { path, url } = useRouteMatch();
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

const BodyContainer = styled.div`
  display: flex; flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.color.white};
  padding: 0;
`;

const StyledRowBody = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 0; height: 0;
  }
`;

// const StyledRowHead = styled(RowHead)`
//   margin: 0 0 0 20px;
//   padding: 0 20px;

//   & > * {
//     font-weight: 600;
//   } 
// `;

const HeaderContent = styled.div`
  ${props => props.theme.flex.center};
  width: 100%; height: 33vh;
`;

const MapContainer = styled.div`
  position: relative;
  width: 70%; height: 90%;
  border: 3px solid ${props => props.theme.color.grey.border};
`;

const MapFormContainer = styled.div`
  position: absolute; top: 50%; left: 75%;
  transform: translateY(-50%);
  width: 300px; height: 200px;
  background-color: ${props => props.theme.color.white.bg};
  border: 3px solid ${props => props.theme.color.primary.regular}; border-radius: 5px;
`; 