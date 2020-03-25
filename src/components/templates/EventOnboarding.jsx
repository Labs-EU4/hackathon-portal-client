import React from "react";
import { useSelector } from "react-redux";

import {
  BodyContainer,
  StyledRowBody,
  HeaderContent,
  MapContainer,
  MapFormContainer,
  StyledSectionTitle
} from "../../assets/styles/templates/EventOnboardingStyling";
import {
  StyledRowHead,
  StyledH4
} from "../../assets/styles/templates/UserEventsDashboardStyling";
import EventCard from "../organisms/EventCard";

const EventOnboarding = ({ eventModalHandler }) => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);

  return (
    <BodyContainer>
      <HeaderContent id="open">
        <MapContainer>
        </MapContainer>
      </HeaderContent>
      <StyledRowHead>
        <StyledSectionTitle>Global Hackathons</StyledSectionTitle>
      </StyledRowHead>
      <StyledRowBody spacing="start">
        {globalEvents.length !== 0 ? (
          globalEvents.map(event => (
            <EventCard
              key={event.id}
              event={event}
              {...{ eventModalHandler }}
            />
          ))
        ) : (
          <StyledH4>There are no hackathons yet available</StyledH4>
        )}
      </StyledRowBody>
    </BodyContainer>
  );
};

export default EventOnboarding;
