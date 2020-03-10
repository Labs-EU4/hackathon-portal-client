import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import { useRouteMatch, Switch, Route } from "react-router-dom";
import { Client } from "@googlemaps/google-maps-services-js";

// import {
//   BodyContainer,
//   StyledRowBody,
//   HeaderContent,
//   MapContainer,
//   MapFormContainer
// } from "../../assets/styles/templates/EventOnboarding";
// import {
//   StyledRowHead,
//   StyledButton,
//   StyledH4
// } from "../../assets/styles/templates/UserEventsdashboard";

import EventCard from "../molecules/EventCard";

const ResultPage = () => {
  // const [ isOpenEventClicked, setIsOpenEventClicked ] = React.useState(false);
  // let { path, url } = useRouteMatch();
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);
  const today = new Date().getTime();

  const googleMapsClient = require("@google/maps").createClient({
    key: "AIzaSyBlSZRd1pc8t73WzRU7jDmnovZl287cxL8"
  });

  googleMapsClient.geocode(
    {
      address: "1600 Amphitheatre Parkway, Mountain View, CA"
    },
    function(err, response) {
      if (!err) {
        console.log("LOCATION", response.json.results);
      }
    }
  );
  // const client = new Client({});

  // client
  //   .elevation({
  //     params: {
  //       locations: [{ lat: 45, lng: -110 }],
  //       key: process.env.GOOGLE_MAPS_API_KEY
  //     },
  //     timeout: 1000 // milliseconds
  //   })
  //   .then(r => {
  //     console.log("GOOGLE API LOCATION MAP", r.data.results[0].elevation);
  //   })
  //   .catch(e => {
  //     console.log("GOOGLE ERROR", e);
  //   });
  return (
    <div>
      Google api
      <p></p>
    </div>
  );
};

export default ResultPage;

const StyledSectionTitle = styled.h2`
  margin-right: 10px;
  padding: 8px 22px;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-left: none;
  border-bottom: none;

  ${({ gap }) => gap === true && `margin-left: 10px;`}
`;

{
  /* <BodyContainer>
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
</BodyContainer> */
}
