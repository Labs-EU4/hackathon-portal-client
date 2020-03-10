import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
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
  StyledButton,
  StyledH4
} from '../../assets/styles/templates/UserEventsdashboard';
import EventCard from "../molecules/EventCard";

const EventOnboarding = ({ eventModalHandler }) => {
  // const [ isOpenEventClicked, setIsOpenEventClicked ] = React.useState(false);
  // let { path, url } = useRouteMatch();
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);
  const today = new Date().getTime();

  return (
    <BodyContainer>
      <HeaderContent id="open">
        <MapContainer>
          <MapFormContainer/>
        </MapContainer>
      </HeaderContent>
      <StyledRowHead>
        <StyledSectionTitle>Global Hackathons</StyledSectionTitle>
        <StyledButton
          anchor
          gap
          href="/#open"
        >Open Hackathons</StyledButton>
      </StyledRowHead>
      <StyledRowBody spacing="start" id="global">
        { globalEvents.length !== 0 ? (
            globalEvents.map(event => (
              <EventCard key={event.id} event={event} {...{eventModalHandler}} />
            ))
          ) : (
            <StyledH4>
              There are no results yet available
            </StyledH4>
          )
        }
      </StyledRowBody> 
    </BodyContainer> 
  );
};

export default EventOnboarding;

const StyledSectionTitle = styled.h2`
  margin-right: 10px;
  padding: 8px 22px;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-left: none;
  border-bottom: none;

  ${({gap}) => gap === true && `margin-left: 10px;` }
`;