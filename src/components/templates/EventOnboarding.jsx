import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  BodyContainer,
  StyledRowBody,
  HeaderContent,
  MapContainer,
  StyledSectionTitle
} from "../../assets/styles/templates/EventOnboardingStyling";
import {
  StyledRowHead,
  StyledH4
} from "../../assets/styles/templates/UserEventsDashboardStyling";
import EventCard from "../organisms/EventCard";
import image from "../../assets/images/anon.png";
const EventOnboarding = ({ eventModalHandler }) => {
  const events = useSelector(state => state.events.data);
  const { userId } = useSelector(state => state.currentUser);
  const globalEvents = events.filter(event => event.creator_id !== userId);

  // import image from "./anon.png";
  // Variables
  const GMAP = "AIzaSyCVBthtEmWi0Ul8mejDQrBlOULXB1kTB3I";
  // eslint-disable-next-line
  const defaultLocation = {
    // CN Tower Landmark
    lat: 50.767998,
    lng: 4.319822
  };
  // styles
  const mapStyles = {
    width: "100%",
    height: "100%"
  };

  const [currentLocation, setCurrentLocation] = useState({
    lat: defaultLocation.lat,
    lng: defaultLocation.lng
  });

  const googleMapScript = document.createElement("script");
  googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GMAP}&libraries=places`;
  window.document.body.appendChild(googleMapScript);

  googleMapScript.addEventListener("load", () => {
    // eslint-disable-next-line
    createGoogleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 12,
      center: {
        lat: currentLocation.lat,
        lng: currentLocation.lng
      }
    });

    eventsLocation.forEach(loc => {
      createMarker(loc[1], loc[2], loc[0]);
    });
  });

  // refs
  const googleMapRef = React.createRef();

  // helper functions
  let createGoogleMap = null;

  var eventsLocation = [
    [
      "<p style=color:green;background:black;font-weight:bold;padding:7px;border-radius:15px>CovHack</p>",
      52.3838,
      -1.56366,
      0
    ],
    [
      "<p style=color:green;background:black;font-weight:bold;padding:7px;border-radius:15px>RTL Dathaton 2020</p>",
      52.373169,
      4.89066,
      0
    ],
    [
      "<p style=color:green;background:black;font-weight:bold;padding:7px;border-radius:15px>World Tournament 2020</p>",
      51.509865,
      -0.118092,
      0
    ],
    ["Rome", "Italy", 41.902782, 12.496365, 0],
    [
      "<p style=color:green;background:black;font-weight:bold;padding:7px;border-radius:15px>Top EU Hackers</p>",
      48.856613,
      2.352222,
      0
    ]
  ];

  const createMarker = (lati, long, title) => {
    var infowindow = new window.google.maps.InfoWindow({
      content: title
    });

    const marker = new window.google.maps.Marker({
      position: { lat: lati, lng: long },
      icon: image
    });
    marker.setMap(createGoogleMap);
    marker.addListener("click", function() {
      infowindow.open(createGoogleMap, marker);
    });
  };

  // useEffect Hook
  useEffect(() => {
    function showMap(position) {
      // Show a map centered at (position.coords.latitude, position.coords.longitude).
      return setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }
    navigator.geolocation.getCurrentPosition(showMap);
    // eslint-disable-next-line
  }, []);

  return (
    <BodyContainer>
      <HeaderContent id="open">
        <MapContainer>
          <div id="google-map" ref={googleMapRef} style={mapStyles} />
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
