import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import EventCard from "../molecules/EventCard";
import { H3, H4 } from "../atoms/Heading";
import { RowHead } from "../atoms/RowHead";
import { RowBody } from "../atoms/RowBody";

import { StyledRowHead, StyledButton } from '../templates/UserEventsDashboard';

const EventOnboarding = ({ eventModalHandler }) => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);
  const currentDate = new Date().toLocaleDateString();

  console.log(new Date(events.start_date).toLocaleDateString())
  console.log(events);

  return (
    <BodyContainer>
      <HeaderContent>
        <MapContainer>
          <MapFormContainer/>
        </MapContainer>
      </HeaderContent>
      <StyledRowHead>
        <StyledButton gap>Global Hackathons</StyledButton>
        {/* <StyledButton>Closed Hackathons</StyledButton> */}
      </StyledRowHead>
      <StyledRowBody spacing="start">
        {globalEvents.map(event => (
          <EventCard key={event.id} event={event} {...{eventModalHandler}} />
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