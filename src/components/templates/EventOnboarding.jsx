import React, { useEffect, useRef } from "react";
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

// Variables
const GOOGLE_MAP_API_KEY = "AIzaSyBlSZRd1pc8t73WzRU7jDmnovZl287cxL8";
const myLocation = {
  // CN Tower Landmark
  lat: 35.6762,
  lng: 139.6503
};
// styles
const mapStyles = {
  width: "100%",
  height: "100%"
};
const EventOnboarding = ({ eventModalHandler }) => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);
  const today = new Date().getTime();
  const openEvents = globalEvents.filter(event => {
    const startTime = new Date(event.start_date).getTime();
    if(today <= startTime) return event
  })

  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 12,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.LEFT_CENTER
      },

      fullscreenControlOptions: {
        position: window.google.maps.ControlPosition.LEFT_TOP
      },
      center: {
        lat: myLocation.lat,
        lng: myLocation.lng
      }
    });

  const createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: myLocation.lat, lng: myLocation.lng },
      map: googleMap.current
    });

  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  });
  
  return (
    <BodyContainer>
      <HeaderContent id="open">
        <MapContainer>
          <MapFormContainer />
          <div id="google-map" ref={googleMapRef} style={mapStyles} />
        </MapContainer>
      </HeaderContent>
      <StyledRowHead>
        <StyledSectionTitle>Global Hackathons</StyledSectionTitle>
      </StyledRowHead>
      <StyledRowBody spacing="start">
        {openEvents.length !== 0 ? (
          openEvents.map(event => (
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

const StyledSectionTitle = styled.h2`
  margin-right: 10px;
  padding: 8px 22px;
  border: 2px solid ${props => props.theme.color.primary.regular};
  border-left: none;
  border-bottom: none;

  ${({ gap }) => gap === true && `margin-left: 10px;`}
`;

// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import UserHeader from "../organisms/UserHeader";
// import Nav from "../molecules/Nav";
// import { Footer } from "../organisms/index";
// import WideBody from "../atoms/WideBody";
// import BodyContainer from "../atoms/BodyContainer";
// import EventCard from "../molecules/EventCard";
// import { H3, H4 } from "../atoms/Heading";
// import { RowHead } from "../atoms/RowHead";
// import { RowBody } from "../atoms/RowBody";
// import Button from "../atoms/Button";
// import { useSelector } from "react-redux";

// export const BodyContainerColumn = styled(props => (
//   <BodyContainer {...props} />
// ))`
//   flex-direction: column;
//   justify-content: start;
// `;

// const EventOnboarding = () => {
//   const events = useSelector(state => state.events.data);
//   const { userId } = useSelector(state => state.currentUser);
//   const userEvents = events.filter(event => event.creator_id === userId);
//   const globalEvents = events.filter(event => event.creator_id !== userId);

//   return (
//     <div>
//       <UserHeader />
//       <WideBody>
//         <Nav />
//         <BodyContainerColumn>
//           <RowHead>
//             <H3>My hackathons</H3>
//             <Link to="/dashboard/new">
//               <Button color="green">Create New</Button>
//             </Link>
//           </RowHead>

//           <RowBody spacing="start">
//             {userEvents.length !== 0 ? (
//               userEvents.map(event => (
//                 <EventCard key={event.event_title} event={event} />
//               ))
//             ) : (
//               <H4>You have not created any events yet. Why wait?</H4>
//             )}
//           </RowBody>

//           <RowHead>
//             <H3>Global hackathons</H3>
//           </RowHead>

//           <RowBody spacing="start">
//             {globalEvents.map(event => (
//               <EventCard key={event.id} event={event} />
//             ))}
//           </RowBody>
//         </BodyContainerColumn>
//       </WideBody>
//       <Footer />
//     </div>
//   );
// };

// export default EventOnboarding;
