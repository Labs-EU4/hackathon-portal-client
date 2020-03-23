import React, { useEffect, useRef } from "react";

// Variables
const GMAP = "AIzaSyBlSZRd1pc8t73WzRU7jDmnovZl287cxL8";
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
let currentLocation;

function ResultPage(props) {
  function showMap(position) {
    // Show a map centered at (position.coords.latitude, position.coords.longitude).

    return (currentLocation = [
      position.coords.latitude,
      position.coords.longitude
    ]);
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);
  }

  // One-shot position request.
  navigator.geolocation.getCurrentPosition(showMap);

  // refs
  const googleMapRef = React.createRef();
  const googleMap = useRef(null);
  const marker = useRef(null);

  // helper functions
  const createGoogleMap = () =>
    new window.google.maps.Map(googleMapRef.current, {
      zoom: 12,
      center: {
        lat: currentLocation[0],
        lng: currentLocation[1]
      }
    });

  let createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: currentLocation[0], lng: currentLocation[1] },
      map: googleMap.current,
      label: "You"
    });

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GMAP}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      googleMap.current = createGoogleMap();
      marker.current = createMarker();
    });
  });

  return currentLocation ? (
    <div id="google-map" ref={googleMapRef} style={mapStyles} />
  ) : (
    <p>Wait a moment while we find events in your area..</p>
  );
}

export default ResultPage;
