import React, { useEffect } from "react";
// import image from "./anon.png";
// Variables
const GMAP = "AIzaSyCVBthtEmWi0Ul8mejDQrBlOULXB1kTB3I";
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
  }

  console.log("NAVIGATION", navigator.geolocation.getCurrentPosition(showMap));
  navigator.geolocation.getCurrentPosition(showMap);

  // One-shot position request.

  // refs
  const googleMapRef = React.createRef();

  // helper functions
  let createGoogleMap = null;

  let imageH =
    "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png";

  var eventsLocation = [
    ["Coventry University", 52.3838, -1.56366, 0],
    ["Amsterdam", 52.373169, 4.89066, 0],
    ["Stratford,UK", 53.47555, 2.35784, 0],
    ["Rome", "Italy", 41.902782, 12.496365, 0],
    ["Paris,France", 48.856613, 2.352222, 0]
  ];

  const createMarker = (lati, long) => {
    const marker = new window.google.maps.Marker({
      position: { lat: lati, lng: long },
      label: "You",
      icon: imageH
    });
    marker.setMap(createGoogleMap);
  };

  // useEffect Hook
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GMAP}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      createGoogleMap = new window.google.maps.Map(googleMapRef.current, {
        zoom: 12,
        center: {
          lat: currentLocation[0],
          lng: currentLocation[1]
        }
      });

      eventsLocation.forEach(loc => {
        createMarker(loc[1], loc[2]);
      });
    });

    // googleMapScript.addEventListener("load", () => {
    //   createGoogleMap = new window.google.maps.Map(googleMapRef.current, {
    //     zoom: 12,
    //     center: {
    //       lat: currentLocation[0],
    //       lng: currentLocation[1]
    //     }
    //   });

    //   eventsLocation.forEach(loc => {
    //     createMarker(loc[1], loc[2]);
    //   });
    // });
  }, [currentLocation]);

  return true ? (
    <div id="google-map" ref={googleMapRef} style={mapStyles} />
  ) : (
    <p>Wait a moment while we find events in your area..</p>
  );
}

export default ResultPage;
