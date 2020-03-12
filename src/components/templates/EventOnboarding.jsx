import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import { useRouteMatch, Switch, Route } from "react-router-dom";

import {
  BodyContainer,
  StyledRowBody,
  HeaderContent,
  MapContainer,
  MapFormContainer
} from "../../assets/styles/templates/EventOnboardingStyling";
import {
  StyledRowHead,
  StyledButton,
  StyledH4
} from "../../assets/styles/templates/UserEventsdashboardStyling";
import EventCard from "../molecules/EventCard";



export const BodyContainerColumn = styled(props => (
  <BodyContainer {...props} />
))`
  flex-direction: column;
  justify-content: start;
`;

const EventOnboarding = () => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const userEvents = events.filter(event => event.creator_id === userId);
  const globalEvents = events.filter(event => event.creator_id !== userId);

  return (
    <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>My hackathons</H3>
            <Link to="/dashboard/new">
              <Button color="green">Create New</Button>
            </Link>
          </RowHead>

          <RowBody spacing="start">
            {userEvents.length !== 0 ? (
              userEvents.map(event => (
                <EventCard key={event.event_title} event={event} />
              ))
            ) : (
                <H4>You have not created any events yet. Why wait?</H4>
              )}
          </RowBody>

          <RowHead>
            <H3>Global hackathons</H3>
          </RowHead>

          <RowBody spacing="start">
            {globalEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>
  );
};

export default EventOnboarding;
